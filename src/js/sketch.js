import p5 from 'p5';
import 'p5/lib/addons/p5.sound';
import 'p5/lib/addons/p5.dom';

// Sketch creation
const sketch = (p5) => {
	// make library globally available
	window.p5 = p5;

// Setup function
	p5.setup = () => {
		p5.createCanvas(p5.windowWidth, p5.windowHeight);
	}

// Draw function
	p5.draw = () => {
	}
}

console.log("hola")

export default sketch;
