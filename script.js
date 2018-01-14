// NAMESPACE
const beat = {};

beat.ladies = [
  'anyways.wav',
  'boyfriend.wav',
  'call.wav',
  'dig.wav',
  'lose.wav',
];

beat.fellas = [
  'ayy.wav',
  'baby.wav',
  'bounce.wav',
  'hangin.wav',
  'ohbaby.wav',
  'ohyeah.wav',
  'party.wav',
  'sup.wav',
];

beat.listen = function() {
  $(window).keypress(beat.hit);
};


beat.hit = function(e) {

  if (e.keyCode === 81) {
    beat.vocal = Math.floor(Math.random()*beat.ladies.length)

    $('#ladies').attr('src',`sounds/vocal/${beat.ladies[beat.vocal]}`);
  } else if (e.keyCode === 80) {
    beat.vocal = Math.floor(Math.random()*beat.fellas.length)

    $('#fellas').attr('src',`sounds/vocal/${beat.fellas[beat.vocal]}`);
  }

  beat.audio = $(`audio[data-key="${e.keyCode}"]`);
  beat.key = $(`div[data-key="${e.keyCode}"]`);

  if (!beat.audio[0]) {
    return;
  }

  // CAN I GET A REWIND
  beat.audio[0].currentTime = 0;

  // KICK IT
  beat.audio[0].play();

  // STYLA STYLE
  beat.key.addClass('playing');
};

beat.reverseIt = function() {
  $('.key').on('transitionend', function() {
    $(this).removeClass('playing');
  });
};

// FEEL IT
beat.init = function() {
  beat.listen();
  beat.reverseIt();
};

// DOCREADY
$(beat.init);
