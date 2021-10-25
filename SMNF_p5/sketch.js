let osc;
let t, tic;
let freq, d;
let keys = [];

let isPlaying = false;

function setup() {
  createCanvas(50, 50);
  background(200);

  osc = new p5.Oscillator('sine');
  freq = 300;
}

function draw() {
  background(freq/tic);
  if (isPlaying) {
    // dig(10, 16, 2000, 1);
    // dig(107, 8, 20000, 0.01);
    // dig(107, 16, 5000, 0.5);
    // dig(7, 16, 2000, 1);
    // dig(99, 16, 2000, 0.2);
    // dig(10, 16, 2000, 1);
    dig(77, 8, 1000, 0.5);
    tic++;
  }
}

function dot(f) {
  strokeWeight(2);
  stroke(0);
  point(width/2, f/10);
}

function dig(seed, ticSteps, freqRange, tStep) {
  noiseSeed(seed);
  if (tic < ticSteps) {
    let freq = map(noise(t), 0, 1, -freqRange, freqRange);
    osc.freq(freq, 0.2);
    osc.amp(0.4, 0.2);
    t += tStep;
  } else {
    osc.stop();
    dug();
  }
  print(freq);
  return freq;
}

function dug() {
  let c = keys.pop();
  if (c != null) {
    t = unchar(c);
    print(t);
    tic = 0;
    osc.start();
  } else {
    newKeys();
  }
}

function keyTyped() {
  t = keyCode;
  print(t);
  tic = 0;
  osc.start();
}

function newKeys() {
  keys = "09D09DD".split('');
  keys.reverse();
}

function mouseClicked() {
  osc.start();
  isPlaying = true;
  newKeys();
}
