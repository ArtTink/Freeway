
function setup() {
  createCanvas(500, 400);
  somTrilha.loop();
}

function draw() {
  background(imagemEstrada);
  mostraAtor();
  movimentaAtor();
  mostraCarro();
  movimentaCarro();
  voltaCarroInicio();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}








