//Imagens do jogo

//load de imagens
let imagemEstrada;
let imagemAtor;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;

let somTrilha;
let somPonto;
let somColisao;

function preload(){
  imagemEstrada = loadImage("imagens/estrada.png");
  imagemAtor = loadImage("imagens/ator-1.png");
  imagemCarro1 = loadImage("imagens/carro-1.png");
  imagemCarro2 = loadImage("imagens/carro-2.png");
  imagemCarro3 = loadImage("imagens/carro-3.png");
  imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro1, imagemCarro2, imagemCarro3];
  
  somTrilha = loadSound('Som/trilha.mp3');
  somPonto = loadSound('Som/ponto.mp3');
  somColisao = loadSound('Som/raquetada.mp3');
}
