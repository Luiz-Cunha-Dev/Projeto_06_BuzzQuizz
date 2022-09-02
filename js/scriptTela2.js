const caixaDeResultado = document.querySelector('.caixa-de-resultado-do-quizz');
const botoesFinais = document.querySelector('.botoes-finais');

let opcoesResposta;
let listaDeRespostas;
let contadorDePerguntasRespondidas = 0;
let contadorDeAcertos = 0;
let porcentagem = 0;
let score = 0;

function selecionarResposta(resposta, numero){

    opcoesResposta = resposta.parentNode;
    listaDeRespostas = opcoesResposta.querySelectorAll('.resposta');
    
    for(let i = 0; i < listaDeRespostas.length; i++){

    listaDeRespostas[i].classList.add('esbranquicado');
    listaDeRespostas[i].onclick = "";

    if(listaDeRespostas[i].id === 'false'){
        listaDeRespostas[i].classList.add('alternativa-errada');
    }else{
        listaDeRespostas[i].classList.add('alternativa-certa')
    }

    listaDeRespostas[numero].classList.remove('esbranquicado');

}

    contadorDePerguntasRespondidas++

    if(resposta.className === "resposta"){
        contadorDeAcertos++

    }

    if(contadorDePerguntasRespondidas === numeroDePerguntas){
        porcentagem = (contadorDeAcertos/numeroDePerguntas)*100;
        score = Math.round(porcentagem);

        let caixaDeResultado = 
        `<div class="caixa-de-resultado-do-quizz">
            <div class="pontuacao"><span>88% de acerto: Você é praticamente um aluno de Hogwarts!</span></div>
            <div class="resultado">
                <img src="imgs/image 10.png">
                <p>Parabéns Potterhead! Bem-vindx a Hogwarts, aproveite o loop infinito de comida e clique no botão abaixo para usar o vira-tempo e reiniciar este teste.</p>
            </div>
        </div>
        `;

        let botoesFinais =
        `<div class="botoes-finais">
                <button class="reiniciar-quizz">Reiniciar Quizz</button>
                <button class="voltar-pra-home">Voltar pra home</button>
        </div>
        `;

        listaQuadros.innerHTML += caixaDeResultado;
        listaQuadros.innerHTML += botoesFinais;
    }

}
