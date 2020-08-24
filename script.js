X = 0
SX = 190
UX = 700
UY = -100
US = 1
KY = 450
KX = 250
KS = 1
KX2 = 150
KY2 = 420
KX3 = 400
KY3 = 410
a = 0
s = 1

function setup() {
  createCanvas(500,500)
  frameRate(60)
}

function draw() {
  noStroke();
  fill(1, 89, 162);
  rect(0, 0, 500, 100);
  noStroke();
  fill(3, 102, 183);
  rect(0, 100, 500, 100);
  noStroke();
  fill(12, 120, 208);
  rect(0, 200, 500, 100);
  noStroke()
  fill(8, 137, 242);
  rect(0, 300, 500, 100);
  noStroke()
  fill(12, 111, 12);
  rect(0, 400, 500, 100);
  fill('Green')
  noStroke()
  rect(0,400,500,100)
  
  //Sonne
  noStroke()
  fill('yellow')
  ellipse(SX,0.00128*(SX*SX)-(0.64*SX)+200,50,50)
  SX = SX + 0.05
  if(SX >= 550){
    SX = -50
  }
  
  //Wolke
  noStroke();
  fill(255, 255, 255);
  ellipse(50*sin(X)+400, 100, 173, 66);
  ellipse(50*sin(X)+430, 100, 110, 70);
  ellipse(50*sin(X)+400, 100, 99, 90);
  ellipse(50*sin(X)+368, 100, 110, 70);
  X = X + 0.007
  
  //Zaun
  strokeWeight(3)
  stroke(139,69,19)
  line(0,375,0,400)
  strokeWeight(3)
  stroke(139,69,19)
  line(0,380,500,380)
  strokeWeight(3)
  stroke(139,69,19)
  line(150,375,150,400)
  strokeWeight(3)
  stroke(139,69,19)
  line(200,375,200,400)
  strokeWeight(3)
  stroke(139,69,19)
  line(250,375,250,400)
  strokeWeight(3)
  stroke(139,69,19)
  line(300,375,300,400)
  strokeWeight(3)
  stroke(139,69,19)
  line(350,375,350,400)
  strokeWeight(3)
  stroke(139,69,19)
  line(400,375,400,400)
  strokeWeight(3)
  stroke(139,69,19)
  line(450,375,450,400)
  strokeWeight(3)
  stroke(139,69,19)
  line(500,375,500,400)
  
  //Scheune
  noStroke()
  fill('red')
  rect(20,300,100,100)
  noStroke()
  fill('red')
  quad(30,270,110,270,120,300,20,300)
  noStroke()
  fill('red')
  triangle(30,270,70,250,110,270)
  strokeWeight(5)
  stroke('White')
  line(70,250,110,270)
  strokeWeight(5)
  stroke('white')
  line(110,270,120,300)
  strokeWeight(5)
  stroke('white')
  line(70,250,30,270)
  strokeWeight(5)
  stroke('white')
  line(30,270,20,300)
  strokeWeight(5)
  stroke('white')
  rect(50,347.5,40,50)
  strokeWeight(5)
  stroke('white')
  line(51,348.5,90,397.5)
  strokeWeight(5)
  stroke('white')
  line(90,348.5,51,397.5)
  strokeWeight(5)
  stroke('white')
  fill('skyblue')
  rect(55,290,30,30)
  
  //Kuh
  fill('white')
  noStroke()
  ellipse(KX,KY,60,40)
  fill('black')
  noStroke()
  ellipse(KX-9,KY-5,20,20)
  fill('black')
  noStroke()
  ellipse(KX-5,KY+3,22,22)
  fill('black')
  noStroke()
  ellipse(KX+13,KY-5,18,18)
  stroke(250,250,210)
  strokeWeight(3)
  line(KX-25,KY-20,KX-17,KY-35)
  stroke(250,250,210)
  strokeWeight(3)
  line(KX-35,KY-20,KX-43,KY-35)
  fill('white')
  noStroke()
  ellipse(KX-30,KY-20,25,25)
  fill('pink')
  noStroke()
  ellipse(KX-30,KY-16,20,15)
  if(KY <=449){
    fill('black')
    noStroke()
    ellipse(KX-36,KY-25,5,5)
    fill('black')
    noStroke()
    ellipse(KX-24,KY-25,5,5)
  } 
  else {
    fill('black')
    noStroke()
    ellipse(KX-36,KY-25,3,3)
    fill('black')
    noStroke()
    ellipse(KX-24,KY-25,3,3)
  }
  fill('black')
  noStroke()
  ellipse(KX-34,KY-14,5,5)
  fill('black')
  noStroke()
  ellipse(KX-26,KY-14,5,5)
  
  //Kuh2
  fill('white')
  noStroke()
  ellipse(KX2,KY2,60,40)
  fill('black')
  noStroke()
  ellipse(KX2-9,KY2-5,20,20)
  fill('black')
  noStroke()
  ellipse(KX2-5,KY2+3,22,22)
  fill('black')
  noStroke()
  ellipse(KX2+13,KY2-5,18,18)
  stroke(250,250,210)
  strokeWeight(3)
  line(KX2-25,KY2-20,KX2-17,KY2-35)
  stroke(250,250,210)
  strokeWeight(3)
  line(KX2-35,KY2-20,KX2-43,KY2-35)
  fill('white')
  noStroke()
  ellipse(KX2-30,KY2-20,25,25)
  fill('pink')
  noStroke()
  ellipse(KX2-30,KY2-16,20,15)
  fill('black')
  noStroke()
  ellipse(KX2-36,KY2-25,3,3)
  fill('black')
  noStroke()
  ellipse(KX2-24,KY2-25,3,3)
  fill('black')
  noStroke()
  ellipse(KX2-34,KY2-14,5,5)
  fill('black')
  noStroke()
  ellipse(KX2-26,KY2-14,5,5)
  
  //Kuh3
  fill('white')
  noStroke()
  ellipse(KX3,KY3,60,40)
  fill('black')
  noStroke()
  ellipse(KX3-9,KY3-5,20,20)
  fill('black')
  noStroke()
  ellipse(KX3-5,KY3+3,22,22)
  fill('black')
  noStroke()
  ellipse(KX3+13,KY3-5,18,18)
  stroke(250,250,210)
  strokeWeight(3)
  line(KX3-25,KY3-20,KX3-17,KY3-35)
  stroke(250,250,210)
  strokeWeight(3)
  line(KX3-35,KY3-20,KX3-43,KY3-35)
  fill('white')
  noStroke()
  ellipse(KX3-30,KY3-20,25,25)
  fill('pink')
  noStroke()
  ellipse(KX3-30,KY3-16,20,15)
  fill('black')
  noStroke()
  ellipse(KX3-36,KY3-25,3,3)
  fill('black')
  noStroke()
  ellipse(KX3-24,KY3-25,3,3)
  fill('black')
  noStroke()
  ellipse(KX3-34,KY3-14,5,5)
  fill('black')
  noStroke()
  ellipse(KX3-26,KY3-14,5,5)
  
  //UFO
  fill(0,255,0,90)
  noStroke()
  ellipse(UX,100,120,90)
  fill(255,255,255,99.5)
  noStroke()
  ellipse(UX+25,75,40,20)
  fill('DarkGrey')
  noStroke()
  ellipse(UX,155,230,95)
  fill('black')
  noStroke()
  ellipse(UX,167,200,70)
  fill('grey')
  noStroke()
  ellipse(UX,190,75,23)
  
  //Schild
  stroke('brown')
  strokeWeight(7)
  line(40,510,40,460)
  noStroke()
  fill('brown')
  rect(10,440,60,20)
  noStroke()
  fill('brown')
  quad(10,440,10,420,70,420,60,440)
  noStroke()
  fill('black')
  ellipse(40,450,30,10)
  noStroke()
  fill('black')
  ellipse(40,445,10,10)
  strokeWeight(3)
  stroke('black')
  line(17,430,17,440)
  strokeWeight(3)
  stroke('black')
  line(17,447,17,447)
  
  //Funktionsweise
  UX = UX - US
  if(UX == 250){
    US = 0
    fill(0,255,0,90)
    noStroke()
    triangle(UX,190,KX-50,460,KX+50,460)
    KY = KY - KS
  }
  if(KY == 110){
     KS = 0
     a = a + s
  }

  if(a > 60){
     KX = KX - US
     US = 1
  }
  if(UX < -200){
    a = 0  
    KY = 600
    KX = 250
    KS = 1
    UX = 700
  }
  if(KY >= 451){
    KY = KY - KS
  }
}