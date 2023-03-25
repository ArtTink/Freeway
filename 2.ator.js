// Código do Ator

let xAtor = 120
let yAtor = 368;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemAtor, xAtor, yAtor, 27, 27)
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3
  }
  if (keyIsDown(DOWN_ARROW)){
    
    if(naoSaiParaFora()){
      yAtor += 3
    }
  }
}

function verificaColisao(){
  for( let i = 0; i < imagemCarros.length; i = i + 1){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor,yAtor, 13);
  if(colisao){
      somColisao.play();
      voltaAtorParaPosicaoInicial();
      if (pontosMaiorQueZero()){
        meusPontos -= 1;
      }
    }
  }
}

function voltaAtorParaPosicaoInicial(){
  yAtor = 368;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60))
  text(meusPontos, width / 2, 27);
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    somPonto.play();
    voltaAtorParaPosicaoInicial();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function naoSaiParaFora(){
  return yAtor < 366; 
}

