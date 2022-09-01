function criarQuizz(){
    const tela1 = document.querySelector('.tela1');
    const criaQuizz = document.querySelector('.criarQuizz');

    tela1.classList.add('hidden');
    criaQuizz.classList.remove('hidden');

}

let titulo;
let urlImagem;
let perguntas;
let niveis;

function criarFase2() {
    titulo = document.getElementById('titulo').value;
    urlImagem = document.getElementById('URL').value;
    perguntas = document.getElementById('perguntas').value;
    niveis = document.getElementById('niveis').value;

    if (validarTitulo(titulo) && validarURL(urlImagem) && validarPerguntas(perguntas) && validarNiveis(niveis)){
        const fase1 = document.querySelector('.quizInfo');
        fase1.classList.add('hidden');
    } else {
        alert('Preencha os campos corretamente!');
    }

}

function validarTitulo(str){
    const min = 20;
    const max = 65;
    if ((str.length < min) || (str.length > max)) {
        return false;
    } else {
        return true;
    }
}

function validarURL(str){
    try {
        const url = new URL (str);
        return true;
    } catch(erro) {
        return false;
    }

}

function validarPerguntas(num) {
    const min = 3;
    if (num < min) {
        return false;
    } else {
        return true;
    }
}

function validarNiveis(num) {
    const min = 2;
    if (num < 2) {
        return false;
    } else {
        return true;
    }
}