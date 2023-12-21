let resultado = 0;
let termo = '';
let operando = '';

const algarismos = document.querySelectorAll('.numeros li');
const operacoes = document.querySelectorAll('.operacoes li');
const btLimpar = document.getElementById('limparResultado');
const btResultado = document.getElementById('exibirResultado');

for(const algarismo of algarismos){
    algarismo.addEventListener('click', (ev) => {
        termo += ev.target.textContent
        exibirResultado(termo);
    })
}

btLimpar.addEventListener('click', limpeza);
btLimpar.addEventListener('dblclick', limpezaProdunda);

/**
 * função que pega o valor da variável resultado ou o equivalente passado e atribuí ao parágrafo com a classe resultado.
 */
function exibirResultado(valor){
    if(!valor){
        document.querySelector('.resultado').innerHTML = resultado;
    }else{
        document.querySelector('.resultado').innerHTML = valor;
    }
    /*let conteudo = document.querySelector('.resultado').textContent;
    console.log(conteudo);*/
}

/**
 * Realiza a limpeza do visor e do termo
 */
function limpeza(){
    termo = '';
    exibirResultado(0);
}

/**
 * Realiza a limpeza do visor, termo, operando e do resultado.
 */
function limpezaProdunda(){
    termo = '';
    operando = '';
    resultado = 0;
    exibirResultado(0);
}

exibirResultado();

