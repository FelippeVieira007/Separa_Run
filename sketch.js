 //Link Referente a PlayList dos Vídeos:

 // PlayList:https://www.youtube.com/playlist?list=PLjKbOiWPspQOZKIYM6TwkjmPfUp1Kz4Gz

 // Vídeo 1:https://www.youtube.com/watch?v=V6arBkkIECE

 // Vídeo 2:https://www.youtube.com/watch?v=qlUfdE6ia-I

 // Vídeo 3:https://www.youtube.com/watch?v=f_R9UnmRvAw


 var foto;
 var foto1;
 var tela=1;
 var lousa;
 var sim;
 var nao;
 var sla;
 var img;
 var im;
 var i;
 var back;
 var centrox=146;
 var centroy=282;
 var raio=35;
 var centrox1=309;
 var centroy1=282;
 var raio=35;
 var centrox2=505;
 var centroy2=282;
 var raio=40;
 var centrox3=32;
 var centroy3=468;
 var raio1=16;
 var doutor;
 var mesa;
 var peneira;
 var dest;
 var ima;
 var raio2=30;
 var centrox4=90;
 var centroy4=100;
 var centrox5=334;
 var centroy5=100;
 var centrox6=578
 var centroy6=100;
 var raio3=15;
 var doutorX=646; 
 var doutorY=282;
 var raio4=15;
 var piso;
 var piso2;
 var cerca;
 var desti;
 var pene;
 var sepa;
 var armazem;
 var grama;
 var rua;
 var rua1;
 var rua2;
 var chao;
 var poste;
 var fundo;
 var car1;
 var car2;
 var carX=5;
 var carY=338;
 var centrox8=490;
 var centroy8=375;
 var raio5=20;
 var raioC=17;
 var centrox9=535;
 var centroy9=415;
 var centrox10=476;
 var centroy10=450;
 var po;
 var pa;
 var elem;
 var elem1;
 var elem2;
 var elem3;
 var elem4;
 var elem5;
 var raioelem=15;
 var elemx=-50;
 var elemx1=-50;
 var elemx2=-50;
 var elemx3=-50;
 var elemx4=-50;
 var elemx5=-50;
 var elemx6=-50;
 var elemx7=-50;
 var elemx8=-50;
 var elemx9=-50;
 var elemx10=-50;
 var elemx11=-50;
 var elemy=318;
 var elemy1=318;
 var elemy2=318;
 var elemy3=318;
 var elemy4=318;
 var elemy5=318;
 var elemy6=318;
 var elemy7=318;
 var elemy8=318;
 var elemy9=318;
 var elemy10=318;
 var elemy11=318;
 var cont=1;
 var cont1=1;
 var contador=1;
 var centroxps=40;
 var centroxds=130;
 var centroxms=230;
 var pontos=280;
 var ponton=398;
 var pontoy=-50
 var centroyg=-50;
 var centroxpn=40;
 var centroxdn=130;
 var centroxmn=230;
 var centroyg1=-100;
 var raiop=15;
 var pontuacao=0;
 var kant=1;
 var check=false;
 var check1=false;
 var check2=false;
 var check3=false;
 var check4=false;
 var check5=false;
 var check6=false;
 var check7=false;
 var choka=false;
 var choka1=false;
 var choka2=false;
 var choka3=false;
 var choka4=false;
 var choka5=false;
 var choka6=false;
 var choka7=false;
 var choka8=false;
 var choka9=false;
 var choka10=false;
 var choka11=false;
 var vida=false;
 var vida1=false;
 var vida2=false;
 var vida3=false;
 var vida4=false;
 var vida5=false;
 var vida6=false;
 var vida7=false;
 var voda=false;
 var voda1=false;
 var voda2=false;
 var voda3=false;
 var voda4=false;
 var voda5=false;
 var voda6=false;
 var voda7=false;
 var voda8=false;
 var voda9=false;
 var voda10=false;
 var voda11=false;
 var life=3;
 var peiwSx=-50;
 var peiwNx=720;
 var peiwY=80;
 var barra;
 var barra1;
 var barra2;
 var GO;
 var fonte;
 var fonte1;
 var back;
 var fonte2;
 var fonte3;
 var fence;
 var ind;
 var ind1;
 var flame;
 var queix=456;
 var floty=100;
 var flotx=214;
 var queiy=100;
 var moon;
 var star;
 var affx=610;
 var affy=430;
 var elx=325;
 var ely=416;
 var raioel=25;
 var vecX;
 var vecY;
 var vec1X;
 var vec1Y;
 var vec2X;
 var vec2Y;
 var vec3X;
 var vec3Y;
 var vec4X;
 var vec4Y;
 var vec5X;
 var vec5Y;
 var carX1=5;
 var carY1=338;
 var carX2=5;
 var carY2=338;
 var carX3=5;
 var carY3=338;
 var carX4=5;
 var carY4=338;
 var carX5=5;
 var carY5=338;
 var carX6=5;
 var carY6=338;
 var balY=75;
 var raioB=40;
 var opn;
 var cor=240;
 var ft;
 var ft1;
 var ft2;
 var ft3;
 var ft4;
 var cir;
 var tinta=240;
 var texto='COMO JOGAR?';
 var texta=' ';
 var testo;
 var rec=[];
 var lata=0;
 var que=0;


function preload() {
  
  cir= loadImage('cir.png');
  opn= loadImage('opn.png');
  star = loadImage('star.png');
  moon = loadImage('moon.png');
  im = loadImage('opcoes.png');
  img = loadImage('chemistry (1).png');
  i = loadImage('call-sheet.png');
  back = loadImage('back.png');
  doutor1 = loadImage('doutor1.png');
  doutor = loadImage('doutor.png');
  mesa = loadImage('mesa.png');
  peneira = loadImage('peneira.png');
   dest = loadImage('destilação.png');
  ima= loadImage('ima.png');
   piso= loadImage('piso.png');
  piso2= loadImage('pedra.png');
  cerca= loadImage('cerca.png');
  desti= loadImage('desti.png');
  pene=loadImage('pene.png')
  sepa=loadImage('sepa.png')
  armazem=loadImage('armazem.png')
  grama=loadImage('grama.png')
  rua=loadImage('rua.png')
  rua1=loadImage('rua1.png')
  rua2=loadImage('rua2.png')
  chao=loadImage('chao.png')
  poste=loadImage('poste.png')
  fundo=loadImage('fundo.png')
  car1=loadImage('car1.png')
  car2=loadImage('car2.png')
  elem=loadImage('elem.png')
  elem1=loadImage('elem1.png')
  elem2=loadImage('elem2.png')
  elem3=loadImage('elem3.png')
  elem4=loadImage('elem4.png')
  elem5=loadImage('elem5.png')
  elem6=loadImage('elem6.png')
  elem7=loadImage('elem7.png')
  elem8=loadImage('elem8.png')
  elem9=loadImage('elem9.png')
  elem10=loadImage('elem10.png')
  elem11=loadImage('elem11.png')
  barra=loadImage('barra.png')
  barra1=loadImage('barra1.png')
  barra2=loadImage('barra2.png')
  GO=loadImage('GO.png')
  fonte=loadFont('fonte.otf')
  fonte1=loadFont('fonte1.ttf')
  back1=loadImage('back1.png')
  fonte2=loadFont('fonte2.ttf')
  fonte3=loadFont('fonte3.otf')
  fence=loadImage('fence.png')
  ind=loadImage('ind.png')
  ind1=loadImage('ind1.png')
  flame=loadImage('flame.png')
  vecX=loadImage('vecX.png')
  vecY=loadImage('vecY.png')
  vec1X=loadImage('vec1X.png')
  vec1Y=loadImage('vec1Y.png')
  vec2X=loadImage('vec2X.png')
  vec2Y=loadImage('vec2Y.png')
  vec3X=loadImage('vec3X.png')
  vec3Y=loadImage('vec3Y.png')
  vec4X=loadImage('vec4X.png')
  vec4Y=loadImage('vec4Y.png')
  vec5X=loadImage('vec5X.png')
  vec5Y=loadImage('vec5Y.png')
  sim=loadImage('sim.png')
  nao=loadImage('nao.png')
  lousa=loadImage('lousa.png')
  ft=loadImage('ft.png')
  ft1=loadImage('ft1.png')
  ft2=loadImage('ft2.png')
  ft3=loadImage('ft3.png')
  ft4=loadImage('ft4.png')
  foto=loadImage('foto.png')
  foto1=loadImage('foto1.png')
   rec[0]=loadImage('rec.png')
   rec[1]=loadImage('rec1.png')
   rec[2]=loadImage('rec2.png')
   rec[3]=loadImage('rec3.png')
   rec[4]=loadImage('rec4.png')
   rec[5]=loadImage('rec5.png')
  
  
  
  
  
}

