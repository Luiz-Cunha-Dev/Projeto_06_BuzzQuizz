const tela1 = document.querySelector('.tela1');
const tela2 = document.querySelector('.tela2');
const tela3 = document.querySelector('.tela3');

const banner = document.querySelector('.banner');
const listaQuadros = document.querySelector('.lista-de-quadros');
const janelaPrimeiroQuizz = document.querySelector('.janela-criar-primeiro-quizz');
const janelaSeusQuizzes = document.querySelector('.janela-seus-quizzes');
const janelaTodosQuizzes = document.querySelector('.janela-todos-os-quizzes');
const caixaDeResultado = document.querySelector('.caixa-de-resultado-do-quizz');
const botoesFinais = document.querySelector('.botoes-finais');
const quadroTodosOsQuizzes = document.querySelector('.janela-todos-os-quizzes .quadro-de-quizzes');

let listaQuizzesServidor;
let quizz;


function abrirQuizz(){
tela1.classList.add('hidden');
tela2.classList.remove('hidden');
}

function importarQuizzes(){
    const promesaQuizzesServidor = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes');
    promesaQuizzesServidor.then(sucessoEmImportarQuizzes);
    promesaQuizzesServidor.catch(erroEmImportarQuizzes)
}
importarQuizzes()

function sucessoEmImportarQuizzes(resposta){
    console.log(resposta);
    listaQuizzesServidor = resposta.data;
    renderizarTodosOsQuizzes(listaQuizzesServidor);
}

function erroEmImportarQuizzes(resposta){
    console.log(resposta);
}


function renderizarTodosOsQuizzes(listaQuizzes){
    quadroTodosOsQuizzes.innerHTML = "";

    for(let i = 0; i < listaQuizzes.length; i++){
        quizz = 
        `
        <div class="quizz" onclick="abrirQuizz()">
        <img src="${listaQuizzes[i].image}">
        <div class="nome-quizz">${listaQuizzes[i].title}</div>
        </div>
        `;
        
        quadroTodosOsQuizzes.innerHTML += quizz;
    }



}
