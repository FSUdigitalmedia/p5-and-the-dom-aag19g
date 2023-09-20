var myParagraph;
let button;
var img;
var slider;

function setup() {
   createCanvas(400, 400);
  myParagraph = createP("html");
  myParagraph.position(0, 0);
  button = createButton("Press")
//   button.mouseClicked(makeRed);
//   myParagraph.mouseClicked(makeRed);
   img = loadImage('dog.jpg')
   button.mouseClicked(changeSize)

   slider = createSlider(10, 100, 86);
}

function draw() {
//   myParagraph.position(mouseX, mouseY);
myParagraph(100, 100, slider.value(), slider.value());
//   image(img, 0, 0);
}

// function makeRed() {
//   myParagraph.style("color", "red");
// }

// function makeRed() {
//   myParagraph.style("color", "red");
// }

// function changeSize() {
//    background("white")
//      img.resize(500, 500);
//    }

/*

Some Questions:
0. What is this percent sign all about? (hint: it's "modulus")
1. Where, in the p5 reference, do we find all this DOM stuff?
2. Why is the text so large when it's just a "paragraph"?
3. "color" and "red"? Where did those come from and where 
   could you find more style attributes that could be
   changed?

Some Things to Try:
0. Make the text follow the mouse pointer
1. Make a button
2. Make the button affect the style or position of some text
3. Make a picture that shows up on the page. Does it have to
   be created in p5 or can you just place it in the HTML?
   What's the difference?
4. Can you make the position of the image change when the
   button is pressed?
5. Make a slider and have it change the text size
6. Add some CSS in style.css to make the slider huge and
   rotated 30 degrees
6. "hide" the text when the image is double-clicked
   
*/