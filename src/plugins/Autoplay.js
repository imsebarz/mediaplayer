function Autoplay(player) {}

Autoplay.prototype.run = function (player) {
  player.mute();
  player.togglePlay();
};

export default Autoplay;
