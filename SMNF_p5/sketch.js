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
    dig(100, 16, 2000, 0.1); // 어떤 범위로 noise함수에서 소리를 채집할지 정합니다.
    tic++;
  }
}

// 각 키로 채집한 소리의 순서를 정합니다.
function newKeys() {
  keys = "Z5Z5AZ55".split('');
  keys.reverse();
}

// noise함수에서 소리를 채집할 때 쓴 함수
// seed : 노이즈 씨앗, 씨앗이 같으면 노이즈 함수는 같은 흐름의 값을 가집니다.
// ticSteps : 몇 번 걸음으로 값을 채집할지
// fRange : 소리 주파수 범위
// tStep : 각 걸음의 채집 간격
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

// newKeys에서 설정한 키 순서를 반복시킵니다.
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
