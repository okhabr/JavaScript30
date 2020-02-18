// Get our elelemnts
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// Build function
function togglePlay(e) {
    if (video.paused) {
        video.play();
        toggle.innerHTML = '❚ ❚'
    } else {
        video.pause();
        toggle.innerHTML = '►'
    }
}

function skip(e) {
    const shift = +(e.target.getAttribute('data-skip'));
    video.currentTime += shift;
}

function volumeCtrl() {
    const ctrl = this.getAttribute(`name`);
    if (ctrl == 'volume') {
        video.volume = this.value;
    } else {
        video.playbackRate = this.value;
    }
}

function updateProgress() {
    progress.value = video.currentTime/video.duration*100;
}

function changeProgress (e){
    video.currentTime = e.offsetX/640*video.duration;
}
//EventListeners
video.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', updateProgress);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(button => button.addEventListener('change', volumeCtrl));
progress.addEventListener('click', changeProgress );