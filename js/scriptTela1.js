const tela1 = document.querySelector('.tela1');
const tela2 = document.querySelector('.tela2');
const tela3 = document.querySelector('.tela3');
const telaLoading = document.querySelector('.tela-de-loading');

const banner = document.querySelector('.banner');
const listaQuadros = document.querySelector('.lista-de-quadros');
const janelaPrimeiroQuizz = document.querySelector('.janela-criar-primeiro-quizz');
const janelaSeusQuizzes = document.querySelector('.janela-seus-quizzes');
const janelaTodosQuizzes = document.querySelector('.janela-todos-os-quizzes');
const quadroTodosOsQuizzes = document.querySelector('.janela-todos-os-quizzes .quadro-de-quizzes');


let listaQuizzesServidor;
let quizz;
let imgENomeBanner;
let quadroDePergunta;
let respostasEmbaralhadas;
let numeroDePerguntas;
let levels;
let ultimoQuizzAberto;


function importarQuizzes(){
    const promesaQuizzesServidor = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes');
    promesaQuizzesServidor.then(sucessoEmImportarQuizzes);
    promesaQuizzesServidor.catch(erroEmImportarQuizzes)

    tela1.classList.add('hidden');
    telaLoading.classList.remove('hidden');
}
importarQuizzes()



function sucessoEmImportarQuizzes(resposta){
    console.log(resposta);
    listaQuizzesServidor = resposta.data;
    renderizarTodosOsQuizzes(listaQuizzesServidor);
    tela1.classList.remove('hidden');
    telaLoading.classList.add('hidden');
}



function erroEmImportarQuizzes(resposta){
    console.log(resposta);
    tela1.classList.remove('hidden');
    telaLoading.classList.add('hidden');
    alert('Erro ao carregar lista de quizzes');
    importarQuizzes();
}






