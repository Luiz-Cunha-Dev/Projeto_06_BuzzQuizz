function criarQuizz(){

    tela1.classList.add('hidden');
    tela3.classList.remove('hidden');
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
        renderizaFase2();
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

function renderizaFase2(){
    const fase2 = document.querySelector('.perguntasQuizz');
    fase2.classList.remove('hidden');

    const lista = document.querySelector('.conjunto-perguntas');
    lista.innerHTML = '';

    for (let i = 0; i < perguntas; i++){
        lista.innerHTML += `
        <div class="criar-pergunta"> <!--Começo da pergunta-->
                    <div class="pergunta-header">
                        <h1>Pergunta ${i+1}</h1>
                        <img src="imgs/editar.png" onclick="editar(this)" alt="">
                    </div>
                    <div class="pergunta-corpo hidden">
                        <input type="text" name="pergunta-text" id="" placeholder="Texto da pergunta">
                        <input type="text" name="pergunta-color" id="" placeholder="Cor de fundo da pergunta">
                        <div class="resposta-certa">
                            <h1>Resposta correta</h1>
                            <input type="text" name="correta" id="" placeholder="Resposta correta">
                            <input type="url" name="url-correta" id="" placeholder="URL da imagem">
                        </div>
                        <div class="respostas-erradas">
                            <h1>Respostas incorretas</h1>
                            <div class="resp">
                                <input type="text" name="resp1" id="" placeholder="Resposta incorreta 1">
                                <input type="url" name="resp1img" id="" placeholder="URL da imagem 1">
                            </div>
                            <div class="resp">
                                <input type="text" name="resp2" id="" placeholder="Resposta incorreta 2">
                                <input type="url" name="resp2img" id="" placeholder="URL da imagem 2">
                            </div>
                            <div class="resp">
                                <input type="text" name="resp3" id="" placeholder="Resposta incorreta 3">
                                <input type="url" name="resp3img" id="" placeholder="URL da imagem 3">
                            </div>
                        </div>
                    </div>
                </div>
        `
    }

}

function editar(elemento) {
    elemento.classList.add('hidden');
    const inicioDiv = elemento.parentNode.parentNode;
    const abreDiv = inicioDiv.querySelector('.pergunta-corpo');
    abreDiv.classList.remove('hidden');
}