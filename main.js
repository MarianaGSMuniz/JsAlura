function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla ');

let contador = 0;

for (let contador = 0; contador < listaDeTeclas.length) {

    const instrumento = tecla.classList[1];
    const tecla = listaDeTeclas[contador]
    const idAudio = '#som_${instrumento}';

    tecla.onclick = function() {
        tocaSom(idAudio);
    }

}