function abrirQuizz(idSelecionado){

    ultimoQuizzAberto = idSelecionado;

    for(let i = 0; i < listaQuizzesServidor.length; i++){
        if(listaQuizzesServidor[i].id == idSelecionado){

            levels = listaQuizzesServidor[i].levels;

        banner.innerHTML = "";
        imgENomeBanner = 
        `<img src="${listaQuizzesServidor[i].image}">
         <div class="nome-banner">${listaQuizzesServidor[i].title}</div>
        `;

        banner.innerHTML += imgENomeBanner;


        numeroDePerguntas = listaQuizzesServidor[i].questions.length;

        for(let c = 0; c < numeroDePerguntas; c++){

            respostasEmbaralhadas = (listaQuizzesServidor[i].questions[c].answers).sort(comparador);

            if(listaQuizzesServidor[i].questions[c].answers.length === 2){

                quadroDePergunta= 
                `<div class="quadro-pergunta">
                <div class="pergunta" style="background-color:${listaQuizzesServidor[i].questions[c].color};" data-identifier="question"><span>${listaQuizzesServidor[i].questions[c].title}</span></div>
                    <div class="opcoes-resposta">
                        <div data-identifier="answer" class="resposta" id="${respostasEmbaralhadas[0].isCorrectAnswer}" onclick="selecionarResposta(this, 0)">
                            <img src="${respostasEmbaralhadas[0].image}">
                            <p>${respostasEmbaralhadas[0].text}</p>
                        </div>
                        <div data-identifier="answer" class="resposta" id="${respostasEmbaralhadas[1].isCorrectAnswer}" onclick="selecionarResposta(this, 1)">
                            <img src="${respostasEmbaralhadas[1].image}">
                            <p>${respostasEmbaralhadas[1].text}</p>
                        </div>
                    </div>
                </div>
                
                `;

                listaQuadros.innerHTML += quadroDePergunta;

            }else if(listaQuizzesServidor[i].questions[c].answers.length === 3){

                quadroDePergunta= 
                `<div class="quadro-pergunta">
                <div class="pergunta" style="background-color:${listaQuizzesServidor[i].questions[c].color};" data-identifier="question"><span>${listaQuizzesServidor[i].questions[c].title}</span></div>
                    <div class="opcoes-resposta">
                        <div data-identifier="answer" class="resposta" id="${respostasEmbaralhadas[0].isCorrectAnswer}" onclick="selecionarResposta(this, 0)">
                            <img src="${respostasEmbaralhadas[0].image}">
                            <p>${respostasEmbaralhadas[0].text}</p>
                        </div>
                        <div data-identifier="answer" class="resposta" id="${respostasEmbaralhadas[1].isCorrectAnswer}" onclick="selecionarResposta(this, 1)">
                            <img src="${respostasEmbaralhadas[1].image}">
                            <p>${respostasEmbaralhadas[1].text}</p>
                        </div>
                        <div data-identifier="answer" class="resposta" id="${respostasEmbaralhadas[2].isCorrectAnswer}" onclick="selecionarResposta(this,2)">
                            <img src="${respostasEmbaralhadas[2].image}">
                            <p>${respostasEmbaralhadas[2].text}</p>
                        </div>
                    </div>
                </div>
                
                `;

                listaQuadros.innerHTML += quadroDePergunta;
                
            }else if(listaQuizzesServidor[i].questions[c].answers.length === 4){

                quadroDePergunta= 
            `<div class="quadro-pergunta">
            <div class="pergunta" style="background-color:${listaQuizzesServidor[i].questions[c].color};" data-identifier="question"><span>${listaQuizzesServidor[i].questions[c].title}</span></div>
                <div class="opcoes-resposta">
                    <div class="resposta" id="${respostasEmbaralhadas[0].isCorrectAnswer}" onclick="selecionarResposta(this, 0)">
                        <img src="${respostasEmbaralhadas[0].image}">
                        <p>${respostasEmbaralhadas[0].text}</p>
                    </div>
                    <div class="resposta" id="${respostasEmbaralhadas[1].isCorrectAnswer}" onclick="selecionarResposta(this, 1)">
                        <img src="${respostasEmbaralhadas[1].image}">
                        <p>${respostasEmbaralhadas[1].text}</p>
                    </div>
                    <div class="resposta" id="${respostasEmbaralhadas[2].isCorrectAnswer}" onclick="selecionarResposta(this, 2)">
                        <img src="${respostasEmbaralhadas[2].image}">
                        <p>${respostasEmbaralhadas[2].text}</p>
                    </div>
                    <div class="resposta" id="${respostasEmbaralhadas[3].isCorrectAnswer}" onclick="selecionarResposta(this, 3)">
                        <img src="${respostasEmbaralhadas[3].image}">
                        <p>${respostasEmbaralhadas[3].text}</p>
                    </div>
                </div>
            </div>
            
            `;

            listaQuadros.innerHTML += quadroDePergunta;

            }

        }


        }

        
    }


    tela1.classList.add('hidden');
    telaLoading.classList.remove('hidden');
    setTimeout(CarregarEAbrirQuizz, 1000);
}

function CarregarEAbrirQuizz(){
    telaLoading.classList.add('hidden');
    tela2.classList.remove('hidden');
    window. scrollTo(0,0);
}

const armazenado = localStorage.getItem('quizzesCriados');
const arrayLocal = JSON.parse(armazenado);

function renderizarTodosOsQuizzes(listaQuizzes){
    quadroTodosOsQuizzes.innerHTML = "";

    const listaFiltrada = listaQuizzes.filter(filtroUser);

    for(let i = 0; i < listaFiltrada.length; i++){
        quizz = 
        `
        <div class="quizz" onclick="abrirQuizz(this.id)" id="${listaFiltrada[i].id}" data-identifier="quizz-card" style="background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 64.58%, #000000 100%), url(${listaFiltrada[i].image});  background-repeat: no-repeat; background-size: 100% 100%;">
        <div class="nome-quizz">${listaFiltrada[i].title}</div>
        </div>
        `;
        
        quadroTodosOsQuizzes.innerHTML += quizz;
    }
}

function filtroUser(lista) {
    return !arrayLocal.includes(lista.id);
}


function comparador() { 
	return Math.random() - 0.5; 
}