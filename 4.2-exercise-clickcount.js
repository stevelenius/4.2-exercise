// 4.2-exercise-clickcount.js
//
// How many times can you click on the square?
// 

// set up some variables for square starting position and size;
// initialize click counter to zero;
// set up empty speed variable (will be assigned a value later)
let rectX = 0;
let rectWidth = 50;
let rectY = 0;
let rectHeight = 50;
let clickCount = 0;
let speed;

// setup
function setup () {
	createCanvas(600, 600);
// make rect width between 50 and 100 (rounded to integer)
	rectWidth = random(50, 100);
	rectWidth = Math.ceil(rectWidth)
// now that we know our width, make height the same
	rectHeight = rectWidth;
// have square travel across canvas at a random height
	rectY = random(height - rectHeight);
// have square travel at a random speed between 1 and 4 (rounded to integer)
	speed = random(1, 4);
	speed = Math.ceil(speed);
}
    
// draw
function draw () {
// black background
	background(0);
// put text on canvas: instructions, square size readout, speed readout
	text('How many times can you click on the square?', 50, 25);
	text('Square size is ' + rectWidth + ' pixels', 50, 50);
	text('Speed is ' + speed, 50, 65);
// draw the square and start it moving
	drawShape();
    rectX += speed;
// when square reaches right edge of canvas, stop draw function and readout score on canvas
	if (rectX > width) {
    	noLoop();
		text('Your score was ' + clickCount, 50, 550);
	}
}
	
// count how many times square is clicked and output to console log
function mousePressed() {
	if ((mouseX >= rectX && mouseX <= rectX + rectWidth) && (mouseY >= rectY && mouseY <= rectY + rectHeight)) {
		clickCount++;
		console.log('', clickCount);
	}
}

// define square color (green), position and size per variables above
function drawShape() {
	fill(186, 218, 85);
	rect(rectX, rectY, rectWidth, rectHeight);
}
