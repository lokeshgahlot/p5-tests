import Star from './Star'

// Variables scoped within p5
const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
var nightSky = [];

/**
 * Draws a starfield with specified parameters
 * @param  {Integer} starsNumber Number of stars to draw
 * @param  {Integer} size   Size of the stars in px
 */

const drawStars = (starsNumber) => {

  // Populate stars array
  if (nightSky.length < starsNumber) {
    let x = Math.round(Math.random(0, canvasWidth) * canvasWidth);
    let y = Math.round(Math.random(0, canvasHeight) * canvasHeight);
    let size = Math.round(Math.random(0, 10) * 10)
    nightSky.push(new Star(x, y, size));
  }else{
    // If star litmit is reached start deleting oldest ones
    nightSky.shift()
  }

// Render each star
  nightSky.forEach((star) =>{
    star.show()
    star.blink()
  })
}

export default drawStars;
