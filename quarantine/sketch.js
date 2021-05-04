let input, button, greeting, cWidth, in_r, out_r, c1, c2, c3;

let xp1 = 700;
let yp1 = 300;
let angu = 0;

function setup() {
  input = createInput();

  button = createButton('submit');
  button.mousePressed(generate);

  createCanvas(1300, 700);
  background(255, 255, 255);

  colorMode(HSB);
}

function saveo() {
  saveCanvas('mycanvas', 'png')
}

function generate() {

  clear();

  const name = input.value();
  cWidth = name.length;
  //print(cWidth);

  //string to char array and char to integer array
  let splitString = unchar(split(name,''));

  //inner circle radius logic
  if (splitString[0] < 100) {
      in_r = map (splitString[0],0,200,100,250);
    } else {
      in_r=splitString[0];
    }

  //outer circle radius logic
  if (splitString[0] < 100) {
      out_r = map (splitString[0],0,122,30,100);
    } else {
      out_r=splitString[0]/2;
    }


  // stroke color logic
    c1 = map (splitString[1],0,122,358,0);

    c2 = map (splitString[2],0,122,0,358);

    c3 = map (splitString[3],0,122,0,358);



  //inner circle color
  stroke(c1,c2,c3);

  for (let i = 0; i < 360; i = i+1) {
  angu = angu+1;

  // draw circle in the center
  let xp2 = xp1 + in_r * sin(angu);
  let yp2 = yp1 - in_r * cos(angu);
  line(xp1, yp1, xp2, yp2);

  }

  for (let j = 1; j < cWidth+1; j = j+1) {
  let angv = 360/j;
  //identifying point on the circle
  let xp4 = xp1 + in_r * cos(angv);
  let yp4 = yp1 - in_r * sin(angv);

      for (let i = 0; i < splitString[4]; i = i+1) {
      stroke(c3, c2, c1);
      angu = angu+1;

      //drawing circle with the center as identified coordinates
      let xp3 = xp4 + out_r * sin(angu);
      let yp3 = yp4 - out_r * cos(angu);
      line(xp4,yp4,xp3,yp3);
      }
  }
  savethis = createButton('save this');
  savethis.position(1250, 256);
  savethis.mousePressed(saveo);
}
