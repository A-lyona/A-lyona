let playPauseIcon = document.querySelector('.video_play_icon')
let videoBtn = document.querySelector('.video_player_btn')
let volumeMuteIcon = document.querySelector('.video_volume_icon')
let progress = document.querySelector('.video_player_progress')
let playerVolume = document.querySelector('.video_player_volume')
let poster = document.querySelector('.video_player_poster')
let video = document.querySelector('.video_player_view')
let playerBtn = document.querySelector('.video_player_btn')

//............................................play-Pause.................................................//

function switchPlayPause() {
  playPauseIcon.classList.toggle('video_pause_icon')
  videoBtn.classList.toggle('video_player_btn')
  if (playPauseIcon.classList.contains('video_pause_icon')) {
    video.play()
  } else {
    video.pause()
  }
}
playPauseIcon.addEventListener('click', switchPlayPause)

//............................................video-Button.................................................//

function switchVideoBtn() {
  playPauseIcon.classList.toggle('video_pause_icon')
  videoBtn.classList.toggle('video_player_btn')
  poster.style.display = 'none'
  video.play()
}
videoBtn.addEventListener('click', switchVideoBtn)

//............................................volume-Mute-volume.................................................//
let valueNow

function switchVolumeMute() {
  volumeMuteIcon.classList.toggle('video_mute_icon')
  if (volumeMuteIcon.classList.contains('video_mute_icon')) {
    valueNow = playerVolume.value
    video.volume = 0
    playerVolume.value = 0
    playerVolume.style.background = `linear-gradient(to right, #006b00 0%, #006b00 0%, #7c7c7c 0%, #7c7c7c 100%)`
  } else {
    playerVolume.value = valueNow
    video.volume = valueNow / 100
    playerVolume.style.background = `linear-gradient(to right, #006b00 0%, #006b00 ${valueNow}%, #7c7c7c ${valueNow}%, #7c7c7c 100%)`
  }
}
volumeMuteIcon.addEventListener('click', switchVolumeMute)

function switchVolume() {
  let valueClick = this.value
  this.style.background = `linear-gradient(to right, #006b00 0%, #006b00 ${valueClick}%, #7c7c7c ${valueClick}%, #7c7c7c 100%)`
  video.volume = valueClick / 100
}
playerVolume.addEventListener('input', switchVolume)
video.volume = 0.4

//............................................video-progress.................................................//

function switchProgress() {
  let duration = video.duration
  let current = video.currentTime
  progress.value = (100 * current) / duration
}
video.addEventListener('timeupdate', switchProgress)

function videoRewind(event) {
  let setWidth = this.offsetWidth
  let setX = event.offsetX
  video.currentTime = video.duration * (setX / setWidth)
}
progress.addEventListener('click', videoRewind)

//............................................fullscreen.................................................//

let fullscreen = document.querySelector('.fullscreen')

fullscreen.addEventListener('click', function () {
  if (!document.fullscreenElement) {
    document.body.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
  fullscreen.classList.toggle('openfullscreen')
})

//............................................video-ended.................................................//

function videoEndede() {
  playPauseIcon.classList.toggle('video_pause_icon')
  videoBtn.classList.toggle('video_player_btn')
  poster.style.display = 'flex'
}
video.addEventListener('ended', videoEndede)

console.log(
  'Дополнительный функционал реализован в виде фуллскрина. Промотка видео вручную производится только по клику, звука - и кликом, и перетягиванием ползунка'
)
