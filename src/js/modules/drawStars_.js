// Variables scoped within p5
const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
var stars = [];

/**
 * Draws a starfield with specified parameters
 * @param  {Integer} starsNumber Number of stars to draw
 * @param  {Integer} size   Size of the stars in px
 */

const drawStars = (starsNumber, size) => {
  // Manage Stars Array
  if (stars.length <= starsNumber) {
    let x = Math.round(Math.random(0, canvasWidth) * canvasWidth);
    let y = Math.round(Math.random(0, canvasHeight) * canvasHeight);
    stars.push({
      x,
      y
    })
    console.log(stars.length)
  } else {
    stars.shift()
  }
  // Draw array
  stars.forEach((star) => {
    p5.noStroke();
    p5.fill(255, 255, 255, 50);
    p5.rect(
      star.x,
      star.y,
      size * 2, size * 2);
    // Draw an ellipse at each position
    p5.fill(255, 255, 255);
    p5.noStroke();
    p5.rect(
      star.x + size / 2,
      star.y + size / 2,
      size, size);
  })
}

export default drawStars;
