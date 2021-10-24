let osc;
let t, tic;
let freq, d;
let keys = [];

let isPlaying = false;

function setup() {
  createCanvas(400, 400);
  background(200);

  osc = new p5.Oscillator('sine');
  // noiseSeed(10);
  freq = 300;
  // osc.stop();
  // frameRate(40);
}

function draw() {
  if (isPlaying) {
    // if (tic < 16) {
    //   // d = map(noise(t), 0, 1, 10, 200);
    //   freq = map(noise(t), 0, 1, -2000, 2000);
    //   osc.freq(freq, 0.1);
    //   osc.amp(0.2, 0.1);
    //
    //   t += 1;
    //   tic++;
    //   print(freq);
    // } else {
    //   osc.stop();
    // }

    // dig(10, 16, 2000, 1);
    dig(107, 8, 20000, 0.01);
    // dig(107, 16, 5000, 0.5);
    // dig(7, 16, 2000, 1);
    // dig(99, 16, 2000, 0.2);
    // dig(10, 16, 2000, 1);
    tic++;
  }
}

function dig(seed, ticSteps, freqRange, tStep) {
  noiseSeed(seed);
  if (tic < ticSteps) {
    let freq = map(noise(t), 0, 1, -freqRange, freqRange);
    osc.freq(freq, 0.2);
    osc.amp(0.1, 0.2);
    t += tStep;
    // print(freq);
  } else {
    osc.stop();
    dug();
  }
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
    dug();
  }
}

function keyTyped() {
  t = keyCode;
  print(t);
  tic = 0;
  osc.start();
}

function newKeys() {
  keys = "7AZ      ".split('');
  keys.reverse();
}

function mouseClicked() {
  osc.start();
  isPlaying = true;
  newKeys();
}
