/*
    Equipe: 
        José Vitor Santos de Paiva - Subturma B (Líder) 
        Camila Louyse Oliveira da Rocha - Subturma B 
       
       Etapa 9 e 10
*/
//som
var msci, mscj, mscd, mscv,tmp0 = 0, tmp1 = 0, tmp2 = 0, tmp3 = 0;
//hud
var xind = 170, yind = -10, imgsol;
//var de tela
var intro = true, jogo = false, vtr = false, drt = false, crd = false, Vitor = false, Camila = false, imgV, imgC, imgs;
//Var de cena
var cena = false, ysi = -150, ysvel = 0.5, imgcn;
//Variaveis do boss
var bvds = 2000, xbi = 200, ybi = 50, boss = false, rbi = 60, ybvel = 0.2, imgbss;
//Variaveis de disparo do boss
var dbx = [], dby= [], dbr = 5, dybvl = [], dxbvl = [], imgdpsbss;
//Variáveis da tela: vida, pontos, estágio, nivel, tempo.
var vds = 10, pts = 0, stg = 1, nvl = 0,time = 0;
//Variáveis do Inimigo: posição x, pos y, raio, quantidade, velocidade y,vel x.
var xi  = [], yi = [], ri = [], qig = 2, yvel = [], xvel = [], g = 1, imgi;
//Variáveis do Jogador: posiçao x, pos y, raio.
var xj = 200, yj = 350, rj = 20, imgj;
//Variáveis do Disparo: disparo, posiçao x, pos y, raio.
var dsp = [false], xd = [], yd = [], rd = 4, imgdsp, mscdsp;
//Cheat: posição x, pos y, raio
var xGM = 0, yGM = 0, rGM = 0;
//Variáveis do Bonus: posição x, pos y, raio, velocidade.
var xb = [], yb = [], rb = 3, bvel = 2, imgb;
function preload() {
  imgj = loadImage('nave.png');
  imgV = loadImage("VitorS.JPG");
  imgC = loadImage("CamilaO.jpg");
  imgi = loadImage("meteoro.png");
  imgs = loadImage("espaço.png");
  imgdsp = loadImage("dps.png");
  imgcn = loadImage("cena.jpeg");
  imgbss = loadImage("boss.png");
  imgdpsbss = loadImage("dpsbss.png");
  imgb = loadImage("heal.png");
  imgsol = loadImage("sol.png");
  soundFormats('mp3');
  msci = loadSound('Intro.mp3');
  mscj = loadSound('Jedi Temple.mp3');
  mscd = loadSound('Imperial theme.mp3');
  mscv = loadSound('Victory.mp3');
}
//Função de sem repetição
function setup() {
  frameRate(40);
  //tamanho da tela
  createCanvas(400, 400);
   for(i=0;i<100;i++){
    xi[i] = random(50,350);
    yi[i] = random(-500,-50);
    ri[i] = random(5,40);
    xb[i] = 380;
    yb[i] = 390;
    yvel[i] = random(3,12);
    xvel[i]  = random(3,6);
    dbx[i] = random(120,250);
    dby[i] = random(1,20);
    dxbvl[i] = random(3,6);
    dybvl[i] = random(3,6);
    }
}
//função com repetição
function draw(){
  if(vtr == false && drt == false && jogo == false && tmp0 == 0){
  msci.setVolume(0.1);
  msci.play();
  msci.setLoop(true);
  tmp0++;
  }
  if(intro == false && crd == false && Camila == false && Vitor == false && vtr == false && drt == false && tmp1 == 0){
  msci.stop();
  msci.setLoop(false);
  mscj.setVolume(0.1);
  mscj.play();
  mscj.setLoop(true);
    tmp1++;
  }
  if(drt == true && jogo == false && tmp2 == 0){
  mscj.stop();
  mscj.setLoop(false);
  mscd.setVolume(0.1);
  mscd.play();
  mscd.setLoop(true);
  tmp2++;
  }
  if(vtr == true && jogo == false && tmp3 == 0){
  mscj.stop();
  mscj.setLoop(false);
  mscv.setVolume(0.5);
  mscv.play();
  mscv.setLoop(true);
  tmp3++;
  }
  if(intro == true){
  background(0,0,128);
  fill(255,255,255);
  textSize(32);
  text("Messier 87", 125, 80);
  textSize(24);
  text("Iniciar", 50, 175);
  text("Créditos", 50, 225);
  image(imgsol, xind - 17, yind - 17, 35, 35);
  noFill();
  noStroke();
  //fill(0)
  ellipse(xind, yind, 20, 20);
  if(keyIsDown(UP_ARROW)){
     yind = 170;
     }
    if(keyIsDown(DOWN_ARROW)){
     yind = 220;
     }
    if(keyIsDown(CONTROL) && yind == 170){
       intro = false;
       jogo = true;
       }
    if(keyIsDown(CONTROL) && yind == 220){
    intro = false;
    crd = true;
    yind = -10;
    }
  }
  if(crd == true){
  background(0,0,139);
  fill(255,255,255);
  textSize(32);
  text("Créditos", 125, 80);
  textSize(24);
  text("José Vitor Santos de Paiva", 30, 175);
  text("Camila Louyse Oliveira da Rocha", 30, 225);
  text("Voltar", 25, 24);
  image(imgsol, xind - 17, yind - 17, 35, 35);
  noFill();
  noStroke();
  //fill(0)
  ellipse(xind, yind, 20, 20);
    if(keyIsDown(LEFT_ARROW)){
    xind = 110;
    yind = 17;
      }
      if(keyIsDown(UP_ARROW)){
    xind = 15;
    yind = 170;
      }
      if(keyIsDown(DOWN_ARROW)){
    xind = 15;
    yind = 220;
      }
       if(keyIsDown(CONTROL) && yind == 17){
    yind = -10;
    crd = false;
    intro = true;
    xind = 170;
      }
      if(keyIsDown(CONTROL)&& yind == 170){
    crd = false;
    Vitor = true;
    yind = -10;
      }
      if(keyIsDown(CONTROL)&& yind == 220){
    crd = false;
    Camila = true;
    yind = -10;
      }
    }
if(Vitor == true){
  background(0,128,0);
  image(imgV, 80,60, 250,250);
  fill(255,255,255);
  textSize(24);
  text("Voltar", 25, 24);
  text("José Vitor Santos de Paiva", 60, 350);
  image(imgsol, xind - 17, yind - 17, 35, 35);
  noFill();
  noStroke();
  //fill(0)
  ellipse(xind, yind, 20, 20);
    if(keyIsDown(LEFT_ARROW)){
    xind = 110;
    yind = 17;
      }
    if(keyIsDown(CONTROL) && yind == 17){
    yind = -10;
    Vitor = false;
    crd = true;
      }
}
if(Camila == true){
  background(255,105,180);
  image(imgC, 80,60, 250,250);
  fill(255,255,255);
  textSize(24);
  text("Voltar", 25, 24);
  text("Camila Louyse Oliveira da Rocha", 20, 350);
  image(imgsol, xind - 17, yind - 17, 35, 35);
  noFill();
  noStroke();
  //fill(0)
  ellipse(xind, yind, 20, 20);
    if(keyIsDown(LEFT_ARROW)){
    xind = 110;
    yind = 17;
      }
    if(keyIsDown(CONTROL) && yind == 17){
    yind = -10;
    Camila = false;
    crd = true;
      }
}
if(drt == true){
background(0);
textSize(32);
fill(255,0,0);
text("Você Morreu", 115,100);
textSize(16);
text("Aperte Control+R para jogar novamente", 50, 350);
}
if(vtr == true){
background(255,215,0);
textSize(32);
fill(0);
text("Você Venceu", 115,100);
textSize(16);
text("Aperte Control+R para jogar novamente", 50, 350);
}
  if(jogo == true){
//Disparos: local
for(i=0;i<qig;i++){
  if(!dsp[i]){
  xd[i] = xj;
  yd[i] = yj;
  }
}
  //Jogador: Movimentação
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
  //Cor do Fundo
    background(0);
    image(imgs, -(xj), -(yj), 900, 900);
  //cena
  if(cena == true){
  g = -10
  background(0);
  image(imgcn, 0, -100, 400, 400);
  xj = 200;
  yj = 350;
  for(i=0;i<qig;i++){
  dsp[i] = false;
  }
  image(imgbss, xbi-4*rbi, ysi-4*rbi, 8*rbi, 8*rbi);
  noFill();
  noStroke();
  //fill(255,60,35);
  ellipse(xbi,ysi,4*rbi,4*rbi);
  ysi = ysi + ysvel;
    if(ysi > 50){
    cena = false;
    boss = true;
    }
  }
  //boss
    if(boss == true){
  g = -10;
  background(0);
  for(i=0;i<2*qig;i++){
  image(imgdpsbss,dbx[i]-3*dbr, dby[i]-3*dbr, 6*dbr, 6*dbr);
    noFill();
    noStroke();
    //fill(255,0,0);
  ellipse(dbx[i],dby[i],2*dbr,2*dbr);
  dby[i] = (dby[i] + dybvl[i]);
  dbx[i] = (dbx[i] + dxbvl[i]);
    if(dbx[i] < 0 || dbx[i] > 400){
    dxbvl[i] = -dxbvl[i];
    }
    if(dby[i] < 0 || dby[i] > 400){
    dybvl[i] = -dybvl[i];
    }
  }
  image(imgbss, xbi-4*rbi, ybi-4*rbi, 8*rbi, 8*rbi);
  noFill();
  noStroke();
  //fill(255,60,35);
  ellipse(xbi,ybi,4*rbi,4*rbi);
  ybi = ybi + ybvel;
  if(ybi > 60){
    ybvel = -ybvel;
    }
  if(ybi < 49){
    ybvel = -ybvel;
    }
  for(i=0;i<2*qig;i++){
  if(dist(xj, yj, dbx[i], dby[i]) < dbr + rj ){
  vds--;
  dbx[i] = random(120,250);
  dby[i] = random(1,20);
  dxbvl[i] = random(-6,6);
  dybvl[i] = random(3,6);
        }
      }
  if(dist(xj, yj, xbi, ybi) < 2*rbi + rj ){
  vds--;
    }
  for(i=0;i<qig;i++){
  if(dist(xd[i], yd[i], xbi, ybi) < 2*rbi + rd ){
  bvds--;
  dsp[i] = false;
      }
    }
  }
  //Disparos: Ativador
  if(time == 0){
  for(i=0;i<qig;i++){ 
    if (keyIsDown(CONTROL) && (!dsp[i]) ){ 
    dsp[i] = true;
      break;
      }
    }
    //Disparos: Movimentação
    time = 6;
  }
  time--;
  //Disparos: Movimentação
  //se quiser mudar a cor do disparo está dentro do fill
  for(i=0;i<qig;i++){
  if(dsp[i]){
    image(imgdsp, xd[i]-3*rd, yd[i]-3*rd, 6*rd, 6*rd);
    noFill();
    noStroke();
    //fill(255,204,0);
   ellipse(xd[i],yd[i],2*rd,2*rd);
    yd[i] = yd[i] - 8;
    if (yd[i] < 0) { 
      dsp[i] = false;
    }
  }
}
  //Cheat: localização do cheat
  fill(0,0,0);
  ellipse(xGM ,yGM ,2*rGM ,2*rGM );
  //Bonus: movimentação
  for(i=0;i<3;i++){
  image(imgb,xb[i] - 3*rb, yb[i]-3*rb, 6*rb,6*rb);
  noFill();
  noStroke();
  //fill(186,85,211);
  ellipse(xb[i], yb[i] ,2*rb ,2*rb);
  xb[i] = xb[i] + bvel;
  if(xb[i] > width){
    yb[i] = random(170,350);
    xb[i] = random(-500,-5000);
    }
}
  //Inimigo: Corpo visível e movimentação
  for(i=0;i<2*qig;i++){
  image(imgi, xi[i]-1.5*ri[i], yi[i]-1.5*ri[i],3*ri[i],3*ri[i]);
  noFill();
  noStroke();
  //fill(255,0,0);
  ellipse(xi[i],yi[i],2*ri[i],2*ri[i]);
  yi[i] = (yi[i] + yvel[i])*g;
  xi[i] = (xi[i] + xvel[i])*g;
  //Inimigo: Colisões nas laterais e no chão
  if(yi[i]>width){
    yi[i] = random(-500,-50);
    xi[i] = random(30,350);
    ri[i] = random(5,40);
    yvel[i] = random(3,12);
    xvel[i]  = random(-6,6);
    while(xvel[i] == 0){
    xvel[i]  = random(-6,6);
    }
      }
  if(xi[i] < 0 || xi[i] > width){
    xvel[i] = -xvel[i];
    }
}
  //Jogador: Corpo Visível e colisão nas bordas
  noFill();
  noStroke();
  //fill(255,255,255)
  ellipse(xj,yj,2*rj,2*rj);
  if(xj > width){
     xj = width;
  }
  if(xj < 0){
    xj = 0;
  }
if(yj > width){
     yj = width;
  }
  if(yj < 0){
    yj = 0;
  }
  image(imgj,xj-30,yj-30,3*rj,3*rj);
  //ativador do cheat: usado para recuperar a vida total.
  for(i=0;i<qig;i++){
  if(dist(xd[i], yd[i], xGM, yGM) < rd + rGM ){
    if(vds < 10){
      vds=10;
      }
    dsp[i] = false;
    }
}
  //Bonus: Colisão com o jogador
  for(i=0;i<3;i++){
  if(dist(xj, yj, xb[i], yb[i]) < rj + rb){
    if(vds < 10){
      vds++;
        }
    yb[i] = random(10,300);
    xb[i] = random(-500,-5000);
    }
}
  //Inimigo: Colisão com o jogador
  for(i=0;i<2*qig;i++){
  if(dist(xj, yj, xi[i], yi[i]) < ri[i] + rj ){
  vds--;
  yi[i] = random(-500,-50);
  xi[i] = random(30,350);
  ri[i] = random(5,40);
  yvel[i] = random(3,12);
  xvel[i]  = random(-6,6);
  while(xvel[i] == 0){
  xvel[i]  = random(-6,6);
    }
    }
}
  //Disparo: Colisão com o inimigo
  //usei 2 for para que todos os disparos pegassem em qualquer inimigo.
  for(j=0;j<qig;j++){
  for(i=0;i<2*qig;i++){
  if(dist(xd[j], yd[j], xi[i], yi[i]) < ri[i] + rd ){
  dsp[j] = false;
  pts+=50;
  yi[i] = random(-500,-50);
  xi[i] = random(30,350);
  ri[i] = random(5,40);
  yvel[i] = random(3,12);
  xvel[i]  = random(-6,6);
  while(xvel[i] == 0){
  xvel[i]  = random(-6,6);
    }
      }
   }
}
  //Nível: Aumento de nivel e aumento de disparos e inimigos.
  if(pts >= nvl + 1000){
    stg = stg + 1;
    nvl = nvl + 2000;
    qig = qig + 2;
  }
  //Aparição do boss
  if(boss == false){  
  if(pts >= 7000){
    cena = true;
      }
}
  if(bvds <= 0){
  boss = false;
  jogo = false;
  vtr = true;
  }
  if(vds <= 0){
  jogo = false;
  drt = true;
    }
  //Info da tela
  fill(255, 255, 255);
  textSize(15);
  text('Vidas: '+vds, 10, 30);
  text('Pontos: '+pts, 120, 30);
  text(stg+'° Nivel', 300, 30);
    }
  }
