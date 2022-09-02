function criarQuizz(){

    tela1.classList.add('hidden');
    tela3.classList.remove('hidden');
}

let titulo;
let urlImagem;
let perguntas;
let niveis;

let quizzObj = {
    title: '',
    image: '',
    questions: [],
    levels: []
}

function criarFase2() {
    titulo = document.getElementById('titulo').value;
    urlImagem = document.getElementById('URL').value;
    perguntas = document.getElementById('perguntas').value;
    niveis = document.getElementById('niveis').value;

    if (validarTitulo(titulo) && validarURL(urlImagem) && validarPerguntas(perguntas) && validarNiveis(niveis)){
        const fase1 = document.querySelector('.quizInfo');
        fase1.classList.add('hidden');
        quizzObj = {
            title: titulo,
            image: urlImagem,
            questions: [],
            levels: []
        }
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
    if (num < min) {
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

function editarNivel(elemento) {
    elemento.classList.add('hidden');
    const inicioDiv = elemento.parentNode.parentNode;
    const abreDiv = inicioDiv.querySelector('.nivel-corpo');
    abreDiv.classList.remove('hidden');
}

function criarFase3() {
    const cjtPerguntas = document.querySelectorAll('.criar-pergunta');
    let quest = {
        title: '',
        color: '',
        answers: []
    }
    let verificador = 0;
    quizzObj.questions= [];

    for (let i = 0; i < cjtPerguntas.length; i++){
        let titulo = cjtPerguntas[i].querySelector('input:nth-child(1)').value;
        let cor = cjtPerguntas[i].querySelector('input:nth-child(2)').value;
        if (validaTituloPergunta(titulo) && validarHexa(cor)){
            quest = {
                title: titulo,
                color: cor,
                answers: []
            }
        } else {
            alert('Preencha os campos corretamente');
            verificador++;
        }

        let respCerta = cjtPerguntas[i].querySelector('.resposta-certa');
        let textCerto = respCerta.querySelector('input:nth-child(2)').value;
        let imgCerta = respCerta.querySelector('input:nth-child(3)').value;
        if (validaResposta(textCerto) && validarURL(imgCerta)){
            let objCerto = {
                text: textCerto,
                image: imgCerta,
                isCorrectAnswer: true
            }
            quest.answers.push(objCerto);
        } else {
            alert('Preencha os dados corretamente');
            verificador++;
        }

        let respsErradas = cjtPerguntas[i].querySelectorAll('.resp');
        for (let j = 0; j < respsErradas.length; j++){
            let txtErrado = respsErradas[j].querySelector('input:nth-child(1)').value;
            let imgErrada = respsErradas[j].querySelector('input:nth-child(2)').value;
            if(j === 0 && validaResposta(txtErrado) && validarURL(imgErrada)){
                let objErrado = {
                    text: txtErrado,
                    image: imgErrada,
                    isCorrectAnswer: false
                }
                quest.answers.push(objErrado);
            } else if (j === 0 && !validaResposta(txtErrado)){
                alert('Preencha os dados corretamente');
                verificador++;
            } else if (j !== 0 && txtErrado !== ''){
                let objErrado = {
                    text: txtErrado,
                    image: imgErrada,
                    isCorrectAnswer: false
                }
                quest.answers.push(objErrado);
            }
        }

        quizzObj.questions.push(quest);

    }
    console.log(quizzObj);
    if (verificador === 0) {
        renderizaFase3();
    }
}

function renderizaFase3(){
    const fase2 = document.querySelector('.perguntasQuizz');
    fase2.classList.add('hidden');

    const fase3 = document.querySelector('.niveisQuizz');
    fase3.classList.remove('hidden');

    const lista = document.querySelector('.conjunto-niveis');
    lista.innerHTML = '';

    for (let i = 0; i < niveis; i++) {
        lista.innerHTML += `
        <div class="criar-nivel">
            <div class="nivel-header">
                <h1>Nível ${i+1}</h1>
                <img src="imgs/editar.png" onclick="editarNivel(this)" alt="">
            </div>
            <div class="nivel-corpo hidden">
                <input type="text" name="" id="" placeholder="Título do nível">
                <input type="number" name="" id="" placeholder="% de acerto mínima">
                <input type="url" name="" id="" placeholder="URL da imagem do nível">
                <input type="text" name="" id="desc-nivel" placeholder="Descrição do nível">
            </div>
        </div>
        `
    }
}

function finalizaQuizz() {
    const cjtNiveis = document.querySelectorAll('.nivel-corpo');
    quizzObj.levels = [];

    let nivel = {
        title: "",
        image: "",
        text: "",
        minValue: 0
    }

    for (let i = 0; i < cjtNiveis.length; i++){
        let titulo = cjtNiveis[i].querySelector('input:nth-child(1)').value;
        let img = cjtNiveis[i].querySelector('input:nth-child(3)').value;
        let txt = cjtNiveis[i].querySelector('input:nth-child(4)').value;
        let minValor = cjtNiveis[i].querySelector('input:nth-child(2)').value;

        if (validaTituloNivel(titulo) && validarURL(img) && validarDesc(txt) && validaPercent(minValor)){
            nivel = {
                title: titulo,
                image: img,
                text: txt,
                minValue: minValor
            }
            quizzObj.levels.push(nivel);
        } else {
            alert('Preencha os campos corretamente');
        }
    }
}

function validaTituloNivel(str) {
    let min = 10;
    if (str.length < min) {
        return false;
    } else {
        return true;
    }
}

function validarDesc(str) {
    let min = 30;
    if (str.length < min) {
        return false
    } else {
        return true
    }
}

function validaPercent(num) {
    let min = 0;
    let max = 100;
    if (num < min || num > max) {
        return false;
    } else {
        return true;
    }
}

function validaTituloPergunta(str) {
    const min = 20;
    if (str.length < min) {
        return false;
    } else {
        return true;
    }
}

function validarHexa(str) {
    const min = 7;
    if (str.length < min && str.charAt(0) !== '#'){
        return false
    } else {
        return true
    }
}

function validaResposta(str) {
    const vazio = '';
    if (str === vazio) {
        return false;
    } else {
        return true;
    }
}