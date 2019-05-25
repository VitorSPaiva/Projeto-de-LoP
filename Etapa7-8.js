/*
    Equipe: 
        José Vitor Santos de Paiva - Subturma B (Líder) 
        Camila Louyse Oliveira da Rocha - Subturma B 
       
       Etapa 7 e 8
*/
//Variáveis da tela: vida, pontos, estágio, nivel, tempo.
var vds = 10, pts = 0, stg = 1, nvl = 0,time = 0;
//Variáveis do Inimigo: posição x, pos y, raio, quantidade, velocidade y,vel x.
var xi  = [], yi = [], ri = [], qig = 2, yvel = [], xvel = [];
//Variáveis do Jogador: posiçao x, pos y, raio.
var xj = 200, yj = 350, rj = 20;
//Variáveis do Disparo: disparo, posiçao x, pos y, raio.
var dsp = [false], xd = [], yd = [], rd = 4;
//Cheat: posição x, pos y, raio
var xGM = 0, yGM = 0, rGM = 0
//Variáveis do Bonus: posição x, pos y, raio, velocidade.
var xb = [], yb = [], rb = 5, bvel = 2;
//Função de sem repetição
function setup() {
  //tamanho da tela
  createCanvas(400, 400);
   for(i=0;i<100;i++){
    xi[i] = random(50,350);
    yi[i] = random(-500,-50);
    ri[i] = random(5,25);
    xb[i] = 380
    yb[i] = 390
    yvel[i] = random(3,4);
    xvel[i]  = random(3,9);
    }
}
//função com repetição
function draw(){
//Disparos: local
for(i=0;i<qig;i++){
  if(!dsp[i]){
  xd[i] = xj
  yd[i] = yj
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
  background(135,206,235);
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
    fill(255,204,0);
   ellipse(xd[i],yd[i],2*rd,2*rd);
    yd[i] = yd[i] - 8;
    if (yd[i] < 0) { 
      dsp[i] = false;
    }
  }
}
  //Cheat: localização do cheat
  fill(0,0,0)
  ellipse(xGM ,yGM ,2*rGM ,2*rGM )
  //Bonus: movimentação
  for(i=0;i<3;i++){
  fill(186,85,211);
  ellipse(xb[i], yb[i] ,2*rb ,2*rb);
  xb[i] = xb[i] + bvel
  if(xb[i] > 400){
    yb[i] = random(10,300);
    xb[i] = random(-500,-5000);
    }
}
  //Inimigo: Corpo de colisão; Não pode deixar fora do corpo Visivel.
  for(i=0;i<qig;i++){
  fill(255,105,180)
  ellipse(xi[i],yi[i],ri[i],ri[i]);
   }
  //Inimigo: Corpo visível e movimentação
  for(i=0;i<qig;i++){
  fill(255,0,0);
  rect(xi[i]-ri[i],yi[i]-ri[i],2*ri[i],2*ri[i]);
  yi[i] = yi[i] + yvel[i];
  xi[i] = xi[i] + xvel[i];
  //Inimigo: Colisões nas laterais e no chão
  if(yi[i]>400){
    yi[i] = random(-500,-50);
    xi[i] = random(30,350);
    ri[i] = random(5,25);
    yvel[i] = random(3,9);
    xvel[i]  = random(3,9);
      }
  if(xi[i] < 0 || xi[i] > 400){
    xvel[i] = -xvel[i];
    yvel[i] = random(3,9);
    }
}
  //Jogador: Corpo Visível e colisão nas bordas
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
  //Info da tela
  fill(0, 100, 0);
  textSize(15);
  text('Vidas: '+vds, 10, 30);
  text('Pontos: '+pts, 120, 30);
  text(stg+'° Nivel', 300, 30);
  //ativador do cheat: usado para recuperar a vida total.
  for(i=0;i<qig;i++){
  if(dist(xd[i], yd[i], xGM, yGM) < rd + rGM ){
    if(vds < 10){
      vds=10
      }
    dsp[i] = false
    }
}
  //Bonus: Colisão com o jogador
  for(i=0;i<3;i++){
  if(dist(xj, yj, xb[i], yb[i]) < rj + rb){
    if(vds < 10){
      vds++
        }
    yb[i] = random(10,300);
    xb[i] = random(-500,-5000);
    }
}
  //Inimigo: Colisão com o jogador
  for(i=0;i<qig;i++){
  if(dist(xj, yj, xi[i], yi[i]) < ri[i] + rj ){
  vds--;
  yi[i] = random(-500,-50);
  xi[i] = random(30,350);
  ri[i] = random(5,25);
  yvel[i] = random(3,9);
  xvel[i]  = random(3,9);
    }
}
  //Disparo: Colisão com o inimigo
  //usei 2 for para que todos os disparos pegassem em qualquer inimigo.
  for(j=0;j<qig;j++){
  for(i=0;i<qig;i++){
  if(dist(xd[j], yd[j], xi[i], yi[i]) < ri[i] + rd ){
  dsp[j] = false;
  pts+=100;
  yi[i] = random(-500,-50);
  xi[i] = random(30,350);
  ri[i] = random(5,25);
  yvel[i] = random(3,9);
  xvel[i]  = random(3,9);
      }
   }
}
  //Nível: Aumento de nivel e aumento de disparos e inimigos.
  if(pts == nvl + 1000){
    stg = stg + 1
    nvl = nvl + 2000;
    qig = qig+2
  }
}
