const caixaDeResultado = document.querySelector('.caixa-de-resultado-do-quizz');
const botoesFinais = document.querySelector('.botoes-finais');

let opcoesResposta;
let listaDeRespostas;
let contadorDePerguntasRespondidas = 0;
let contadorDeAcertos = 0;
let porcentagem = 0;
let score = 0;
let valorReferencia = 0;
let imagemFinal;
let textoFinal;
let tituloFinal;

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

    if(resposta.className === "resposta alternativa-certa"){
        contadorDeAcertos++

    }

    if(contadorDePerguntasRespondidas === numeroDePerguntas){
        porcentagem = (contadorDeAcertos/numeroDePerguntas)*100;
        score = Math.round(porcentagem);
        console.log(levels);

        for(let i = 0; i < levels.length; i++){

            if(valorReferencia === 0 && i < 1){
                valorReferencia = score - levels[i].minValue;

                imagemFinal = levels[i].image;
                textoFinal = levels[i].text;
                tituloFinal = levels[i].title;

            }else if((score - levels[i].minValue) < valorReferencia && (score - levels[i].minValue) >= 0){
                valorReferencia = score - levels[i].minValue;

                imagemFinal = levels[i].image;
                textoFinal = levels[i].text;
                tituloFinal = levels[i].title;

            }
        }
        let caixaDeResultado = 
        `<div class="caixa-de-resultado-do-quizz">
            <div class="pontuacao"><span>${score}% de acerto: ${tituloFinal}</span></div>
            <div class="resultado">
                <img src="${imagemFinal}">
                <p>${textoFinal}</p>
            </div>
        </div>
        `;

        let botoesFinais =
        `<div class="botoes-finais">
                <button class="reiniciar-quizz" onclick="reiniciarQuizz()">Reiniciar Quizz</button>
                <button class="voltar-pra-home" onclick="voltarPraHome()">Voltar pra home</button>
        </div>
        `;

        listaQuadros.innerHTML += caixaDeResultado;
        listaQuadros.innerHTML += botoesFinais;
    }

}

function voltarPraHome(){
    window.location.reload();
}

function reiniciarQuizz(){
    listaQuadros.innerHTML = "";
    contadorDePerguntasRespondidas = 0;
    contadorDeAcertos = 0;
    valorReferencia = 0;
    abrirQuizz(ultimoQuizzAberto);
}