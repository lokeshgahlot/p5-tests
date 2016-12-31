/**
 * This is a star!
 */
export default class Star {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = size;
    this.glowColor = p5.color('rgba(255,255,255,0.5)')
    this.brightColor = p5.color('rgba(255,255,255,1)')

    // A very little minority is a Planet (color)
    if (Math.round(Math.random(0, 10) * 10) > 7) {
      // Assign random color to planet
      this.planet = true;
      let hue = Math.round(Math.random(-60, 10) * 100);
      this.glowColor = p5.color('hsba(' + hue + ',100%,100%,0.2)');
      this.brightColor = p5.color('hsba(' + hue + ',100%,100%,1)');
    }
  }

  show() {
    p5.rectMode(p5.CENTER);
    // Glow
    p5.noStroke();
    p5.fill(this.glowColor);
    p5.rect(
      this.x,
      this.y,
      this.size,
      this.size
    );
    // Bright Point
    p5.noStroke();
    p5.fill(this.brightColor);
    p5.rect(
      this.x,
      this.y,
      this.size / 2,
      this.size / 2
    );
  }

  blink() {
      if (this.size % 3 == 0) {
        this.size = this.size + 1;
      } else {
        this.size = this.size + -1;
      }
  }
}
