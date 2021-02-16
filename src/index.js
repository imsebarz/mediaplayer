import MediaPlayer from "./MediaPlayer.js";

const video = document.querySelector("video");
const button = document.querySelector("button");

const player = new MediaPlayer({ el: video });
button.addEventListener("click", () => {
  player.togglePlay();
});
