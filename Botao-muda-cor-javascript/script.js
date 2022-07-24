var cor = document.querySelector('button');
var texto = document.querySelector('p');

cor.addEventListener('click', mudaCor);

function mudaCor(){
  if(texto.style.color == "blue"){
    texto.style.color = "black";
    texto.textContent = 'texto muda para azul!'
  } else{
    texto.style.color = "blue";
    texto.textContent = 'texto muda para preto!'
  }
    
}