/* 
    Equipe: 
        José Vitor Santos de Paiva - Subturma B (Líder) 
        Camila Louyse Oliveira da Rocha - Subturma B 
       
       Etapa 5 e 6
*/
var xi = 200, yi = 20, dsp = [false],xd = [ ], yd =  [ ], xj = 200, yj = 350, vds = 3, pts = 0, stg = 1, ri = 25, rj = 20, rd = 4, nvl = 0,time = 0;
function setup() {
  createCanvas(400, 400);
}
function draw(){
for(i=0;i<10;i++){
  if(!dsp[i]){
  xd[i] = xj
  yd[i] = yj
  }
}
  if(keyIsDown(LEFT_ARROW)){
    xj -= 5;
    }
  if(keyIsDown(RIGHT_ARROW)){
    xj += 5;
    }
  if(keyIsDown(UP_ARROW)){
    yj -= 5;
    }
  if(keyIsDown(DOWN_ARROW)){
    yj += 5;
    }
  background(135,206,235);
  if(time == 0){
  for(i=0;i<10;i++){ 
    if (keyIsDown(CONTROL) && (!dsp[i]) ){ 
    dsp[i] = true;
      break;
    }
  }
    time = 6;
  }
  time--
  for(i=0;i<10;i++){
  if(dsp[i]){
    fill(255,204,0);
   ellipse(xd[i],yd[i],8,8);
    yd[i] = yd[i] - 8;
    if (yd[i] < 0) { 
      dsp[i] = false;
    }
  }
}
    fill(255,0,0);
  rect(xi-25,yi-25,2*ri,2*ri);
  yi += 3
  if(yi>400){
    yi = random(-500,-50);
    xi = random(30,350);
  }
  fill(255,204,0);
  ellipse(xj,yj,3*rj,2*rj);
  if(xj > 400){
     xj = 400
  }
  if(xj < 0){
    xj = 0
  }
if(yj > 400){
     yj = 400
  }
  if(yj < 0){
    yj = 0
  }
  fill(0, 100, 0);
  textSize(18);
  text('Vidas: '+vds, 10, 30);
  text('Pontos: '+pts, 160, 30);
  text('Estágio: '+stg, 310, 30);
  if(dist(xj, yj, xi, yi) < ri + rj ){
  vds--;
  yi = random(-500,-50);
  xi = random(30,350);
  }
  for(i=0;i<10;i++){
  if(dist(xd[i], yd[i], xi, yi) < ri + rd ){
  dsp[i] = false;
  pts+=100;
  yi = random(-500,-50);
  xi = random(30,350);
  }
  }
  if(pts == nvl + 1000){
    stg = stg + 1
    nvl = nvl + 2000;
  }
}