function setup() {
  
  
  createCanvas(670, 500);
  po=car1;
  pa=doutor1;
  po1=vecX;
  po2=vec1X;
  po3=vec2X;
  po4=vec3X;
  po5=vec4X;
  po6=vec5X;
  sla=sim;
  testo=texto;
  
}
function draw() {
  

 
 if(tela===1){
    background(2,100,255);
     
  image(fundo,0,59)
  image(fundo,64,59)
  image(fundo,128,59)
  image(fundo,191,59)
  image(fundo,252,59)
  image(fundo,300,59)
  image(fundo,360,59)
  image(fundo,390,59)
  image(fundo,450,59)
  image(fundo,500,59)
  image(fundo,560,59)
  image(fundo,620,59)
  image(grama,584,230)
  image(grama,584,175)
  image(grama,584,115)
  image(grama,648,230)
  image(grama,648,175)
  image(grama,648,115)
  image(grama,374,230)
  image(grama,374,175)
  image(grama,374,115)
  image(grama,438,230)
  image(grama,438,175)
  image(grama,438,115)
  image(grama,502,230)
  image(grama,502,175)
  image(grama,502,115)
  image(grama,164,230)
  image(grama,164,175)
  image(grama,164,115)
  image(grama,228,230)
  image(grama,228,175)
  image(grama,228,115)
  image(grama,290,230)
  image(grama,290,175)
  image(grama,290,115)
  image(grama,36,230)
  image(grama,36,175)
  image(grama,36,115)
  image(grama,-28,230)
  image(grama,-28,175)
  image(grama,-28,115)
  image(piso,100,108)
  image(piso,520,108)
  image(piso,310,108)
  image(piso,100,168)
  image(piso,520,168)
  image(piso,310,168)
  image(piso,100,232)
  image(piso,520,232)
  image(piso,310,232)
  image(piso2,100,288)
  image(piso2,520,288)
  image(piso2,310,288)
  image(piso2,160,288)
  image(piso2,580,288)
  image(piso2,370,288)
  image(piso2,220,288)
  image(piso2,620,288)
  image(piso2,430,288)
  image(piso2,280,288)
  image(piso2,680,288)
  image(piso2,460,288)
  image(piso2,40,288)
  image(piso2,0,288)
  image(cerca,460,230)
  image(cerca,40,230)
  image(cerca,-18,230)
  image(cerca,248,230)
  image(cerca,160,230)
  image(cerca,218,230)
  image(cerca,400,230)
  image(cerca,160,230)
  image(cerca,370,230)
  image(cerca,580,230)
  image(cerca,624,230)
  image(pene,83,11)
  image(desti,298,10)
  image(sepa,500,25)
  image(chao, 560,345)
  image(chao, 617,345)
  image(armazem,576,300)
  image(rua,0,346)
  image(rua,62,346)
  image(rua,124,346)
  image(rua,186,346)
  image(rua,248,346)
  image(rua,310,346)
  image(rua,372,346)
  image(rua,434,346)
  image(rua,0,421)
  image(rua,62,421)
  image(rua,124,421)
  image(rua,186,421)
  image(rua,248,421)
  image(rua,310,421)
  image(rua,372,421)
  image(rua,434,421)
  image(rua1,496,355)
  image(rua2,495,412)
   
 
   
  fill(85,119,123)
  noStroke();
  rect(0, 403, 499, 24);
  rect(0, 475, 671, 24);
  rect(557, 408,150, 80);
  rect(497, 345,65, 10);
   
  image(poste,20,356)
  image(poste,190,356)
  image(poste,360,356)
   
  fill(10)
    textFont(fonte3);
    textSize(90);
    text("SeparaRun", 115 ,200 );
    textSize(30);
    image(img,116,280);
    image(im,280,280);
    image(i,475,280);
   
   image(po,carX,carY)
  if(carY > 370){po=car2;}
  if(carY == 338){po=car1;}
  if(dist(centrox8,centroy8,carX+18,carY+15)< raio5+raioC){carX=carX+0.8; carY=carY+0.5;}  
                                                        if(dist(centrox9,centroy9,carX+18,carY+15)< raio5+raioC){
    carX=carX-0.1; carY=carY+0.5; }
  if(dist(centrox10,centroy10,carX+18,carY+15)< raio5+raioC){ carY=430;}
if(carY==338){carX=carX+2}
if(carY==430){carX=carX-2}
  if(carX < -100){carX=-5; carY=338}

   
   
  if (dist(centrox,centroy+30,mouseX,mouseY)< raio){ fill(240)
                                                 textFont(fonte);
    text("Jogar", 110 ,380 );
  if (mouseIsPressed) {tela=2; carX=5; carY=338; ely=416;}}
  if (dist(centrox1,centroy1+30,mouseX,mouseY)< raio){ fill(240);
      textFont(fonte);
                              text("Instruções", 243 ,380 );
  if (mouseIsPressed) { tela=3}}               if (dist(centrox2,centroy2+30,mouseX,mouseY) < raio){ if (mouseIsPressed) { tela=4} fill(240) 
textFont(fonte);                             text("Créditos", 450 ,380 );}
  
}     else if (tela===2){
    background(0,198,255);
  
  if  ((doutorY !== 282) && (keyIsDown(DOWN_ARROW)))
      { doutorY= doutorY+4}
  
   if ((doutorX > 103) && (doutorX < 139) && (doutorY !==70) && (keyIsDown(UP_ARROW))|| (doutorX > 313) && (doutorX < 351) && (doutorY !==70) && (keyIsDown(UP_ARROW))|| (doutorX > 522) && (doutorX < 566) &&
(doutorY !==70) && (keyIsDown(UP_ARROW))) { doutorY= doutorY-4;} else 
    if((doutorY !==242) && (doutorY !==70) && (keyIsDown(UP_ARROW))){doutorY=doutorY-4;}
  
  if ( (doutorY > 238) && keyIsDown(LEFT_ARROW))  
  {if (doutorX !==2){pa=doutor; doutorX= doutorX-4;}} else 
    if((doutorX !== 94) && (doutorX !== 306) && (doutorX !== 514) && keyIsDown(LEFT_ARROW))
  {pa=doutor; doutorX= doutorX-4;}
  
  if ( keyIsDown(RIGHT_ARROW) && (doutorY > 238))
  { if( doutorX !==646){pa=doutor1; doutorX= doutorX+4;}} 
  else if((doutorX !== 142) && (doutorX !== 350) && (doutorX !== 562) && keyIsDown(RIGHT_ARROW))
  { pa=doutor1; doutorX= doutorX+4;}
  if((dist(affx,affy,elemx,elemy)<2*raioelem)){elemy=elemy-110}
  
  image(fundo,0,59)
  image(fundo,64,59)
  image(fundo,128,59)
  image(fundo,191,59)
  image(fundo,252,59)
  image(fundo,300,59)
  image(fundo,360,59)
  image(fundo,390,59)
  image(fundo,450,59)
  image(fundo,500,59)
  image(fundo,560,59)
  image(fundo,620,59)
  image(grama,584,230)
  image(grama,584,175)
  image(grama,584,115)
  image(grama,648,230)
  image(grama,648,175)
  image(grama,648,115)
  image(grama,374,230)
  image(grama,374,175)
  image(grama,374,115)
  image(grama,438,230)
  image(grama,438,175)
  image(grama,438,115)
  image(grama,502,230)
  image(grama,502,175)
  image(grama,502,115)
  image(grama,164,230)
  image(grama,164,175)
  image(grama,164,115)
  image(grama,228,230)
  image(grama,228,175)
  image(grama,228,115)
  image(grama,290,230)
  image(grama,290,175)
  image(grama,290,115)
  image(grama,36,230)
  image(grama,36,175)
  image(grama,36,115)
  image(grama,-28,230)
  image(grama,-28,175)
  image(grama,-28,115)
  image(piso,100,108)
  image(piso,520,108)
  image(piso,310,108)
  image(piso,100,168)
  image(piso,520,168)
  image(piso,310,168)
  image(piso,100,232)
  image(piso,520,232)
  image(piso,310,232)
  image(piso2,100,288)
  image(piso2,520,288)
  image(piso2,310,288)
  image(piso2,160,288)
  image(piso2,580,288)
  image(piso2,370,288)
  image(piso2,220,288)
  image(piso2,620,288)
  image(piso2,430,288)
  image(piso2,280,288)
  image(piso2,680,288)
  image(piso2,460,288)
  image(piso2,40,288)
  image(piso2,0,288)
  image(cerca,460,230)
  image(cerca,40,230)
  image(cerca,-18,230)
  image(cerca,248,230)
  image(cerca,160,230)
  image(cerca,218,230)
  image(cerca,400,230)
  image(cerca,160,230)
  image(cerca,370,230)
  image(cerca,580,230)
  image(cerca,624,230)
  image(pene,83,11)
  image(desti,298,10)
  image(sepa,500,25)
  image(chao, 560,345)
  image(chao, 617,345)
  image(armazem,576,300)
  image(rua,0,346)
  image(rua,62,346)
  image(rua,124,346)
  image(rua,186,346)
  image(rua,248,346)
  image(rua,310,346)
  image(rua,372,346)
  image(rua,434,346)
  image(rua,0,421)
  image(rua,62,421)
  image(rua,124,421)
  image(rua,186,421)
  image(rua,248,421)
  image(rua,310,421)
  image(rua,372,421)
  image(rua,434,421)
  image(rua1,496,355)
  image(rua2,495,412)
 
  
  
  noFill();
  ellipse(elemx,elemy,2*raioelem,2*raioelem)
  ellipse(elemx1,elemy1,2*raioelem,2*raioelem)
  ellipse(elemx2,elemy2,2*raioelem,2*raioelem)
  ellipse(elemx3,elemy3,2*raioelem,2*raioelem)
  ellipse(elemx4,elemy4,2*raioelem,2*raioelem)
  ellipse(elemx5,elemy5,2*raioelem,2*raioelem)
  ellipse(elemx6,elemy6,2*raioelem,2*raioelem)
  ellipse(elemx7,elemy7,2*raioelem,2*raioelem)
  noStroke();
  ellipse(centrox4,centroy4,2*raio2,2*raio2)  
  ellipse(centrox5,centroy5,2*raio2,2*raio2) 
  ellipse(centrox6,centroy6,2*raio2,2*raio2) 
  
  if ((keyIsDown(key=32)  &&(dist(elemx,elemy,doutorX+12,doutorY+36)< raio3+raioelem ))) {
    elemx=doutorX+12;
    elemy=doutorY+36;} 
  if ((keyIsDown(key=32)  &&(dist(elemx1,elemy1,doutorX+12,doutorY+36)< raio3+raioelem ))) {
    elemx1=doutorX+12;
    elemy1=doutorY+36;} 
  if ((keyIsDown(key=32)  &&(dist(elemx2,elemy2,doutorX+12,doutorY+36)< raio3+raioelem ))) {
    elemx2=doutorX+12;
    elemy2=doutorY+36;} 
  if ((keyIsDown(key=32)  &&(dist(elemx3,elemy3,doutorX+12,doutorY+36)< raio3+raioelem ))) {
    elemx3=doutorX+12;
    elemy3=doutorY+36;} 
  if ((keyIsDown(key=32)  &&(dist(elemx4,elemy4,doutorX+12,doutorY+36)< raio3+raioelem ))) {
    elemx4=doutorX+12;
    elemy4=doutorY+36;} 
  if ((keyIsDown(key=32)  &&(dist(elemx5,elemy5,doutorX+12,doutorY+36)< raio3+raioelem ))) {
    elemx5=doutorX+12;
    elemy5=doutorY+36;} 
  if ((keyIsDown(key=32)  &&(dist(elemx6,elemy6,doutorX+12,doutorY+36)< raio3+raioelem ))) {
    elemx6=doutorX+12;
    elemy6=doutorY+36;} 
  if ((keyIsDown(key=32)  &&(dist(elemx7,elemy7,doutorX+12,doutorY+36)< raio3+raioelem ))) {
    elemx7=doutorX+12;
    elemy7=doutorY+36;} 
  
  fill(85,119,123)
  noStroke();
  rect(0, 403, 499, 24);
  rect(0, 475, 671, 24);
  rect(557, 408,150, 80);
  rect(497, 345,65, 10);
  
  image(pa,doutorX,doutorY)
  image(elem,elemx-11,elemy-10)
  image(elem1,elemx1-13,elemy1-16)
  image(elem2,elemx2-15,elemy2-16)
  image(elem3,elemx3-12,elemy3-12)
  image(elem4,elemx4-16,elemy4-17)
  image(elem5,elemx5-17,elemy5-17)
  image(elem6,elemx6-13,elemy6-11)
  image(elem7,elemx7-16,elemy7-17)
  image(poste,20,356)
  image(poste,190,356)
  image(poste,360,356)
  
  if(contador==2){while(cont1!==0){elemx=610; elemy=320; cont1=cont1-1;}}
  if(contador==3){while(cont1!==0){elemx1=610;elemy1=320; cont1=cont1-1;}}
  if(contador==4){while(cont1!==0){elemx2=610;elemy2=320; cont1=cont1-1;}}
  if(contador==5){while(cont1!==0){elemx3=610;elemy3=320; cont1=cont1-1;}}
  if(contador==6){while(cont1!==0){elemx4=610;elemy4=320; cont1=cont1-1;}}
  if(contador==7){while(cont1!==0){elemx5=610;elemy5=320; cont1=cont1-1;}}
  if(contador==8){while(cont1!==0){elemx6=610;elemy6=320; cont1=cont1-1;}}
  if(contador==9){while(cont1!==0){elemx7=610;elemy7=320; cont1=cont1-1;}}
  
  noFill(); 
  noStroke();
  ellipse(centrox8,centroy8,2*raio5,2*raio5)
  ellipse(centrox9,centroy9,raio5,raio5)
  ellipse(centrox10,centroy10,raio5,raio5)
  
  
  image(po,carX,carY)
  if(carY > 370){po=car2;}
  if(carY == 338){po=car1;}
  if(dist(centrox8,centroy8,carX+18,carY+15)< raio5+raioC){carX=carX+0.8; carY=carY+0.5;
while(cont!==0){  contador++;  cont=cont-1; sla=nao; }}   
                                                           
  if(dist(centrox9,centroy9,carX+18,carY+15)< raio5+raioC){
    carX=carX-0.1; carY=carY+0.5; cont1=1; sla=nao; }else {sla=sim;}
  if(dist(centrox10,centroy10,carX+18,carY+15)< raio5+raioC){ carY=430; cont=1;  if(contador> 8){contador=1;}}
if(carY==338){carX=carX+4}
if(carY==430){carX=carX-4}
  if(carX < -100){carX=-5; carY=338}
image(sla,537,348)
  
  
  
  
  
  ellipse(doutorX+12,doutorY+36,30,30)
  
  if((dist(centrox4,centroy4,elemx1,elemy1)< raioelem+raio2)||(dist(centrox4,centroy4,elemx2,elemy2)< raioelem+raio2)||(dist(centrox4,centroy4,elemx4,elemy4)< raioelem+raio2)) {
    
    if((dist(centrox4,centroy4,elemx1,elemy1)< raioelem+raio2)) {elemx1=40; elemy1=-50;}
     if((dist(centrox4,centroy4,elemx2,elemy2)< raioelem+raio2)){elemx2=40; elemy2=-50;}
     if((dist(centrox4,centroy4,elemx4,elemy4)< raioelem+raio2)){elemx4=40; elemy4=-50;}
   } 
  else if(((dist(centrox4,centroy4,elemx,elemy)< raioelem+raio2)||(dist(centrox4,centroy4,elemx3,elemy3)< raioelem+raio2)||(dist(centrox4,centroy4,elemx5,elemy5)< raioelem+raio2)||(dist(centrox4,centroy4,elemx6,elemy6)< raioelem+raio2)||(dist(centrox4,centroy4,elemx7,elemy7)< raioelem+raio2))){
    
      if((dist(centrox4,centroy4,elemx,elemy)< raioelem+raio2))
{elemx=40; elemy=-100;}
     if((dist(centrox4,centroy4,elemx3,elemy3)< raioelem+raio2))  {elemx3=40; elemy3=-100;}
     if((dist(centrox4,centroy4,elemx5,elemy5)< raioelem+raio2))  {elemx5=40; elemy5=-100;}
      if((dist(centrox4,centroy4,elemx6,elemy6)< raioelem+raio2)){elemx6=40; elemy6=-100;}
     if((dist(centrox4,centroy4,elemx7,elemy7)< raioelem+raio2)){elemx7=40; elemy7=-100;}
     }
      
   if((dist(centrox5,centroy5,elemx,elemy)< raioelem+raio2)||(dist(centrox5,centroy5,elemx3,elemy3)< raioelem+raio2)||(dist(centrox5,centroy5,elemx6,elemy6)< raioelem+raio2)) {
     
   if((dist(centrox5,centroy5,elemx,elemy)< raioelem+raio2))
{elemx=130; elemy=-50;}
     if((dist(centrox5,centroy5,elemx3,elemy3)< raioelem+raio2)){elemx3=130; elemy3=-50;}
     if((dist(centrox5,centroy5,elemx6,elemy6)< raioelem+raio2)){elemx6=130; elemy6=-50;}
   }
  else if(((dist(centrox5,centroy5,elemx1,elemy1)< raioelem+raio2)||(dist(centrox5,centroy5,elemx2,elemy2)< raioelem+raio2)||(dist(centrox5,centroy5,elemx5,elemy5)< raioelem+raio2)||
(dist(centrox5,centroy5,elemx4,elemy4)< raioelem+raio2)||     
(dist(centrox5,centroy5,elemx7,elemy7)< raioelem+raio2))){
    
     if((dist(centrox5,centroy5,elemx1,elemy1)< raioelem+raio2))
{elemx1=130; elemy1=-100;}
     if((dist(centrox5,centroy5,elemx2,elemy2)< raioelem+raio2))          {elemx2=130; elemy2=-100;}
     if((dist(centrox5,centroy5,elemx5,elemy5)< raioelem+raio2))          {elemx5=130; elemy5=-100;}
     if((dist(centrox5,centroy5,elemx7,elemy7)< raioelem+raio2))          {elemx7=130; elemy7=-100;}
     if((dist(centrox5,centroy5,elemx4,elemy4)< raioelem+raio2))  {elemx4=130; elemy4=-100;}
  }
      
  if((dist(centrox6,centroy6,elemx5,elemy5)< raioelem+raio2)||(dist(centrox6,centroy6,elemx7,elemy7)< raioelem+raio2)) {
    
    if((dist(centrox6,centroy6,elemx5,elemy5)< raioelem+raio2))
{elemx5=230; elemy5=-50;}
     if((dist(centrox6,centroy6,elemx7,elemy7)< raioelem+raio2))          {elemx7=230; elemy7=-50;}
  } 
  else if(((dist(centrox6,centroy6,elemx,elemy)< raioelem+raio2)||(dist(centrox6,centroy6,elemx3,elemy3)< raioelem+raio2)||(dist(centrox6,centroy6,elemx4,elemy4)< raioelem+raio2)||(dist(centrox6,centroy6,elemx1,elemy1)< raioelem+raio2)||(dist(centrox6,centroy6,elemx6,elemy6)< raioelem+raio2)||(dist(centrox6,centroy6,elemx2,elemy2)< raioelem+raio2))){
    
    if((dist(centrox6,centroy6,elemx,elemy)< raioelem+raio2))
{elemx=230; elemy=-100;}
     if((dist(centrox6,centroy6,elemx3,elemy3)< raioelem+raio2))  {elemx3=230; elemy3=-100;}
      if((dist(centrox6,centroy6,elemx4,elemy4)< raioelem+raio2))  {elemx4=230; elemy4=-100;}
     if((dist(centrox6,centroy6,elemx2,elemy2)< raioelem+raio2))  {elemx2=230; elemy2=-100;}
      if((dist(centrox6,centroy6,elemx6,elemy6)< raioelem+raio2)){elemx6=230; elemy6=-100;}
     if((dist(centrox6,centroy6,elemx1,elemy1)< raioelem+raio2)){elemx1=230; elemy1=-100;} }

  noFill();
  noStroke();
  ellipse(centroxps,centroyg,2*raiop,2*raiop);
  ellipse(centroxpn,centroyg1,2*raiop,2*raiop);
  ellipse(centroxds,centroyg,2*raiop,2*raiop);
  ellipse(centroxdn,centroyg1,2*raiop,2*raiop);
  ellipse(centroxms,centroyg,2*raiop,2*raiop);
  ellipse(centroxmn,centroyg1,2*raiop,2*raiop);
  
  //-------------------Pontuação Positiva---------------------------------
  if((dist(centroxps,centroyg,elemx1,elemy1)< raiop+raioelem) && (check1==false)) 
  {pontuacao=pontuacao+100; check1=true; elemx1=-50; elemy1=80}
  if((dist(centroxps,centroyg,elemx2,elemy2)< raiop+raioelem) && (check2==false)) 
  {pontuacao=pontuacao+100; check2=true; elemx2=-50; elemy2=80}
  if((dist(centroxps,centroyg,elemx4,elemy4)< raiop+raioelem) && (check4==false)) 
  {pontuacao=pontuacao+100; check4=true; elemx4=-50; elemy4=80}
  //----------------------------------------------------------------------
   if((dist(centroxds,centroyg,elemx,elemy)< raiop+raioelem) && (check==false)) 
  {pontuacao=pontuacao+100; check=true; elemx=-50; elemy=80}
   if((dist(centroxds,centroyg,elemx3,elemy3)< raiop+raioelem) && (check3==false)) 
  {pontuacao=pontuacao+100; check3=true; elemx3=-50; elemy3=80}
   if((dist(centroxds,centroyg,elemx6,elemy6)< raiop+raioelem) && (check6==false)) 
  {pontuacao=pontuacao+100; check6=true; elemx6=-50; elemy6=80}
  //----------------------------------------------------------------------
   if((dist(centroxms,centroyg,elemx7,elemy7)< raiop+raioelem) && (check7==false)) 
  {pontuacao=pontuacao+100; check7=true; elemx7=-50; elemy7=80}
   if((dist(centroxms,centroyg,elemx5,elemy5)< raiop+raioelem) && (check5==false)) 
  {pontuacao=pontuacao+100; check5=true; elemx5=-50; elemy5=80}
  //-----------------------Pontuação Negativa-----------------------------
   if((dist(centroxpn,centroyg1,elemx,elemy)< raiop+raioelem) && (vida==false)) 
  {life=life-1; vida=true; elemx=720; elemy=80}
  if((dist(centroxpn,centroyg1,elemx3,elemy3)< raiop+raioelem) && (vida3==false)) 
  {life=life-1; vida3=true; elemx3=elemx3; elemy3=elemy3}
  if((dist(centroxpn,centroyg1,elemx5,elemy5)< raiop+raioelem) && (vida5==false)) 
  {life=life-1; vida5=true; elemx5=720; elemy5=80}
  if((dist(centroxpn,centroyg1,elemx6,elemy6)< raiop+raioelem) && (vida6==false)) 
  {life=life-1; vida6=true; elemx6=720; elemy6=80}
  if((dist(centroxpn,centroyg1,elemx7,elemy7)< raiop+raioelem) && (vida7==false)) 
  {life=life-1; vida7=true; elemx7=720; elemy7=80}
 //-----------------------------------------------------------------------
  if((dist(centroxdn,centroyg1,elemx1,elemy1)< raiop+raioelem) && (vida1==false)) 
  {life=life-1; vida1=true; elemx1=720; elemy1=80}
  if((dist(centroxdn,centroyg1,elemx2,elemy2)< raiop+raioelem) && (vida2==false)) 
  {life=life-1; vida2=true; elemx2=720; elemy2=80}
  if((dist(centroxdn,centroyg1,elemx5,elemy5)< raiop+raioelem) && (vida5==false)) 
  {life=life-1; vida5=true; elemx5=720; elemy5=80}
  if((dist(centroxdn,centroyg1,elemx4,elemy4)< raiop+raioelem) && (vida4==false)) 
  {life=life-1; vida4=true; elemx4=720; elemy4=80}
  if((dist(centroxdn,centroyg1,elemx7,elemy7)< raiop+raioelem) && (vida7==false)) 
  {life=life-1; vida7=true; elemx7=720; elemy7=80}
  //----------------------------------------------------------------------
  if((dist(centroxmn,centroyg1,elemx,elemy)< raiop+raioelem) && (vida==false)) 
  {life=life-1; vida=true; elemx=720; elemy=80}
  if((dist(centroxmn,centroyg1,elemx1,elemy1)< raiop+raioelem) && (vida1==false)) 
  {life=life-1; vida1=true; elemx1=720; elemy1=80}
  if((dist(centroxmn,centroyg1,elemx2,elemy2)< raiop+raioelem) && (vida2==false)) 
  {life=life-1; vida2=true; elemx2=720; elemy2=80}
  if((dist(centroxmn,centroyg1,elemx3,elemy3)< raiop+raioelem) && (vida3==false)) 
  {life=life-1; vida3=true; elemx3=720; elemy3=80}
  if((dist(centroxmn,centroyg1,elemx4,elemy4)< raiop+raioelem) && (vida4==false)) 
  {life=life-1; vida4=true; elemx4=720; elemy4=80}
  if((dist(centroxmn,centroyg1,elemx6,elemy6)< raiop+raioelem) && (vida6==false)) 
  {life=life-1; vida6=true; elemx6=720; elemy6=80}
  //----------------------------------------------------------------------
  
  ellipse(peiwSx,peiwY,2*raiop,2*raiop);
  if(dist(peiwSx,peiwY,elemx,elemy)< raiop+raioelem)
  {check=false;}
  if(dist(peiwSx,peiwY,elemx1,elemy1)< raiop+raioelem)
  {check1=false;}
  if(dist(peiwSx,peiwY,elemx2,elemy2)< raiop+raioelem)
  {check2=false;}
  if(dist(peiwSx,peiwY,elemx3,elemy3)< raiop+raioelem)
  {check3=false;}
  if(dist(peiwSx,peiwY,elemx4,elemy4)< raiop+raioelem)
  {check4=false;}
  if(dist(peiwSx,peiwY,elemx5,elemy5)< raiop+raioelem)
  {check5=false;}
  if(dist(peiwSx,peiwY,elemx6,elemy6)< raiop+raioelem)
  {check6=false;}
  if(dist(peiwSx,peiwY,elemx7,elemy7)< raiop+raioelem)
  {check7=false;}
  //----------------------------------------------------------------------
  
  ellipse(peiwNx,peiwY,2*raiop,2*raiop);
  if(dist(peiwNx,peiwY,elemx,elemy)< raiop+raioelem)
  {vida=false; }
   if(dist(peiwNx,peiwY,elemx1,elemy1)< raiop+raioelem)
  {vida1=false; }
   if(dist(peiwNx,peiwY,elemx2,elemy2)< raiop+raioelem)
  {vida2=false; }
   if(dist(peiwNx,peiwY,elemx3,elemy3)< raiop+raioelem)
  {vida3=false; }
   if(dist(peiwNx,peiwY,elemx4,elemy4)< raiop+raioelem)
  {vida4=false; }
   if(dist(peiwNx,peiwY,elemx5,elemy5)< raiop+raioelem)
  {vida5=false; }
   if(dist(peiwNx,peiwY,elemx6,elemy6)< raiop+raioelem)
  {vida6=false; }
   if(dist(peiwNx,peiwY,elemx7,elemy7)< raiop+raioelem)
  {vida7=false; }
  //----------------------------------------------------------------------
  
  //---------------------------Choque Dos Elementos-----------------------
  if((dist(elemx,elemy,elemx1,elemy1)< 2*raioelem)||
    (dist(elemx,elemy,elemx1,elemy1)< 2*raioelem)||
    (dist(elemx,elemy,elemx1,elemy1)< 2*raioelem)||
    (dist(elemx,elemy,elemx1,elemy1)< 2*raioelem)||
    (dist(elemx,elemy,elemx1,elemy1)< 2*raioelem)||
    (dist(elemx,elemy,elemx1,elemy1)< 2*raioelem)||
    (dist(elemx,elemy,elemx1,elemy1)< 2*raioelem)||
    (dist(elemx,elemy,elemx1,elemy1)< 2*raioelem))
     {elemx=-50; elemy=430}
  if((dist(elemx1,elemy1,elemx2,elemy2)< 2*raioelem)||
     (dist(elemx1,elemy1,elemx3,elemy3)< 2*raioelem)||
     (dist(elemx1,elemy1,elemx4,elemy4)< 2*raioelem)||
     (dist(elemx1,elemy1,elemx5,elemy5)< 2*raioelem)||
     (dist(elemx1,elemy1,elemx6,elemy6)< 2*raioelem)||
     (dist(elemx1,elemy1,elemx7,elemy7)< 2*raioelem))
    {elemx1=-50; elemy1=430}
  if((dist(elemx2,elemy2,elemx3,elemy3)< 2*raioelem)||
     (dist(elemx2,elemy2,elemx4,elemy4)< 2*raioelem)||
     (dist(elemx2,elemy2,elemx5,elemy5)< 2*raioelem)||
     (dist(elemx2,elemy2,elemx6,elemy6)< 2*raioelem)||
     (dist(elemx2,elemy2,elemx7,elemy7)< 2*raioelem))
     {elemx2=-50; elemy2=430}
   if((dist(elemx3,elemy3,elemx4,elemy4)< 2*raioelem)||
      (dist(elemx3,elemy3,elemx5,elemy5)< 2*raioelem)||
      (dist(elemx3,elemy3,elemx6,elemy6)< 2*raioelem)||
      (dist(elemx3,elemy3,elemx7,elemy7)< 2*raioelem))
     {elemx3=-50; elemy3=430;}
   if((dist(elemx4,elemy4,elemx5,elemy5)< 2*raioelem)||  
      (dist(elemx4,elemy4,elemx6,elemy6)< 2*raioelem)|| 
      (dist(elemx4,elemy4,elemx7,elemy7)< 2*raioelem))
     {elemx4=-50; elemy4=430;}
    if((dist(elemx5,elemy5,elemx6,elemy6)< 2*raioelem)|| 
       (dist(elemx5,elemy5,elemx7,elemy7)< 2*raioelem))
      {elemx5=-50; elemy5=430}
    if((dist(elemx6,elemy6,elemx7,elemy7)< 2*raioelem))
      {elemx6=-50; elemy=430;}
  //---------------------------Barra de Vida------------------------------
  if(life==3){image(barra,281,468);}
  if(life==2){image(barra1,280,468);}
  if(life==1){image(barra2,281,470);}
  if(life==0){tela=5;}
    
  
  fill(10);
   textFont(fonte);
   textSize(18);
   text('Pontuação: ',565,430);
   textSize(22);
   text(pontuacao,605,460);
   if(pontuacao > 900){tela=7}

      image(back,16,450)
if(dist(centrox3,centroy3,mouseX,mouseY)< raio){ fill(10)
    textSize(12) 
    text("Voltar", 20 ,494 );
  if (mouseIsPressed) {tela=1; life=3; pontuacao=0;}}
  }
  else if (tela===3){
    background(30);
    
  image(moon,620,16)
  image(star,20,15)  
  image(star,28,35)
  image(star,130,30)
  image(star,250,26)
  image(star,380,17)
  image(star,236,15)
  image(star,503,29)   
  image(star,590,20)  
  image(fundo,0,59)
  image(fundo,64,59)
  image(fundo,128,59)
  image(fundo,191,59)
  image(fundo,252,59)
  image(fundo,300,59)
  image(fundo,360,59)
  image(fundo,390,59)
  image(fundo,450,59)
  image(fundo,500,59)
  image(fundo,560,59)
  image(fundo,620,59)
  image(grama,584,230)
  image(grama,584,175)
  image(grama,584,115)
  image(grama,648,230)
  image(grama,648,175)
  image(grama,648,115)
  image(grama,364,230)
  image(grama,364,175)
  image(grama,364,115)
  image(grama,488,230)
  image(grama,488,175)
  image(grama,488,115)
  image(grama,120,230)
  image(grama,120,175)
  image(grama,120,115)
  image(grama,228,230)
  image(grama,228,175)
  image(grama,228,115)
  image(grama,290,230)
  image(grama,290,175)
  image(grama,290,115)
  image(grama,36,230)
  image(grama,36,175)
  image(grama,36,115)
  image(grama,-28,230)
  image(grama,-28,175)
  image(grama,-28,115)
  image(piso,58,108)
  image(piso,302,108)
  image(piso,180,108)
  image(piso,302,108)
  image(piso,180,108)
  image(piso,58,168)
  image(piso,302,168)
  image(piso,180,168)
  image(piso,58,232)
  image(piso,180,232)
  image(piso,302,232)
  image(piso,424,108)  
  image(piso,424,168)  
  image(piso,424,232) 
  image(piso,546,108)  
  image(piso,546,168)  
  image(piso,546,232)   
  image(piso2,100,288)
  image(piso2,520,288)
  image(piso2,310,288)
  image(piso2,160,288)
  image(piso2,580,288)
  image(piso2,370,288)
  image(piso2,220,288)
  image(piso2,620,288)
  image(piso2,430,288)
  image(piso2,280,288)
  image(piso2,680,288)
  image(piso2,460,288)
  image(piso2,40,288)
  image(piso2,0,288)
  image(fence,-2,230)
  image(fence,120,230)
  image(fence,242,230)
  image(fence,362,230)  
  image(fence,484,230)
  image(fence,608,230)
  image(pene,42,11)
  image(ind,165,18)  
  image(ind1,418,18)
  image(flame,438,91)
  image(desti,286,10)
  image(sepa,525,25)
  image(chao, 560,345)
  image(chao, 617,345)
  image(armazem,576,300)
  image(rua,0,346)
  image(rua,62,346)
  image(rua,124,346)
  image(rua,186,346)
  image(rua,248,346)
  image(rua,310,346)
  image(rua,372,346)
  image(rua,434,346)
  image(rua,0,421)
  image(rua,62,421)
  image(rua,124,421)
  image(rua,186,421)
  image(rua,248,421)
  image(rua,310,421)
  image(rua,372,421)
  image(rua,434,421)
  image(rua1,496,355)
  image(rua2,495,412)
 
    
  
  fill(85,119,123)
  noStroke();
  rect(0, 403, 499, 24);
  rect(0, 475, 671, 24);
  rect(557, 408,150, 80);
  rect(497, 345,65, 10);
  image(poste,20,356)
  image(poste,190,356)
  image(poste,360,356) 
  image(opn,590,408)
  
  noFill();  
  noStroke();
  ellipse(centrox8,centroy8,2*raio5,2*raio5)
  ellipse(centrox9,centroy9,raio5,raio5)
  ellipse(centrox10,centroy10,raio5,raio5)
  
noStroke();
ellipse(centrox4,balY,2*raioB,2*raioB)   
ellipse(centrox5,balY,2*raioB,2*raioB) 
ellipse(centrox6,balY,2*raioB,2*raioB) 
ellipse(flotx,balY,2*raioB,2*raioB)
ellipse(queix,balY,2*raioB,2*raioB)
    
fill(cor);
textFont(fonte3);
textSize(25);                                 text("Elementos", 556 ,474); 
if((dist(610,428,mouseX,mouseY)<1.2*raioC)){fill(10); cor=10;if (mouseIsPressed) { tela=08}} else{cor=240;}   
    
if (dist(centrox4,balY,mouseX,mouseY)< raioB){ fill(240);
textFont(fonte3);
textSize(70);                                 text("Peneiração", 160 ,338);
  if (mouseIsPressed) { tela=9}}  
    
    
if (dist(centrox5,balY,mouseX,mouseY)< raioB){ fill(240);
textFont(fonte3);
textSize(70);                                 text("Destilação Simples", 46 ,338);
  if (mouseIsPressed) { tela=11}}  
    
    
if (dist(centrox6,balY,mouseX,mouseY)< raioB){ fill(240);
textFont(fonte3);
textSize(70);                                 text("Separação Magnética", 5 ,338);
  if (mouseIsPressed) { tela=13}}  
    
    
if (dist(flotx,balY,mouseX,mouseY)< raioB){ fill(240);
textFont(fonte3);
textSize(70);                                 text("Flotação", 190 ,338);
  if (mouseIsPressed) { tela=10}} 
    
    
if (dist(queix,balY,mouseX,mouseY)< raioB){ fill(240);
textFont(fonte3);
textSize(70);                                 text("Destilção Fracionada", 08 ,338);
  if (mouseIsPressed) { tela=12}}      

    
    
    
  image(po,carX,carY) 
  image(po2,carX2,carY2+3)
  image(po3,carX3,carY3)
  image(po4,carX4,carY4+4)
  image(po5,carX5,carY5)
  image(po6,carX6-4,carY6-2)  
  image(po1,carX1-35,carY1-28) 
  
  noFill();  
  noStroke();  
  ellipse(335,212,110,110);
  fill(tinta); 
  textSize(25);
  text(testo,265,220)  
  
  if((dist(335,222,mouseX,mouseY)<55)){
    tinta=10; if (mouseIsPressed) { tela=14}
  } else {tinta=(240); } 
    
    
    
  if(carY > 370){po=car2;}
  if(carY == 338){po=car1;}
  if(dist(centrox8,centroy8,carX+18,carY+15)< raio5+raioC){carX=carX+0.8; carY=carY+0.5;}  
                                                          
  if(dist(centrox9,centroy9,carX+18,carY+15)< raio5+raioC){carX=carX-0.1; carY=carY+0.5;}
  if(dist(centrox10,centroy10,carX+18,carY+15)< raio5+raioC){ carY=430;}
if(carY==338){carX=carX+1.2}
if(carY==430){carX=carX-1.2}
  if(carX < -700){carX=-5; carY=338}
//------------------------------------------------
  if(carY1 > 370){po1=vecY;}
  if(carY1 == 338){po1=vecX;}
  if(dist(centrox8,centroy8,carX1+18,carY1+15)< raio5+raioC){carX1=carX1+0.8; carY1=carY1+0.5;}  
                                                          
  if(dist(centrox9,centroy9,carX1+18,carY1+15)< raio5+raioC){carX1=carX1-0.1; carY1=carY1+0.5;}
  if(dist(centrox10,centroy10,carX1+18,carY1+15)< raio5+raioC){ carY1=430;}
if(carY1==338){carX1=carX1+4}
if(carY1==430){carX1=carX1-4}
  if(carX1 < -700){carX1=-5; carY1=338}
//------------------------------------------------
  if(carY2 > 370){po2=vec1Y;}
  if(carY2 == 338){po2=vec1X;}
  if(dist(centrox8,centroy8,carX2+18,carY2+15)< raio5+raioC){carX2=carX2+0.8; carY2=carY2+0.5;}  
                                                          
  if(dist(centrox9,centroy9,carX2+18,carY2+15)< raio5+raioC){carX2=carX2-0.1; carY2=carY2+0.5;}
  if(dist(centrox10,centroy10,carX2+18,carY2+15)< raio5+raioC){ carY2=430;}
if(carY2==338){carX2=carX2+1.6}
if(carY2==430){carX2=carX2-1.6}
  if(carX2 < -700){carX2=-5; carY2=338} 
//------------------------------------------------
  if(carY3 > 370){po3=vec2Y;}
  if(carY3 == 338){po3=vec2X;}
  if(dist(centrox8,centroy8,carX3+18,carY3+15)< raio5+raioC){carX3=carX3+0.8; carY3=carY3+0.5;}  
                                                          
  if(dist(centrox9,centroy9,carX3+18,carY3+15)< raio5+raioC){carX3=carX3-0.1; carY3=carY3+0.5;}
  if(dist(centrox10,centroy10,carX3+18,carY3+15)< raio5+raioC){ carY3=430;}
if(carY3==338){carX3=carX3+1.4}
if(carY3==430){carX3=carX3-1.4}
  if(carX3 < -700){carX3=-5; carY3=338}
//------------------------------------------------
  if(carY4 > 370){po4=vec3Y;}
  if(carY4 == 338){po4=vec3X;}
  if(dist(centrox8,centroy8,carX4+18,carY4+15)< raio5+raioC){carX4=carX4+0.8; carY4=carY4+0.5;}  
                                                          
  if(dist(centrox9,centroy9,carX4+18,carY4+15)< raio5+raioC){carX4=carX4-0.1; carY4=carY4+0.5;}
  if(dist(centrox10,centroy10,carX4+18,carY4+15)< raio5+raioC){ carY4=430;}
if(carY4==338){carX4=carX4+1.1}
if(carY4==430){carX4=carX4-1.1}
  if(carX4 < -700){carX4=-5; carY4=338}
//------------------------------------------------
  if(carY5 > 370){po5=vec4Y;}
  if(carY5 == 338){po5=vec4X;}
  if(dist(centrox8,centroy8,carX5+18,carY5+15)< raio5+raioC){carX5=carX5+0.8; carY5=carY5+0.5;}  
                                                          
  if(dist(centrox9,centroy9,carX5+18,carY5+15)< raio5+raioC){carX5=carX5-0.1; carY5=carY5+0.5;}
  if(dist(centrox10,centroy10,carX5+18,carY5+15)< raio5+raioC){ carY5=430;}
if(carY5==338){carX5=carX5+2.3}
if(carY5==430){carX5=carX5-2.3}
  if(carX5 < -700){carX5=-5; carY5=338}
//------------------------------------------------}
  if(carY6 > 370){po6=vec5Y;}
  if(carY6 == 338){po6=vec5X;}
  if(dist(centrox8,centroy8,carX6+18,carY6+15)< raio5+raioC){carX6=carX6+0.8; carY6=carY6+0.5;}  
                                                          
  if(dist(centrox9,centroy9,carX6+18,carY6+15)< raio5+raioC){carX6=carX6-0.1; carY6=carY6+0.5;}
  if(dist(centrox10,centroy10,carX6+18,carY6+15)< raio5+raioC){ carY6=430;}
if(carY6==338){carX6=carX6+2}
if(carY6==430){carX6=carX6-2}
  if(carX6 < -700){carX6=-5; carY6=338}
//------------------------------------------------
  
    
    image(back,16,450)
  if(dist(centrox3,centroy3,mouseX,mouseY)< raio){ 
    textSize(12) 
    text("Voltar", 20 ,494 );
  if (mouseIsPressed) {tela=1}}
  }
   else if (tela===4){
background(0,180,150); 
image(foto1,40,250); 
image(foto,40,68); 
fill(10);     
textSize(25);
textFont(fonte3);
text('Criador do Jogo :'+"\n"+'Felippe Vieira dos Santos'+"\n"+'lógica de progamação'+"\n"+'turma 1 : a'+"\n"+'Felippevieira03@gmail.com',220,80)  
text('Orientador :'+"\n"+'Daniel Costa'+"\n"+'Professor de Química'+"\n"+'Graduado em Enfermagem - ufrn',220,274) 
   
    image(back,16,450)
  if(dist(centrox3,centroy3,mouseX,mouseY)< raio){ 
    textSize(12) 
    text("Voltar", 20 ,494 );
  if (mouseIsPressed) {tela=1}}
  }
    else if (tela===5){
    background(0,15,30);
      
  
  image(GO,70,-60)
      
  fill(240);
  textSize(30); 
  textFont(fonte);
  text("Estude melhor as instruções"+'\n'+ "para não falhar na próxima ",140 ,400 );
   image(back1,19,448)   
   if(dist(centrox3,centroy3,mouseX,mouseY)< raio){ 
    fill(240); 
    textSize(12) 
    text("Voltar", 20 ,494 );
  if (mouseIsPressed) {tela=1; life=3; pontuacao=0;}}
 }
  else if (tela===6){
    
    background(10);
  
  if  ((doutorY !== 282) && (keyIsDown(DOWN_ARROW)))
      { doutorY= doutorY+4}
  
   if ((doutorX > 541) && (doutorX < 587) && (doutorY !==70) && (keyIsDown(UP_ARROW))||
       (doutorX > 417) && (doutorX < 467) && (doutorY !==70) && (keyIsDown(UP_ARROW))||
       (doutorX > 53) && (doutorX < 103) && (doutorY !==70) && (keyIsDown(UP_ARROW))|| (doutorX > 173) && (doutorX < 223) && (doutorY !==70) && (keyIsDown(UP_ARROW))||
(doutorX > 297) && (doutorX < 343) &&
(doutorY !==70) && (keyIsDown(UP_ARROW))) { doutorY= doutorY-4;} else 
    if((doutorY !==242) && (doutorY !==70) && (keyIsDown(UP_ARROW))){doutorY=doutorY-4;}
  
  if ( (doutorY > 238) && keyIsDown(LEFT_ARROW))  
  {if (doutorX !==2){pa=doutor; doutorX= doutorX-4;}} else 
    if((doutorX !== 54) && (doutorX !== 174) && (doutorX !== 298) && (doutorX !== 418) && (doutorX !== 542) && keyIsDown(LEFT_ARROW))
  {pa=doutor; doutorX= doutorX-4;}
  
  if ( keyIsDown(RIGHT_ARROW) && (doutorY > 238))
  { if( doutorX !==646){pa=doutor1; doutorX= doutorX+4;}} 
  else if((doutorX !== 102) && (doutorX !== 222) && (doutorX !== 342) && (doutorX !== 466) && (doutorX !== 586) && keyIsDown(RIGHT_ARROW))
  { pa=doutor1; doutorX= doutorX+4;}
  
  image(moon,620,16)
  image(star,20,15)  
  image(star,28,35)
  image(star,130,30)
  image(star,250,26)
  image(star,380,17)
  image(star,236,15)
  image(star,503,29)   
  image(star,590,20)  
  image(fundo,0,59)
  image(fundo,64,59)
  image(fundo,128,59)
  image(fundo,191,59)
  image(fundo,252,59)
  image(fundo,300,59)
  image(fundo,360,59)
  image(fundo,390,59)
  image(fundo,450,59)
  image(fundo,500,59)
  image(fundo,560,59)
  image(fundo,620,59)
  image(grama,584,230)
  image(grama,584,175)
  image(grama,584,115)
  image(grama,648,230)
  image(grama,648,175)
  image(grama,648,115)
  image(grama,364,230)
  image(grama,364,175)
  image(grama,364,115)
  image(grama,488,230)
  image(grama,488,175)
  image(grama,488,115)
  image(grama,120,230)
  image(grama,120,175)
  image(grama,120,115)
  image(grama,228,230)
  image(grama,228,175)
  image(grama,228,115)
  image(grama,290,230)
  image(grama,290,175)
  image(grama,290,115)
  image(grama,36,230)
  image(grama,36,175)
  image(grama,36,115)
  image(grama,-28,230)
  image(grama,-28,175)
  image(grama,-28,115)
  image(piso,58,108)
  image(piso,302,108)
  image(piso,180,108)
  image(piso,302,108)
  image(piso,180,108)
  image(piso,58,168)
  image(piso,302,168)
  image(piso,180,168)
  image(piso,58,232)
  image(piso,180,232)
  image(piso,302,232)
  image(piso,424,108)  
  image(piso,424,168)  
  image(piso,424,232) 
  image(piso,546,108)  
  image(piso,546,168)  
  image(piso,546,232)   
  image(piso2,100,288)
  image(piso2,520,288)
  image(piso2,310,288)
  image(piso2,160,288)
  image(piso2,580,288)
  image(piso2,370,288)
  image(piso2,220,288)
  image(piso2,620,288)
  image(piso2,430,288)
  image(piso2,280,288)
  image(piso2,680,288)
  image(piso2,460,288)
  image(piso2,40,288)
  image(piso2,0,288)
  image(fence,-2,230)
  image(fence,120,230)
  image(fence,242,230)
  image(fence,362,230)  
  image(fence,484,230)
  image(fence,608,230)
  image(pene,42,11)
  image(ind,165,18)  
  image(ind1,418,18)
  image(flame,438,91)
  image(desti,286,10)
  image(sepa,525,25)
  image(chao, 560,345)
  image(chao, 617,345)
  image(armazem,576,300)
  image(rua,0,346)
  image(rua,62,346)
  image(rua,124,346)
  image(rua,186,346)
  image(rua,248,346)
  image(rua,310,346)
  image(rua,372,346)
  image(rua,434,346)
  image(rua,0,421)
  image(rua,62,421)
  image(rua,124,421)
  image(rua,186,421)
  image(rua,248,421)
  image(rua,310,421)
  image(rua,372,421)
  image(rua,434,421)
  image(rua1,496,355)
  image(rua2,495,412)
  image(pa,doutorX,doutorY)
  if((dist(affx,affy,elemx,elemy)<2*raioelem)){elemy=elemy-110}  
  
  
  noFill();
  noStroke();
  ellipse(elemx,elemy,2*raioelem,2*raioelem)
  ellipse(elemx1,elemy1,2*raioelem,2*raioelem)
  ellipse(elemx2,elemy2,2*raioelem,2*raioelem)
  ellipse(elemx3,elemy3,2*raioelem,2*raioelem)
  ellipse(elemx4,elemy4,2*raioelem,2*raioelem)
  ellipse(elemx5,elemy5,2*raioelem,2*raioelem)
  ellipse(elemx6,elemy6,2*raioelem,2*raioelem)
  ellipse(elemx7,elemy7,2*raioelem,2*raioelem)
  ellipse(elemx7,elemy7,2*raioelem,2*raioelem)
  ellipse(elemx7,elemy7,2*raioelem,2*raioelem)
  ellipse(elemx8,elemy8,2*raioelem,2*raioelem)
  ellipse(elemx9,elemy9,2*raioelem,2*raioelem)
  ellipse(elemx10,elemy10,2*raioelem,2*raioelem)
  ellipse(elemx11,elemy11,2*raioelem,2*raioelem)
  
  noStroke();
  ellipse(centrox4,centroy4,2*raio2,2*raio2)  
  ellipse(centrox5,centroy5,2*raio2,2*raio2) 
  ellipse(centrox6,centroy6,2*raio2,2*raio2) 
  ellipse(flotx,floty,2*raio2,2*raio2)
  ellipse(queix,queiy,2*raio2,2*raio2)
    
  
  if ((keyIsDown(key=32)  &&(dist(elemx,elemy,doutorX+12,doutorY+36)< raio3+raioelem ))) {
    elemx=doutorX+12;
    elemy=doutorY+36;} 
  if ((keyIsDown(key=32)  &&(dist(elemx1,elemy1,doutorX+12,doutorY+36)< raio3+raioelem ))) {
    elemx1=doutorX+12;
    elemy1=doutorY+36;} 
  if ((keyIsDown(key=32)  &&(dist(elemx2,elemy2,doutorX+12,doutorY+36)< raio3+raioelem ))) {
    elemx2=doutorX+12;
    elemy2=doutorY+36;} 
  if ((keyIsDown(key=32)  &&(dist(elemx3,elemy3,doutorX+12,doutorY+36)< raio3+raioelem ))) {
    elemx3=doutorX+12;
    elemy3=doutorY+36;} 
  if ((keyIsDown(key=32)  &&(dist(elemx4,elemy4,doutorX+12,doutorY+36)< raio3+raioelem ))) {
    elemx4=doutorX+12;
    elemy4=doutorY+36;} 
  if ((keyIsDown(key=32)  &&(dist(elemx5,elemy5,doutorX+12,doutorY+36)< raio3+raioelem ))) {
    elemx5=doutorX+12;
    elemy5=doutorY+36;} 
  if ((keyIsDown(key=32)  &&(dist(elemx6,elemy6,doutorX+12,doutorY+36)< raio3+raioelem ))) {
    elemx6=doutorX+12;
    elemy6=doutorY+36;} 
  if ((keyIsDown(key=32)  &&(dist(elemx7,elemy7,doutorX+12,doutorY+36)< raio3+raioelem ))) {
    elemx7=doutorX+12;
    elemy7=doutorY+36;} 
  if ((keyIsDown(key=32)  &&(dist(elemx8,elemy8,doutorX+12,doutorY+36)< raio3+raioelem ))) {
    elemx8=doutorX+12;
    elemy8=doutorY+36;}
  if ((keyIsDown(key=32)  &&(dist(elemx9,elemy9,doutorX+12,doutorY+36)< raio3+raioelem ))) {
    elemx9=doutorX+12;
    elemy9=doutorY+36;}
  if ((keyIsDown(key=32)  &&(dist(elemx10,elemy10,doutorX+12,doutorY+36)< raio3+raioelem ))) {
    elemx10=doutorX+12;
    elemy10=doutorY+36;}
  if ((keyIsDown(key=32)  &&(dist(elemx11,elemy11,doutorX+12,doutorY+36)< raio3+raioelem ))) {
    elemx11=doutorX+12;
    elemy11=doutorY+36;}
    
  
  fill(85,119,123)
  noStroke();
  rect(0, 403, 499, 24);
  rect(0, 475, 671, 24);
  rect(557, 408,150, 80);
  rect(497, 345,65, 10);
  
  
  image(elem,elemx-11,elemy-10)
  image(elem1,elemx1-13,elemy1-16)
  image(elem2,elemx2-15,elemy2-16)
  image(elem3,elemx3-12,elemy3-12)
  image(elem4,elemx4-16,elemy4-17)
  image(elem5,elemx5-17,elemy5-17)
  image(elem6,elemx6-13,elemy6-11)
  image(elem7,elemx7-16,elemy7-17)
  image(elem8,elemx8-14,elemy8-17)
  image(elem9,elemx9-16,elemy9-16)  
  image(elem10,elemx10-15,elemy10-20)
  image(elem11,elemx11-15,elemy11-16)  
  image(poste,20,356)
  image(poste,190,356)
  image(poste,360,356)
  
  if(contador==2){while(cont1!==0){elemx=610; elemy=320; cont1=cont1-1;}}
  if(contador==3){while(cont1!==0){elemx1=610;elemy1=320; cont1=cont1-1;}}
  if(contador==4){while(cont1!==0){elemx2=610;elemy2=320; cont1=cont1-1;}}
  if(contador==5){while(cont1!==0){elemx3=610;elemy3=320; cont1=cont1-1;}}
  if(contador==6){while(cont1!==0){elemx4=610;elemy4=320; cont1=cont1-1;}}
  if(contador==7){while(cont1!==0){elemx5=610;elemy5=320; cont1=cont1-1;}}
  if(contador==8){while(cont1!==0){elemx6=610;elemy6=320; cont1=cont1-1;}}
  if(contador==9){while(cont1!==0){elemx7=610;elemy7=320; cont1=cont1-1;}}
  if(contador==10){while(cont1!==0){elemx8=610;elemy8=320; cont1=cont1-1;}} 
  if(contador==11){while(cont1!==0){elemx9=610;elemy9=320; cont1=cont1-1;}}
  if(contador==12){while(cont1!==0){elemx10=610;elemy10=320; cont1=cont1-1;}} 
  if(contador==13){while(cont1!==0){elemx11=610;elemy11=320; cont1=cont1-1;}}  
  
  noFill(); 
  noStroke();
  ellipse(centrox8,centroy8,2*raio5,2*raio5)
  ellipse(centrox9,centroy9,raio5,raio5)
  ellipse(centrox10,centroy10,raio5,raio5)
  
  
  image(po,carX,carY)
  if(carY > 370){po=car2;}
  if(carY == 338){po=car1;}
  if(dist(centrox8,centroy8,carX+18,carY+15)< raio5+raioC){carX=carX+0.8; carY=carY+0.5;
while(cont!==0){  contador++;  cont=cont-1; }  
                                                          } 
  if(dist(centrox9,centroy9,carX+18,carY+15)< raio5+raioC){
    carX=carX-0.1; carY=carY+0.5; cont1=1; sla=nao; }else {sla=sim;}
  if(dist(centrox10,centroy10,carX+18,carY+15)< raio5+raioC){ carY=430; cont=1;  if(contador> 8){contador=1;}}
if(carY==338){carX=carX+4}
if(carY==430){carX=carX-4}
  if(carX < -100){carX=-5; carY=338}
image(sla,537,348)

  
  
  
  
  
  ellipse(doutorX+12,doutorY+36,30,30)
  
  if((dist(centrox4,centroy4,elemx1,elemy1)< raioelem+raio2)||(dist(centrox4,centroy4,elemx2,elemy2)< raioelem+raio2)||(dist(centrox4,centroy4,elemx4,elemy4)< raioelem+raio2)) {
    
    if((dist(centrox4,centroy4,elemx1,elemy1)< raioelem+raio2)) {elemx1=pontos; elemy1=pontoy;}
     if((dist(centrox4,centroy4,elemx2,elemy2)< raioelem+raio2)){elemx2=pontos; elemy2=pontoy;}
     if((dist(centrox4,centroy4,elemx4,elemy4)< raioelem+raio2)){elemx4=pontos; elemy4=pontoy;}
    
   } 
  else if(((dist(centrox4,centroy4,elemx,elemy)< raioelem+raio2)||(dist(centrox4,centroy4,elemx3,elemy3)< raioelem+raio2)||(dist(centrox4,centroy4,elemx5,elemy5)< raioelem+raio2)||(dist(centrox4,centroy4,elemx6,elemy6)< raioelem+raio2)||(dist(centrox4,centroy4,elemx7,elemy7)< raioelem+raio2)||(dist(centrox4,centroy4,elemx8,elemy8)< raioelem+raio2)||(dist(centrox4,centroy4,elemx9,elemy9)< raioelem+raio2)||(dist(centrox4,centroy4,elemx10,elemy10)< raioelem+raio2)||(dist(centrox4,centroy4,elemx11,elemy11)< raioelem+raio2))) {
    
      if((dist(centrox4,centroy4,elemx,elemy)< raioelem+raio2))
{elemx=ponton; elemy=pontoy;}
     if((dist(centrox4,centroy4,elemx3,elemy3)< raioelem+raio2))  {elemx3=ponton; elemy3=pontoy;}
     if((dist(centrox4,centroy4,elemx5,elemy5)< raioelem+raio2))  {elemx5=ponton; elemy5=pontoy;}
      if((dist(centrox4,centroy4,elemx6,elemy6)< raioelem+raio2)){elemx6=ponton; elemy6=pontoy;}
     if((dist(centrox4,centroy4,elemx7,elemy7)< raioelem+raio2)){elemx7=ponton; elemy7=pontoy;}
     if((dist(centrox4,centroy4,elemx8,elemy8)< raioelem+raio2)){elemx8=ponton; elemy8=pontoy;}
     if((dist(centrox4,centroy4,elemx9,elemy9)< raioelem+raio2)){elemx9=ponton; elemy9=pontoy;}
     if((dist(centrox4,centroy4,elemx10,elemy10)< raioelem+raio2)){elemx10=ponton; elemy10=pontoy;}
     if((dist(centrox4,centroy4,elemx11,elemy11)< raioelem+raio2)){elemx11=ponton; elemy11=pontoy;}    
     }
      
   if((dist(centrox5,centroy5,elemx,elemy)< raioelem+raio2)||(dist(centrox5,centroy5,elemx3,elemy3)< raioelem+raio2)||(dist(centrox5,centroy5,elemx6,elemy6)< raioelem+raio2)) {
     
   if((dist(centrox5,centroy5,elemx,elemy)< raioelem+raio2))
{elemx=pontos; elemy=pontoy;}
     if((dist(centrox5,centroy5,elemx3,elemy3)< raioelem+raio2)){elemx3=pontos; elemy3=pontoy;}
     if((dist(centrox5,centroy5,elemx6,elemy6)< raioelem+raio2)){elemx6=pontos; elemy6=pontoy;}
   }
  else if(((dist(centrox5,centroy5,elemx1,elemy1)< raioelem+raio2)||(dist(centrox5,centroy5,elemx2,elemy2)< raioelem+raio2)||(dist(centrox5,centroy5,elemx5,elemy5)< raioelem+raio2)||(dist(centrox5,centroy5,elemx4,elemy4)< raioelem+raio2)||(dist(centrox5,centroy5,elemx7,elemy7)< raioelem+raio2)||(dist(centrox5,centroy5,elemx8,elemy8)< raioelem+raio2)||(dist(centrox5,centroy5,elemx9,elemy9)< raioelem+raio2)||(dist(centrox5,centroy5,elemx10,elemy10)< raioelem+raio2)||(dist(centrox5,centroy5,elemx11,elemy11)< raioelem+raio2))){
    
     if((dist(centrox5,centroy5,elemx1,elemy1)< raioelem+raio2))
{elemx1=ponton; elemy1=pontoy;}
     if((dist(centrox5,centroy5,elemx2,elemy2)< raioelem+raio2))          {elemx2=ponton; elemy2=pontoy;}
     if((dist(centrox5,centroy5,elemx5,elemy5)< raioelem+raio2))          {elemx5=ponton; elemy5=pontoy;}
     if((dist(centrox5,centroy5,elemx7,elemy7)< raioelem+raio2))          {elemx7=ponton; elemy7=pontoy;}
     if((dist(centrox5,centroy5,elemx4,elemy4)< raioelem+raio2))  {elemx4=ponton; elemy4=pontoy;}
     if((dist(centrox5,centroy5,elemx8,elemy8)< raioelem+raio2)){elemx8=ponton; elemy8=pontoy;}
     if((dist(centrox5,centroy5,elemx9,elemy9)< raioelem+raio2)){elemx9=ponton; elemy9=pontoy;}
     if((dist(centrox5,centroy5,elemx10,elemy10)< raioelem+raio2)){elemx10=ponton; elemy10=pontoy;}
     if((dist(centrox5,centroy5,elemx11,elemy11)< raioelem+raio2)){elemx11=ponton; elemy11=pontoy;}                                                               
  }
      
  if((dist(centrox6,centroy6,elemx5,elemy5)< raioelem+raio2)||(dist(centrox6,centroy6,elemx7,elemy7)< raioelem+raio2)) {
    
    if((dist(centrox6,centroy6,elemx5,elemy5)< raioelem+raio2))
{elemx5=pontos; elemy5=pontoy;}
     if((dist(centrox6,centroy6,elemx7,elemy7)< raioelem+raio2)){elemx7=pontos; elemy7=pontoy;}
  } 
  else if(((dist(centrox6,centroy6,elemx,elemy)< raioelem+raio2)||(dist(centrox6,centroy6,elemx3,elemy3)< raioelem+raio2)||(dist(centrox6,centroy6,elemx4,elemy4)< raioelem+raio2)||(dist(centrox6,centroy6,elemx1,elemy1)< raioelem+raio2)||(dist(centrox6,centroy6,elemx6,elemy6)< raioelem+raio2)||(dist(centrox6,centroy6,elemx2,elemy2)< raioelem+raio2)||(dist(centrox6,centroy6,elemx8,elemy8)< raioelem+raio2)||(dist(centrox6,centroy6,elemx9,elemy9)< raioelem+raio2)||(dist(centrox6,centroy6,elemx10,elemy10)< raioelem+raio2)||(dist(centrox6,centroy6,elemx11,elemy11)< raioelem+raio2))){
    
    if((dist(centrox6,centroy6,elemx,elemy)< raioelem+raio2))
{elemx=ponton; elemy=pontoy;}
     if((dist(centrox6,centroy6,elemx3,elemy3)< raioelem+raio2))  {elemx3=ponton; elemy3=pontoy;}
      if((dist(centrox6,centroy6,elemx4,elemy4)< raioelem+raio2))  {elemx4=ponton; elemy4=pontoy;}
     if((dist(centrox6,centroy6,elemx2,elemy2)< raioelem+raio2))  {elemx2=ponton; elemy2=pontoy;}
      if((dist(centrox6,centroy6,elemx6,elemy6)< raioelem+raio2)){elemx6=ponton; elemy6=pontoy;}
     if((dist(centrox6,centroy6,elemx1,elemy1)< raioelem+raio2)){elemx1=ponton; elemy1=pontoy;}
     if((dist(centrox6,centroy6,elemx8,elemy8)< raioelem+raio2)){elemx8=ponton; elemy8=pontoy;}
     if((dist(centrox6,centroy6,elemx9,elemy9)< raioelem+raio2)){elemx9=ponton; elemy9=pontoy;}
     if((dist(centrox6,centroy6,elemx10,elemy10)< raioelem+raio2)){elemx10=ponton; elemy10=pontoy;}
     if((dist(centrox6,centroy6,elemx11,elemy11)< raioelem+raio2)){elemx11=ponton; elemy11=pontoy;}}   
    
     if((dist(flotx,floty,elemx10,elemy10)< raioelem+raio2)||(dist(flotx,floty,elemx11,elemy11)< raioelem+raio2)) {
    
    if((dist(flotx,floty,elemx10,elemy10)< raioelem+raio2))
{elemx10=pontos; elemy10=pontoy;}
     if((dist(flotx,floty,elemx11,elemy11)< raioelem+raio2)){elemx11=pontos; elemy11=pontoy;}
     }
       
  else if((dist(flotx,floty,elemx,elemy)<raio2+raioelem)||
      (dist(flotx,floty,elemx1,elemy1)<raio2+raioelem)||
      (dist(flotx,floty,elemx2,elemy2)<raio2+raioelem)||
      (dist(flotx,floty,elemx3,elemy3)<raio2+raioelem)||
      (dist(flotx,floty,elemx4,elemy4)<raio2+raioelem)||
      (dist(flotx,floty,elemx5,elemy5)<raio2+raioelem)||
      (dist(flotx,floty,elemx6,elemy6)<raio2+raioelem)||
      (dist(flotx,floty,elemx7,elemy7)<raio2+raioelem)||
      (dist(flotx,floty,elemx8,elemy8)<raio2+raioelem)||
      (dist(flotx,floty,elemx9,elemy9)<raio2+raioelem)){
      
      if((dist(flotx,floty,elemx,elemy)< raioelem+raio2))
{elemx=ponton; elemy=pontoy;}
     if((dist(flotx,floty,elemx1,elemy1)< raioelem+raio2)){elemx1=ponton; elemy1=pontoy;}
    if((dist(flotx,floty,elemx2,elemy2)< raioelem+raio2)){elemx2=ponton; elemy2=pontoy;}
      if((dist(flotx,floty,elemx3,elemy3)< raioelem+raio2)){elemx3=ponton; elemy3=pontoy;}
      if((dist(flotx,floty,elemx4,elemy4)< raioelem+raio2)){elemx4=ponton; elemy4=pontoy;}
      if((dist(flotx,floty,elemx5,elemy5)< raioelem+raio2)){elemx5=ponton; elemy5=pontoy;}
      if((dist(flotx,floty,elemx6,elemy6)< raioelem+raio2)){elemx6=ponton; elemy6=pontoy;}
      if((dist(flotx,floty,elemx7,elemy7)< raioelem+raio2)){elemx7=ponton; elemy7=pontoy;}
      if((dist(flotx,floty,elemx8,elemy8)< raioelem+raio2)){elemx8=ponton; elemy8=pontoy;}
      if((dist(flotx,floty,elemx9,elemy9)< raioelem+raio2)){elemx9=ponton; elemy9=pontoy;}
    }
      
      if((dist(queix,queiy,elemx8,elemy8)< raioelem+raio2)||(dist(queix,queiy,elemx9,elemy9)< raioelem+raio2)) {
    
    if((dist(queix,queiy,elemx8,elemy8)< raioelem+raio2))
{elemx8=pontos; elemy8=pontoy;}
     if((dist(queix,queiy,elemx9,elemy9)< raioelem+raio2)){elemx9=pontos; elemy9=pontoy;}} else
       
    if((dist(queix,queiy,elemx,elemy)<raio2+raioelem)||
      (dist(queix,queiy,elemx1,elemy1)<raio2+raioelem)||
      (dist(queix,queiy,elemx2,elemy2)<raio2+raioelem)||
      (dist(queix,queiy,elemx3,elemy3)<raio2+raioelem)||
      (dist(queix,queiy,elemx4,elemy4)<raio2+raioelem)||
      (dist(queix,queiy,elemx5,elemy5)<raio2+raioelem)||
      (dist(queix,queiy,elemx6,elemy6)<raio2+raioelem)||
      (dist(queix,queiy,elemx7,elemy7)<raio2+raioelem)||
      (dist(queix,queiy,elemx10,elemy10)<raio2+raioelem)||
      (dist(queix,queiy,elemx11,elemy11)<raio2+raioelem)){
      
      if((dist(queix,queiy,elemx,elemy)< raioelem+raio2))
{elemx=ponton; elemy=pontoy;}
     if((dist(queix,queiy,elemx1,elemy1)< raioelem+raio2)){elemx1=ponton; elemy1=pontoy;}
    if((dist(queix,queiy,elemx2,elemy2)< raioelem+raio2)){elemx2=ponton; elemy2=pontoy;}
      if((dist(queix,queiy,elemx3,elemy3)< raioelem+raio2)){elemx3=ponton; elemy3=pontoy;}
      if((dist(queix,queiy,elemx4,elemy4)< raioelem+raio2)){elemx4=ponton; elemy4=pontoy;}
      if((dist(queix,queiy,elemx5,elemy5)< raioelem+raio2)){elemx5=ponton; elemy5=pontoy;}
      if((dist(queix,queiy,elemx6,elemy6)< raioelem+raio2)){elemx6=ponton; elemy6=pontoy;}
      if((dist(queix,queiy,elemx7,elemy7)< raioelem+raio2)){elemx7=ponton; elemy7=pontoy;}
      if((dist(queix,queiy,elemx10,elemy10)< raioelem+raio2)){elemx10=ponton; elemy10=pontoy;}
      if((dist(queix,queiy,elemx11,elemy11)< raioelem+raio2)){elemx11=ponton; elemy11=pontoy;}
    }
       
       
       
       
       
    

  noFill();
  noStroke();
  ellipse(pontos,pontoy,2*raiop,2*raiop);
  ellipse(ponton,pontoy,2*raiop,2*raiop);

  
  //-------------------Pontuação Positiva---------------------------------
  if((dist(pontos,pontoy,elemx,elemy)<raiop+raioelem) && (choka==false))
  {pontuacao=pontuacao+200; choka=true; elemx=-50; elemy=80;}
    if((dist(pontos,pontoy,elemx1,elemy1)<raiop+raioelem) && (choka1==false))
  {pontuacao=pontuacao+200; choka1=true; elemx1=-50; elemy1=80;}
    if((dist(pontos,pontoy,elemx2,elemy2)<raiop+raioelem) && (choka2==false))
  {pontuacao=pontuacao+200; choka2=true; elemx2=-50; elemy2=80;}
    if((dist(pontos,pontoy,elemx3,elemy3)<raiop+raioelem) && (choka3==false))
  {pontuacao=pontuacao+200; choka3=true; elemx3=-50; elemy3=80;}
    if((dist(pontos,pontoy,elemx4,elemy4)<raiop+raioelem) && (choka4==false))
  {pontuacao=pontuacao+200; choka4=true; elemx4=-50; elemy4=80;}
    if((dist(pontos,pontoy,elemx5,elemy5)<raiop+raioelem) && (choka5==false))
  {pontuacao=pontuacao+200; choka5=true; elemx5=-50; elemy5=80;}
    if((dist(pontos,pontoy,elemx6,elemy6)<raiop+raioelem) && (choka6==false))
  {pontuacao=pontuacao+200; choka6=true; elemx6=-50; elemy6=80;}
    if((dist(pontos,pontoy,elemx7,elemy7)<raiop+raioelem) && (choka7==false))
  {pontuacao=pontuacao+200; choka7=true; elemx7=-50; elemy7=80;}
    if((dist(pontos,pontoy,elemx8,elemy8)<raiop+raioelem) && (choka8==false))
  {pontuacao=pontuacao+200; choka8=true; elemx8=-50; elemy8=80;}
    if((dist(pontos,pontoy,elemx9,elemy9)<raiop+raioelem) && (choka9==false))
  {pontuacao=pontuacao+200; choka9=true; elemx9=-50; elemy9=80;}
    if((dist(pontos,pontoy,elemx10,elemy10)<raiop+raioelem) && (choka10==false))
  {pontuacao=pontuacao+200; choka10=true; elemx10=-50; elemy10=80;}
    if((dist(pontos,pontoy,elemx11,elemy11)<raiop+raioelem) && (choka11==false))
  {pontuacao=pontuacao+200; choka11=true; elemx11=-50; elemy10=80;}
      
  //-----------------------Pontuação Negativa-----------------------------
if((dist(ponton,pontoy,elemx,elemy)<raiop+raioelem) && (voda==false))
  {life=life-1; voda=true; elemx=-50; elemy=80;}
    if((dist(ponton,pontoy,elemx1,elemy1)<raiop+raioelem) && (voda1==false))
  {life=life-1; voda1=true; elemx1=-50; elemy1=80;}
    if((dist(ponton,pontoy,elemx2,elemy2)<raiop+raioelem) && (voda2==false))
  {life=life-1; voda2=true; elemx2=-50; elemy2=80;}
    if((dist(ponton,pontoy,elemx3,elemy3)<raiop+raioelem) && (voda3==false))
  {life=life-1; voda3=true; elemx3=-50; elemy3=80;}
    if((dist(ponton,pontoy,elemx4,elemy4)<raiop+raioelem) && (voda4==false))
  {life=life-1; voda4=true; elemx4=-50; elemy4=80;}
    if((dist(ponton,pontoy,elemx5,elemy5)<raiop+raioelem) && (voda5==false))
  {life=life-1; voda5=true; elemx5=-50; elemy5=80;}
    if((dist(ponton,pontoy,elemx6,elemy6)<raiop+raioelem) && (voda6==false))
  {life=life-1; voda6=true; elemx6=-50; elemy6=80;}
    if((dist(ponton,pontoy,elemx7,elemy7)<raiop+raioelem) && (voda7==false))
  {life=life-1; voda7=true; elemx7=-50; elemy7=80;}
    if((dist(ponton,pontoy,elemx8,elemy8)<raiop+raioelem) && (voda8==false))
  {life=life-1; voda8=true; elemx8=-50; elemy8=80;}
    if((dist(ponton,pontoy,elemx9,elemy9)<raiop+raioelem) && (voda9==false))
  {life=life-1; voda9=true; elemx9=-50; elemy9=80;}
    if((dist(ponton,pontoy,elemx10,elemy10)<raiop+raioelem) && (voda10==false))
  {life=life-1; voda10=true; elemx10=-50; elemy10=80;}
    if((dist(ponton,pontoy,elemx11,elemy11)<raiop+raioelem) && (voda11==false))
  {life=life-1; voda11=true; elemx11=-50; elemy11=80;}
     
  //----------------------------------------------------------------------
  
  ellipse(peiwSx,peiwY,2*raiop,2*raiop);
  if(dist(peiwSx,peiwY,elemx,elemy)< raiop+raioelem)
  {choka=false;}
  if(dist(peiwSx,peiwY,elemx1,elemy1)< raiop+raioelem)
  {choka1=false;}
  if(dist(peiwSx,peiwY,elemx2,elemy2)< raiop+raioelem)
  {choka2=false;}
  if(dist(peiwSx,peiwY,elemx3,elemy3)< raiop+raioelem)
  {choka3=false;}
  if(dist(peiwSx,peiwY,elemx4,elemy4)< raiop+raioelem)
  {choka4=false;}
  if(dist(peiwSx,peiwY,elemx5,elemy5)< raiop+raioelem)
  {choka5=false;}
  if(dist(peiwSx,peiwY,elemx6,elemy6)< raiop+raioelem)
  {choka6=false;}
  if(dist(peiwSx,peiwY,elemx7,elemy7)< raiop+raioelem)
  {choka7=false;}
  if(dist(peiwSx,peiwY,elemx8,elemy8)< raiop+raioelem)
  {choka8=false;}
  if(dist(peiwSx,peiwY,elemx9,elemy9)< raiop+raioelem)
  {choka9=false;}
  if(dist(peiwSx,peiwY,elemx10,elemy10)< raiop+raioelem)
  {choka10=false;}
  if(dist(peiwSx,peiwY,elemx11,elemy11)< raiop+raioelem)
  {choka11=false;}
  //----------------------------------------------------------------------
  
  ellipse(peiwNx,peiwY,2*raiop,2*raiop);
  if(dist(peiwNx,peiwY,elemx,elemy)< raiop+raioelem)
  {voda=false; }
   if(dist(peiwNx,peiwY,elemx1,elemy1)< raiop+raioelem)
  {voda1=false; }
   if(dist(peiwNx,peiwY,elemx2,elemy2)< raiop+raioelem)
  {voda2=false; }
   if(dist(peiwNx,peiwY,elemx3,elemy3)< raiop+raioelem)
  {voda3=false; }
   if(dist(peiwNx,peiwY,elemx4,elemy4)< raiop+raioelem)
  {voda4=false; }
   if(dist(peiwNx,peiwY,elemx5,elemy5)< raiop+raioelem)
  {voda5=false; }
   if(dist(peiwNx,peiwY,elemx6,elemy6)< raiop+raioelem)
  {voda6=false; }
   if(dist(peiwNx,peiwY,elemx7,elemy7)< raiop+raioelem)
  {voda7=false; }
  if(dist(peiwNx,peiwY,elemx8,elemy8)< raiop+raioelem)
  {voda8=false; }
  if(dist(peiwNx,peiwY,elemx9,elemy9)< raiop+raioelem)
  {voda9=false; }
  if(dist(peiwNx,peiwY,elemx10,elemy10)< raiop+raioelem)
  {voda10=false; }
  if(dist(peiwNx,peiwY,elemx11,elemy11)< raiop+raioelem)
  {voda11=false; }
  //----------------------------------------------------------------------
  
  //---------------------------Choque Dos Elementos-----------------------
  if((dist(elemx,elemy,elemx1,elemy1)< 2*raioelem)||
    (dist(elemx,elemy,elemx2,elemy2)< 2*raioelem)||
    (dist(elemx,elemy,elemx3,elemy3)< 2*raioelem)||
    (dist(elemx,elemy,elemx4,elemy4)< 2*raioelem)||
    (dist(elemx,elemy,elemx5,elemy5)< 2*raioelem)||
    (dist(elemx,elemy,elemx6,elemy6)< 2*raioelem)||
    (dist(elemx,elemy,elemx7,elemy7)< 2*raioelem)||
    (dist(elemx,elemy,elemx8,elemy8)< 2*raioelem)||
    (dist(elemx,elemy,elemx9,elemy9)< 2*raioelem)||
    (dist(elemx,elemy,elemx10,elemy10)< 2*raioelem)||
    (dist(elemx,elemy,elemx11,elemy11)< 2*raioelem))
     {elemx=-50; elemy=430}
  if((dist(elemx1,elemy1,elemx2,elemy2)< 2*raioelem)||
     (dist(elemx1,elemy1,elemx3,elemy3)< 2*raioelem)||
     (dist(elemx1,elemy1,elemx4,elemy4)< 2*raioelem)||
     (dist(elemx1,elemy1,elemx5,elemy5)< 2*raioelem)||
     (dist(elemx1,elemy1,elemx6,elemy6)< 2*raioelem)||
     (dist(elemx1,elemy1,elemx7,elemy7)< 2*raioelem)||
     (dist(elemx1,elemy1,elemx8,elemy8)< 2*raioelem)||
     (dist(elemx1,elemy1,elemx9,elemy9)< 2*raioelem)||
     (dist(elemx1,elemy1,elemx10,elemy10)< 2*raioelem)||
     (dist(elemx1,elemy1,elemx11,elemy11)< 2*raioelem))
    {elemx1=-50; elemy1=430}
  if((dist(elemx2,elemy2,elemx3,elemy3)< 2*raioelem)||
     (dist(elemx2,elemy2,elemx4,elemy4)< 2*raioelem)||
     (dist(elemx2,elemy2,elemx5,elemy5)< 2*raioelem)||
     (dist(elemx2,elemy2,elemx6,elemy6)< 2*raioelem)||
     (dist(elemx2,elemy2,elemx7,elemy7)< 2*raioelem)||
     (dist(elemx2,elemy2,elemx8,elemy8)< 2*raioelem)||
     (dist(elemx2,elemy2,elemx9,elemy9)< 2*raioelem)||
     (dist(elemx2,elemy2,elemx10,elemy10)< 2*raioelem)||
     (dist(elemx2,elemy2,elemx11,elemy11)< 2*raioelem))
     {elemx2=-50; elemy2=430}
   if((dist(elemx3,elemy3,elemx4,elemy4)< 2*raioelem)||
      (dist(elemx3,elemy3,elemx5,elemy5)< 2*raioelem)||
      (dist(elemx3,elemy3,elemx6,elemy6)< 2*raioelem)||
      (dist(elemx3,elemy3,elemx7,elemy7)< 2*raioelem)||
      (dist(elemx3,elemy3,elemx8,elemy8)< 2*raioelem)||
      (dist(elemx3,elemy3,elemx9,elemy9)< 2*raioelem)||
      (dist(elemx3,elemy3,elemx10,elemy10)< 2*raioelem)||
      (dist(elemx3,elemy3,elemx11,elemy11)< 2*raioelem))
     {elemx3=-50; elemy3=430;}
   if((dist(elemx4,elemy4,elemx5,elemy5)< 2*raioelem)||  
      (dist(elemx4,elemy4,elemx6,elemy6)< 2*raioelem)|| 
      (dist(elemx4,elemy4,elemx7,elemy7)< 2*raioelem)||
      (dist(elemx4,elemy4,elemx8,elemy8)< 2*raioelem)||
      (dist(elemx4,elemy4,elemx9,elemy9)< 2*raioelem)||
      (dist(elemx4,elemy4,elemx10,elemy10)< 2*raioelem)||
      (dist(elemx4,elemy4,elemx11,elemy11)< 2*raioelem))
     {elemx4=-50; elemy4=430;}
    if((dist(elemx5,elemy5,elemx6,elemy6)< 2*raioelem)|| 
      (dist(elemx5,elemy5,elemx7,elemy7)< 2*raioelem)||
      (dist(elemx5,elemy5,elemx8,elemy8)< 2*raioelem)||
      (dist(elemx5,elemy5,elemx9,elemy9)< 2*raioelem)||
      (dist(elemx5,elemy5,elemx10,elemy10)< 2*raioelem)||
      (dist(elemx5,elemy5,elemx11,elemy11)< 2*raioelem))
      {elemx5=-50; elemy5=430}
    if((dist(elemx6,elemy6,elemx7,elemy7)< 2*raioelem)||
      (dist(elemx6,elemy6,elemx8,elemy8)< 2*raioelem)||
      (dist(elemx6,elemy6,elemx9,elemy9)< 2*raioelem)||
      (dist(elemx6,elemy6,elemx10,elemy10)< 2*raioelem)||
      (dist(elemx6,elemy6,elemx11,elemy11)< 2*raioelem))
      {elemx6=-50; elemy=430;}
    if((dist(elemx7,elemy7,elemx8,elemy8)<2*raioelem)||
      (dist(elemx7,elemy7,elemx9,elemy9)< 2*raioelem)||
      (dist(elemx7,elemy7,elemx10,elemy10)< 2*raioelem)||
      (dist(elemx7,elemy7,elemx11,elemy11)< 2*raioelem))
      {elemx7=-50; elemy7=430;}
     if((dist(elemx8,elemy8,elemx9,elemy9)<2*raioelem)||
      (dist(elemx8,elemy8,elemx10,elemy10)< 2*raioelem)||
      (dist(elemx8,elemy8,elemx11,elemy11)< 2*raioelem))
      {elemx8=-50; elemy8=430;}
     if((dist(elemx9,elemy9,elemx10,elemy10)<2*raioelem)||
      (dist(elemx9,elemy9,elemx11,elemy11)< 2*raioelem))
      {elemx9=-50; elemy9=430;}
     if((dist(elemx10,elemy10,elemx11,elemy11)<2*raioelem))
      {elemx10=-50; elemy10=430;}
  //---------------------------Barra de Vida------------------------------
  if(life==3){image(barra,281,468);}
  if(life==2){image(barra1,280,468);}
  if(life==1){image(barra2,281,470);}
  if(life==0){tela=5;}
     
  
  fill(10);
   textFont(fonte);
   textSize(18);
   text('Pontuação: ',565,430);
   textSize(22);
   text(pontuacao,605,460);
   

      image(back,16,450)
if(dist(centrox3,centroy3,mouseX,mouseY)< raio){ fill(10)
    textSize(12) 
    text("Voltar", 20 ,494 );
  if (mouseIsPressed) {tela=1; life=3; pontuacao=0;}}
   
   
 }else if (tela===7){
    background(0,15,30);
    fill(240,240,0);
    textFont(fonte3)
    textSize(140) 
    text("Nível 2", elx-205 ,ely+115 ); 
    textSize(80) 
    text("Boa Sorte", elx-154 ,ely+220 ); 
    noFill();
    noStroke();
    ellipse(elx,ely,2*raioel,2*raioel)
   if(ely!=80){ely=ely-2;}
   if(ely==80) {tela=6; doutorX=646; doutorY=282; }
   
   
    image(back1,19,448)   
   if(dist(centrox3,centroy3,mouseX,mouseY)< raio){ 
    fill(240); 
    textSize(12) 
    text("Voltar", 20 ,494 );
  if (mouseIsPressed) {tela=1; life=3; pontuacao=0;}}
 } else if(tela===8){
   background(110,110,240);

   
image(cir,50,50) 
image(cir,150,50) 
image(cir,250,50) 
image(cir,350,50) 
image(cir,450,50) 
image(cir,550,50) 
image(cir,100,150) 
image(cir,200,150) 
image(cir,300,150) 
image(cir,400,150) 
image(cir,500,150)  

image(elem1,65,68)
image(elem2,166,67)
image(elem4,265,66)
image(elem5,366,66)
image(elem6,470,70)
image(elem7,565,66)
image(elem8,117,165)
image(elem9,215,165)
image(elem10,315,165)
image(elem11,415,165)
image(elem3,519,169)
noStroke();
noFill();
ellipse(82,82,48,48)
ellipse(182,82,48,48)
ellipse(282,82,48,48)
ellipse(382,82,48,48)
ellipse(482,82,48,48)
ellipse(582,82,48,48)
ellipse(132,182,48,48)
ellipse(232,182,48,48)
ellipse(332,182,48,48)
ellipse(432,182,48,48)
ellipse(532,182,48,48)
   


image(rec[que],70,220)
if(lata>0){que=0;}   
if(lata>50){que=1;}  
if(lata>100){que=2;}  
if(lata>250){que=3;}  
if(lata>300){que=4;}  
if(lata>350){que=5;}
if(lata>400){que=0; lata=0;}
lata=lata+1;

   
   
if((dist(82,82,mouseX,mouseY)<24)){
  textFont(fonte3);
  textSize(25);
  fill(1); text('MISTURA DE FARELO'+"\n"+'  DE MILHO E GRÃOS'+"\n"+'           DE MILHO',115,340)}
if((dist(182,82,mouseX,mouseY)<24)){textFont(fonte3);
  textSize(30);
  fill(1); text('        AREIA PARA'+"\n"+' CONSTRUÇÃO CIVIL',95,345)}
if((dist(282,82,mouseX,mouseY)<24)){textFont(fonte3);
  textSize(35);
  fill(1); text('ÁGUA COM'+"\n"+'    TERRA',140,355)}
if((dist(382,82,mouseX,mouseY)<24)){textFont(fonte3);
  textSize(35);
  fill(1); text('AREIA COM'+"\n"+'     FERRO',140,355)}
if((dist(482,82,mouseX,mouseY)<24)){textFont(fonte3);
  textSize(30);
  fill(1); text('   ÁGUA COM PÓ'+"\n"+' DE CAFÉ SOLÚVEL',112,355)}
if((dist(582,82,mouseX,mouseY)<24)){textFont(fonte3);
  textSize(28);
  fill(1); text('MOEDAS DE OURO E'+"\n"+' MOEDAS DE FERRO',108,355)}
if((dist(132,182,mouseX,mouseY)<24)){textFont(fonte3);
  textSize(35);
  fill(1); text('BARRIL DE'+"\n"+' PETRÓLEO',140,355)}
if((dist(232,182,mouseX,mouseY)<24)){textFont(fonte3);
  textSize(26);
  fill(1); text('MISTURA HOMOGÊNEA'+"\n"+'  DE ÁGUA E ACETONA',100,355)}
if((dist(332,182,mouseX,mouseY)<24)){textFont(fonte3);
  textSize(40);
  fill(1); text('ÁGUA DE'+"\n"+' ESGOTO',145,355)}
if((dist(432,182,mouseX,mouseY)<24)){textFont(fonte3);
  textSize(25);
  fill(1); text('MISTURA HETEROGÊNEA'+"  \n"+' DE ÁGUA, ÓLEO E AREIA',100,350)}
if((dist(532,182,mouseX,mouseY)<24)){textFont(fonte3);
  textSize(27);
  fill(1); text('MISTURA HOMOGÊNEA'+"\n"+'   DE ÁGUA COM SAL',93,357)}
   
textFont(fonte3);   
noFill();   
noStroke();
ellipse(550,430,2*raio,2*raio)   
image(im,520,400)   
 if (dist(550,430,mouseX,mouseY)< raio){ fill(240);
     
 textSize(20);                             text("Instruções", 505,490 );
  if (mouseIsPressed) { tela=3}} 
 } else if(tela===9){
   background(0,0,146);
   image(lousa,330,38)
   fill(240);
   textSize(60);
   textFont(fonte3);
   text('Peneiração',30,70)
   fill(240);
   textSize(20);
   textFont(fonte3);
   text(' A peneiração é uma operação que'+ "\n"+' consiste na separação de partículas'+ "\n"+' sólidas em frações de granulometria'+ "\n"+' diferente, por passagem através'+ "\n"+' de peneiros ou crivos.',16,120)
   text(' Pode assim separar-se por exemplo grãos maiores de outros mais'+ "\n"+' pequenos, com o auxílio de uma peneira (conhecida também como tamis).',16,350)
   
image(ft1,370,52)

   
   
   
image(elem1,35,445)   
image(elem2,115,445) 
image(elem4,195,445)    
stroke(240); 
noFill()
ellipse(50,460,50,50)  
ellipse(130,460,50,50) 
ellipse(210,460,50,50) 
noFill();
noStroke();
ellipse(550,430,2*raio,2*raio)   
image(im,520,400)   
 if (dist(550,430,mouseX,mouseY)< raio){ fill(240);
     
 textSize(20);                             text("Instruções", 505,490 );
  if (mouseIsPressed) { tela=3}}   
 } else if(tela===10){
   background(0,0,146);
   image(lousa,330,38)
   image(ft,374,56)
fill(240);
   textSize(60);
   textFont(fonte3);
   text('Flotação',48,70)
   fill(240);
   textSize(30);
   textFont(fonte3);
   text(' Flotação é um método de'+ "\n"+'  separação de misturas'+ "\n"+'   heterogêneas sólidas '+ "\n"+'              e líquidas.',16,140)
   textSize(20);
   text(' Para tanto, são inseridas bolhas de ar no líquido, nas quais um dos'+ "\n"+' elementos se adere e acaba se separando do outro elemento no qual'+ "\n"+' estava misturado.',16,330)   
   
      
image(elem10,35,445)   
image(elem11,115,445)    
stroke(240);  
noFill();
ellipse(50,460,50,50)  
ellipse(130,460,50,50)    
noFill();
noStroke();
ellipse(550,430,2*raio,2*raio)   
image(im,520,400)   
 if (dist(550,430,mouseX,mouseY)< raio){ fill(240);
     
 textSize(20);                             text("Instruções", 505,490 );
  if (mouseIsPressed) { tela=3}}    
 } else if(tela===11){
   background(0,0,146);
  image(lousa,330,38)
  image(ft2,360,58) 
   
fill(240);
   textSize(40);
   textFont(fonte3);
   text('Destilação Simples',10,70)
   fill(240);
   textSize(20);
   textFont(fonte3);
   text(' Destilação simples é um método'+ "\n"+' utilizado para separar os'+ "\n"+' componentes de uma mistura'+ "\n"+' homogênea (apresenta uma única'+ "\n"+' fase) formada por um componente'+ "\n"+' sólido dissolvido em um líquido.',16,140)
   textSize(20);
   text(' O processo de destilação é baseado na separação que ocorre através'+ "\n"+' do fenômeno de equilíbrio liquido – vapor da mistura em questão,'+ "\n"+' através da diferença de volatilidade entre os componentes da mistura.',16,330)   
   
image(elem3,38,446)   
image(elem6,118,446)    
stroke(240);  
noFill();
ellipse(50,460,50,50)  
ellipse(130,460,50,50)    
noFill();
noStroke();
ellipse(550,430,2*raio,2*raio)   
image(im,520,400)   
 if (dist(550,430,mouseX,mouseY)< raio){ fill(240);
     
 textSize(20);                             text("Instruções", 505,490 );
  if (mouseIsPressed) { tela=3}}    
 } else if(tela===12){
   background(0,0,146);
  image(lousa,330,38)
  image(ft3,350,53) 

fill(240);
   textSize(34);
   textFont(fonte3);
   text('Destilação Fracionada',5,70)
   fill(240);
   textSize(20);
   textFont(fonte3);
   text(' A destilação, de uma forma geral,'+ "\n"+' é um dos métodos mais utilizados'+ "\n"+' para separar os componentes de'+ "\n"+' misturas homogêneas que'+ "\n"+' apresentam líquido com sólido'+ "\n"+' ou apenas líquidos em sua'+ "\n"+' composição.',16,130)
   textSize(20);
   text(' A chamada destilação fracionada é utilizada exclusivamente para'+ "\n"+' separar os componentes de uma mistura que apresente dois ou mais'+ "\n"+' líquidos em sua constituição, como uma mistura de água e acetona.',16,330)   
      
   
   
image(elem9,34,444)   
image(elem8,115,445)   
stroke(240);  
noFill();
ellipse(50,460,50,50)  
ellipse(130,460,50,50)  
noFill();
noStroke();
ellipse(550,430,2*raio,2*raio)   
image(im,520,400)   
 if (dist(550,430,mouseX,mouseY)< raio){ fill(240);
     
 textSize(20);                             text("Instruções", 505,490 );
  if (mouseIsPressed) { tela=3}}    
 } else if(tela===13){
   background(0,0,146);
   image(lousa,330,38)
   image(ft4,397,78) 

fill(240);
   textSize(35);
   textFont(fonte3);
   text('Separação Magnética',5,70)
   fill(240);
   textSize(20);
   textFont(fonte3);
   text(' Separação magnética é um método'+ "\n"+' de separação de misturas utilizado'+ "\n"+' para separar um ou mais'+ "\n"+' componentes de uma mistura'+ "\n"+' heterogênea formada por sólidos.',16,135)
   textSize(20);
   text(' Vale ressaltar que pelo menos um dos componentes da mistura deve'+ "\n"+' apresentar propriedades magnéticas (pode ser atraído por um imã'+ "\n"+' ou um eletroímã).',16,330)  
   
   
   
image(elem7,35,445)   
image(elem5,115,445)    
stroke(240);  
noFill();
ellipse(50,460,50,50)  
ellipse(130,460,50,50)    
noFill();
noStroke();
ellipse(550,430,2*raio,2*raio)   
image(im,520,400)   
 if (dist(550,430,mouseX,mouseY)< raio){ fill(240);
     
 textSize(20);                             text("Instruções", 505,490 );
  if (mouseIsPressed) { tela=3}}    
 } else if(tela===14){
   background(0,0,146);

   
fill(240);   
textSize(30);
textFont(fonte3);
text('AJUDE AO QUíMICO GUIANDO-O AOS LABORATÓRIOS'+"\n"+'      CORRETOS EM QUE CADA ELEMENTO ENTREGUE'+"\n"+'       PELO CAMINHÃO DEVE, E PODE SER SEPARADO'+"\n"+'                                  CORRETAMENTE',13,90) 
text('EVITE ENTREGAR OS ELEMENTOS PARA OS'+"\n"+'LABORATÓRIOS INCORRETOS, PARA NÃO'+"\n"+'                              PERDER VIDA',85,280)   
noFill();
noStroke();
ellipse(550,430,2*raio,2*raio)   
image(im,520,400)   
 if (dist(550,430,mouseX,mouseY)< raio){ fill(240);

textSize(20);                             text("Instruções", 505,490 );
  if (mouseIsPressed) { tela=3}}   
 }
}