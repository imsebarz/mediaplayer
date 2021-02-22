import MediaPlayer from "./MediaPlayer.js";
import Autoplay from "./plugins/Autoplay.js";
import Autopause from "./plugins/Autopause.js";

const video = document.querySelector("video");
const buttonPlay = document.querySelector("#play");
const buttonMute = document.querySelector("#mute");

const player = new MediaPlayer({
  el: video,
  plugins: [new Autoplay(), new Autopause()],
});
buttonPlay.addEventListener("click", () => {
  player.togglePlay();
});
buttonMute.addEventListener("click", () => {
  player.toggleMute();
});
