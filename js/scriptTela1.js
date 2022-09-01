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
let imgENomeBanner;
let quadroDePergunta;
let respostasEmbaralhadas;


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






function abrirQuizz(idSelecionado){
    console.log(idSelecionado);

    for(let i = 0; i < listaQuizzesServidor.length; i++){
        if(listaQuizzesServidor[i].id == idSelecionado){

        banner.innerHTML = "";
        imgENomeBanner = 
        `<img src="${listaQuizzesServidor[i].image}">
         <div class="nome-banner">${listaQuizzesServidor[i].title}</div>
        `;

        banner.innerHTML += imgENomeBanner;

        for(let c = 0; c < listaQuizzesServidor[i].questions.length; c++){

            respostasEmbaralhadas = (listaQuizzesServidor[i].questions[c].answers).sort(comparador);

            if(listaQuizzesServidor[i].questions[c].answers.length === 2){

                quadroDePergunta= 
                `<div class="quadro-pergunta">
                <div class="pergunta"><span>${listaQuizzesServidor[i].questions[c].title}</span></div>
                    <div class="opcoes-resposta">
                        <div class="resposta">
                            <img src="${respostasEmbaralhadas[0].image}">
                            <p>${respostasEmbaralhadas[0].text}</p>
                        </div>
                        <div class="resposta">
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
                <div class="pergunta"><span>${listaQuizzesServidor[i].questions[c].title}</span></div>
                    <div class="opcoes-resposta">
                        <div class="resposta">
                            <img src="${respostasEmbaralhadas[0][0].image}">
                            <p>${respostasEmbaralhadas[0].text}</p>
                        </div>
                        <div class="resposta">
                            <img src="${respostasEmbaralhadas[1].image}">
                            <p>${respostasEmbaralhadas[1].text}</p>
                        </div>
                        <div class="resposta">
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
            <div class="pergunta"><span>${listaQuizzesServidor[i].questions[c].title}</span></div>
                <div class="opcoes-resposta">
                    <div class="resposta">
                        <img src="${respostasEmbaralhadas[0].image}">
                        <p>${respostasEmbaralhadas[0].text}</p>
                    </div>
                    <div class="resposta">
                        <img src="${respostasEmbaralhadas[1].image}">
                        <p>${respostasEmbaralhadas[1].text}</p>
                    </div>
                    <div class="resposta">
                        <img src="${respostasEmbaralhadas[2].image}">
                        <p>${respostasEmbaralhadas[2].text}</p>
                    </div>
                    <div class="resposta">
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
    tela2.classList.remove('hidden');

}



function renderizarTodosOsQuizzes(listaQuizzes){
    quadroTodosOsQuizzes.innerHTML = "";

    for(let i = 0; i < listaQuizzes.length; i++){
        quizz = 
        `
        <div class="quizz" onclick="abrirQuizz(this.id)" id="${listaQuizzes[i].id}">
        <img src="${listaQuizzes[i].image}">
        <div class="nome-quizz">${listaQuizzes[i].title}</div>
        </div>
        `;
        
        quadroTodosOsQuizzes.innerHTML += quizz;
    }
}


function comparador() { 
	return Math.random() - 0.5; 
}