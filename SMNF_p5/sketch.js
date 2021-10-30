let osc, freq;
let t, tic;
let keys = []
let isPlaying;

function setup() {
  createCanvas(50, 50);
  osc = new p5.Oscillator('sine');
  freq = 777;
}

function draw() {
  background(freq/tic);
  text(char(t), width/2, height/2);
  if (isPlaying) {
    dig(100, 16, 2000, 0.1);
    tic++;
  }
}

function newKeys() {
  keys = "Z5Z5AZ55".split('');
  keys.reverse();
}

function dig(seed, ticSteps, fRange, tStep) {
  noiseSeed(seed);
  if (tic < ticSteps) {
    let freq = map(noise(t), 0, 1, -fRange, fRange);
    osc.freq(freq, 0.2);
    osc.amp(0.3, 0.2);
    t += tStep;
  } else {
    osc.stop();
    dug();
  }
}

function dug() {
  let c = keys.pop();
  if (c!=null) {
    t = unchar(c);
    tic = 0;
    osc.start();
  } else {
    newKeys();
  }
}

function keyTyped() {
  t = keyCode;
  tic = 0;
  osc.start();
}

function mouseClicked() {
  isPlaying = true;
  osc.start();
  newKeys();
}
