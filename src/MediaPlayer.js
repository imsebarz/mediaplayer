function MediaPlayer(config) {
  this.media = config.el;
  this.plugins = config.plugins || [];
}

MediaPlayer.prototype.togglePlay = function () {
  if (this.media.paused) {
    this.media.play();
  } else {
    this.media.pause();
  }
};

export default MediaPlayer;
