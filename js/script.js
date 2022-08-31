const banner = document.querySelector('.banner');
const listaQuadros = document.querySelector('.lista-de-quadros');
const janelaPrimeiroQuizz = document.querySelector('.janela-criar-primeiro-quizz');
const janelaSeusQuizzes = document.querySelector('.janela-seus-quizzes');
const janelaTodosQuizzes = document.querySelector('.janela-todos-os-quizzes');
const caixaDeResultado = document.querySelector('.caixa-de-resultado-do-quizz');
const botoesFinais = document.querySelector('.botoes-finais');

function abrirQuizz(){
if(janelaPrimeiroQuizz.className === 'janela-criar-primeiro-quizz'){
    janelaPrimeiroQuizz.classList.add('hidden');
}

caixaDeResultado.classList.remove('hidden');
botoesFinais.classList.remove('hidden');
janelaSeusQuizzes.classList.add('hidden');
janelaTodosQuizzes.classList.add('hidden');
banner.classList.remove('hidden');
listaQuadros.classList.remove('hidden');

}