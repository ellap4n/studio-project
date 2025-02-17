
let milkyVintage;
let i;
let mouseCount = 0;
let imgInput;
let img;
let imgCopy;
let beep, static, noise, beeep, boop, beeeep, beepboop, crack, backgroundSound;
let n = 0;
let amplitude;
let cnv;
let copyN = 1;
let saveImage;

function preload() {
  milkyVintage = loadFont("MilkyVintage-Regular.ttf");
  soundFormats('wav', 'm4a');
  beep = loadSound('alienglitch.wav');
  static = loadSound('staticdeath.wav');
  clipNoise = loadSound('beepbeepbeep.wav');
  beeep = loadSound('beeep.wav'); 
  boop = loadSound('boop.wav');
  beeeep = loadSound('beeeep.wav');
  beepboop = loadSound('beepboop.wav');
  crack = loadSound('crack.wav');
  backgroundSound = loadSound('backgroundSound.wav');
}


function setup() {
  pixelDensity(2);

  //setup starting screen
    cnv = createCanvas(windowWidth, windowHeight);
    background(24, 8, 64);
    frameRate(200);

  // image file input
    imgInput = createFileInput(handleImage);
    imgInput.position(windowWidth/2 - 40, windowHeight/2 + 150)

  //save input button
    saveImage = createButton("save canvas");
    saveImage.position(width-120, height-50);
    saveImage.mousePressed(savePress);

  // amplitude setup
    amplitude = new p5.Amplitude();
    clipNoise.connect(amplitude);

  //text setup
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

  //upload image

  if (mouseCount == 1) {
    if (img) {
      clear();
      imgInput.hide();
      background(0);
      image(img, 0, 0, width, height, 0, 0, img.width, img.height, COVER);
      backgroundSound.loop(true);
      backgroundSound.setVolume(0.1);
      backgroundSound.play();
    } else {
      // uploaded not on first click.....
      clear();
      imgInput.hide();
      textSize(20);
      fill(0);
      text('upload failed. please reload and try again', windowWidth/2, windowHeight/2);
    }
  } else if (mouseCount> 1 && mouseCount%7 ===0) {
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
  if (mouseCount%5 === 0 && mouseCount>0) {
    //add sound effect so more obvious
    let soundBeep = [];
    let beepTheChosen;
    soundBeep.push(beep);
    soundBeep.push(beeep);
    soundBeep.push(boop);
    soundBeep.push(beeeep);
    soundBeep.push(crack);
    soundBeep.push(beepboop);

    beepTheChosen = random(soundBeep);
    beepTheChosen.play();

    let r, g, b, c, m, a, bl, w;
    let rgb = [];

    if ((mouseCount/5)%5 ==0) {
      a = random(100, 180);
    } else {
      a = 255;
    }
    //error colours into array
    r = [255, 0, 0, a];
    g = [0, 255, 0, a];
    b = [0, 0, 255, a];
    c = [0, 251, 255, a];
    m = [255, 0, 191, a];
    w = [255, a];
    bl = [0, a];
    rgb.push(r);
    rgb.push(g);
    rgb.push(b);
    rgb.push(c);
    rgb.push(m);
    rgb.push(bl);
    rgb.push(w);
    fill(random(rgb));

    //larger glitch chunks
    if((mouseCount/5)%5 ==0) {
      rect(random(windowWidth/3, windowWidth), 0, random(30, 200), windowHeight);
    } else {
      rect(random(windowWidth/3, windowWidth), 0, random(0.1, 0.4), windowHeight);
    }
  }
// pixels random
  if (mouseCount%3 == 0 && mouseCount > 0) {
    let x, y;
    x = floor(random(20, windowWidth-20));
    y = floor(random(20, windowHeight-20));
    fill(get(x, y));
    rect(x - 10, y - 10, 20, 20);
    if((mouseCount/3)%3 == 0) {
      fill(get(x+20, y+20));
      rect(x + 10, y + 10, 20, 20);
      fill(get(x+20, y));
      rect(x + 10, y-10, 20, 20);
    }
    if((mouseCount/3)%4 == 0) {
      fill(get(x+20, y+20));
      rect(x + 10, y + 10, 20, 20);
      fill(get(x, y+20));
      rect(x - 10, y+10, 20, 20);
      fill(get(x-20, y));
      rect(x - 30, y-10, 20, 20);
    }
    if((mouseCount/3)%7 == 0) {
      fill(get(x+20, y+20));
      rect(x + 10, y + 10, 20, 20);
      fill(get(x, y+20));
      rect(x - 10, y+10, 20, 20);
      fill(get(x-20, y));
      rect(x - 30, y-10, 20, 20);
      fill(get(x-40, y));
      rect(x - 50, y-10, 20, 20);
      fill(get(x+20, y+40));
      rect(x + 10, y + 30, 20, 20);
      fill(get(x+40, y+20));
      rect(x + 40, y + 10, 20, 20);
      
    }
  }

  //duplicating areas of canvas
  if(mouseCount > 60 && mouseCount%4 == 0) {
    copy(cnv, random(0, width-30), random(0, height - 30), random(copyN*10, copyN*10 + 150), random(copyN*10,copyN*10 + 100), random(0, width-30), random(0, height - 30), random(copyN*12, copyN*10 + 150), random(copyN*12, copyN*10 + 110));
    copyN ++;
  }

  //triggering sound
  if(mouseCount == 100) {
    staticGlitch();
  }
  mouseCount ++;
}

// glitches with the audio
function staticGlitch() {
  clipNoise.loop(true);
  clipNoise.play();
}

//save function - set timeout before save. 

function savePress() {
  pixelate = true;
  var f = prompt("what would you like to name your artwork");
  setTimeout(saveCanvasFinal, 10000, f);
}

function saveCanvasFinal(fileName) {
  saveCanvas(cnv, fileName, 'jpg');
}

function draw() {
  //when clipNoise is playing 
  let value = amplitude.getLevel();
  clipNoise.setVolume(1);
  var amp;
  let mouseCol = get(mouseX, mouseY);

  //changing colour
  clipNoise.addCue(0, changeCol, [16, 84, 194, 60] );
  clipNoise.addCue(0.5, changeCol, mouseCol );
  clipNoise.addCue(1, changeCol, [207, 48, 255, 60] );
  clipNoise.addCue(1.3, changeCol, mouseCol );
  clipNoise.addCue(1.75, changeCol, [94, 255, 145, 60]);
  clipNoise.addCue(1.9, changeCol, mouseCol );
  clipNoise.addCue(2.4, changeCol, [28, 247, 255] );
  clipNoise.addCue(2.75, changeCol, mouseCol );
  clipNoise.addCue(3.22, changeCol, [77, 84, 84, 60]);
  clipNoise.addCue(3.4, changeCol, mouseCol );
  clipNoise.addCue(3.65, changeCol, [255, 37, 13, 60]);
  clipNoise.addCue(3.9, changeCol, mouseCol );
  clipNoise.addCue(4.5, changeCol, [255, 255, 36, 60] );
  clipNoise.addCue(4.87, changeCol, mouseCol );
  clipNoise.addCue(5.4, changeCol, [0, 43, 161, 60] );
  clipNoise.addCue(5.79, changeCol, mouseCol );
  clipNoise.addCue(6.2, changeCol, [255, 60] );
  clipNoise.addCue(6.5, changeCol, mouseCol );
  
//map values to become useful
  if(clipNoise.isPlaying()) {
    amp = map(value, 0, 0.5, 5, 30);
  } else {
    amp = 0;
  }
  
  for(let bar = 0; bar < height; bar += 5){
    rect(random(0,150), bar, random(1, 50)*amp, 1);
  }
}

function changeCol(col) {
  fill(col);
}

function handleImage(file) {
  if (file.type === 'image') {
    img = createImg(file.data, '');
    img.hide();
    cursor(HAND);
  } else {
    img = null;
  }
}


function windowResized(){

  resizeCanvas(windowWidth, windowHeight);

}
