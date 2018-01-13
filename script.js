// NAMESPACE
const beat = {};

beat.listen = function() {
  $(window).keypress(beat.hit);
};

beat.hit = function(e) {
  beat.audio = $(`audio[data-key="${e.keyCode}"]`);
  beat.key = $(`div[data-key="${e.keyCode}"]`);

  if(!beat.audio[0]) return;

  // CAN I GET A REWIND
  beat.audio.currentTime = 0;

  // KICK IT
  beat.audio[0].play();

  // STYLA STYLE
  beat.key.addClass('playing');
  beat.key.on('transitionend', function() {
    beat.key.removeClass('playing');
  });
};

// FEEL IT
beat.init = function() {
  beat.listen();
};

// DOCREADY
$(beat.init);
