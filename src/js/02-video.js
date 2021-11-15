import throttle from 'lodash.throttle';
const STORAGE_KEY = "videoplayer-current-time";
console.log(STORAGE_KEY);
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

// timeupdate event
function onTimeUpdate(evt) {
    localStorage.setItem(STORAGE_KEY, evt.seconds);
}
// saving local cache
const savedTime = localStorage.getItem(STORAGE_KEY);
if (savedTime) {
    player.setCurrentTime(savedTime);
}
player.on('timeupdate', throttle(onTimeUpdate, 1000));


