let milkyVintage;
let i, a;
let art
let mouseCount = 0;
let imgInput;
let img;

function preload() {
  milkyVintage = loadFont("/milky_vintage/MilkyVintage-Regular.ttf");
  //load all images
  art = loadImage('art.jpg');

}

function setup() {
    //setup starting screen
    pixelDensity(2);
    createCanvas(windowWidth,windowHeight);
    background(24, 8, 64);
    imgInput = createFileInput(handleImage);
    imgInput.position(windowWidth/2 - 40, windowHeight/2 + 150)
    noStroke();
    fill(228, 206, 237);
    textAlign(CENTER);
    textSize(windowWidth/10);
    textLeading(windowWidth/10.2);
    textFont(milkyVintage);
    text('Upload an image that \n you like.', windowWidth/2, windowHeight/2-100);
    
}

//more glitched everytime click

function mousePressed() {
  if (mouseCount == 1) {
    if (img) {
      clear();
      imgInput.hide();
      background(0);
      image(img, 0, 0, width, height, 0, 0, img.width, img.height, COVER);
    } else {
      // uploaded not on first click.....
      clear();
      imgInput.hide();
      background(0);
      textSize(20);
      fill(0);
      text('upload failed. please reload and try again', windowWidth/2, windowHeight/2);
    }
  } else if (mouseCount> 1) {
    //glitch style 1: 
    loadPixels();
    erase();
    let rA, rB;
    rA = random(0,windowWidth);
    rB = random(0,windowHeight);
    rect(rA, rB, random(50,100), random(1,3));
    noErase();
    fill(random(0, 255), random(0, 255), random(0, 255));
    rect(rA, rB, random(50,100), random(0.2,1));
  }
  // "broken screen effect'
  if (mouseCount%5 === 0) {
    let r, g, b, c, m;
    let rgb = [];
    //error colours into array
    r = [255, 0, 0];
    g = [0, 255, 0];
    b = [0, 0, 255];
    c = [0, 251, 255];
    m = [255, 0, 191];
    rgb.push(r);
    rgb.push(g);
    rgb.push(b);
    rgb.push(c);
    rgb.push(m);
    fill(random(rgb));
    rect(random(windowWidth/3, windowWidth), 0, random(0.1, 0.3), windowHeight);
  }
  mouseCount ++;
}

function draw() {
}

function handleImage(file) {
  if (file.type === 'image') {
    img = createImg(file.data, '');
    img.hide();
  } else {
    img = null;
  }
}
