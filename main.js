function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll ('.tecla');

let contador = 0;

while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    const instrumento = listaDeTeclas[contador].classList[1];
    const idAudio =`#som_${instrumento}`;
    
    //console.log(idAudio);

    tecla.onclick = function () {
        tocaSom();
    }

    contador = contador + 1;

    console.log(contador);
} 

