
//Código do carro

let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [42, 98, 154, 210, 270, 318];
let velocidadeCarros = [2, 2.5, 5.8, 5, 3.3, 2.8];
let comprimentoCarro = 50;
let alturaCarro = 35;

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i = i + 1){
    image(imagemCarros[i],xCarros[i], yCarros[i], comprimentoCarro, alturaCarro)
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i = i + 1){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaCarroInicio(){
  for (let i = 0; i < imagemCarros.length; i = i + 1){
  if (passouDaTela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function passouDaTela(xCarros){
  return xCarros < -50
}



