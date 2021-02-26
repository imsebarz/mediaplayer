import MediaPlayer from "./MediaPlayer";
import Autoplay from "./plugins/Autoplay";
import Autopause from "./plugins/Autopause";
import Ads from "./plugins/Ads/index";

const video = document.querySelector("video");
const buttonPlay: HTMLElement = document.querySelector("#play");
const buttonMute: HTMLElement = document.querySelector("#mute");

const player = new MediaPlayer({
  el: video,
  plugins: [new Autoplay(), new Autopause(), new Ads()],
});
buttonPlay.addEventListener("click", () => {
  player.togglePlay();
});
buttonMute.addEventListener("click", () => {
  player.toggleMute();
});
