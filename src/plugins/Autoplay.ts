import MediaPlayer from "../MediaPlayer";

class Autoplay {
  run(player: MediaPlayer) {
    player.mute();
    player.play();
  }
}
export default Autoplay;
