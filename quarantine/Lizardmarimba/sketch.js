let input, button, greeting, cWidth, in_r, out_r, c1, c2, c3;

let xp1 = 500;
let yp1 = 400;
let angu = 0;

function setup() {
  // create canvas
  createCanvas(1000, 1000);

  input = createInput();
  input.position(20, 150);

  button = createButton('submit');
  button.position(input.x + input.width, 150);
  button.mousePressed(greet);
  
  title = createElement('h1', 'MEMOIRE');
  title.position(20, 5);
  
  text('This is a visual representation of your memory',20,80);
  
  question = createElement('p', 'What would be one thing that you would like to remember?');
  question.position(20, 100);

  textAlign(CENTER);
  //textSize(50);
}

function greet() {
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
  print(in_r);
  
  //outer circle radius logic
  if (splitString[0] < 100) {
      out_r = map (splitString[0],0,122,30,100);
    } else {
      out_r=splitString[0]/2;
    }
  print(out_r);
  
  
  // stroke color logic
  if (splitString[1] > 255) {
    c1 = map (splitString[1],0,122,0,255);
  } else {
    c1 = splitString[1];
  }
  
  if (splitString[2] > 255) {
    c2 = map (splitString[2],0,122,0,255);
  } else {
    c2 = splitString[2];
  }
  
  if (splitString[3] > 255) {
    c3 = map (splitString[1],0,122,0,255);
  } else {
    c3 = splitString[3];
  }
  
  //inner circle color
  stroke(c1, c2, c3); 
  
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
      stroke(c3, c1, c2); 
      angu = angu+1;

      //drawing circle with the center as identified coordinates
      let xp3 = xp4 + out_r * sin(angu);
      let yp3 = yp4 - out_r * cos(angu);
      line(xp4,yp4,xp3,yp3);
      }
  }
  
  
}




