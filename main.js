const input = document.getElementById('mainInput');
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

// player.on('play', function () {
//     console.log('played the video!');
// });

// player.getVideoTitle().then(function (title) {
//     console.log('title:', title);
// });

input.addEventListener("focus", () => player.play());
input.addEventListener("blur", () => player.pause());
