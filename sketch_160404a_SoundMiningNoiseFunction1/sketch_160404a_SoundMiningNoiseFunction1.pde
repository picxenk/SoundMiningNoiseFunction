// Sound Mining in Noise Function
// picxenk@gmail.com
// d 1 b ] 0 c

import ddf.minim.*;
import ddf.minim.ugens.*;

Minim minim;
AudioOutput out;
Oscil wave;
float t, tic;
float freq, d;

void setup() {
  minim = new Minim(this);
  out = minim.getLineOut();
  wave = new Oscil(100, 0.5f, Waves.SQUARE);
  wave.patch(out);

  noiseSeed(7);
  t = 0.0;
  tic = 3;
}

void draw() {

  if (tic < 3) {
    d = map(noise(t), 0, 1, 10, 200);
    freq = map(noise(t), 0, 1, 200, 90000);

    wave.setFrequency(freq);
    delay(int(d));
    t = t + 0.5;
    tic ++;
  }
  
}

void keyPressed() {

  t = key;
  tic = 0;
}