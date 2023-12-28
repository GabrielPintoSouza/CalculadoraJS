let resultado = 0;
let termo = '';
let operando = '';

const algarismos = document.querySelectorAll('.numeros li');
const operacoes = document.querySelectorAll('.operacoes li');
const btLimpar = document.getElementById('limparResultado');
const btResultado = document.getElementById('exibirResultado');

for (const algarismo of algarismos) {
    algarismo.addEventListener('click', (ev) => {
        termo += ev.target.textContent;
        exibirNoVisor(termo);
    })
}

for (const operador of operacoes) {
    operador.addEventListener('click', (ev) => {
        if (operando == '' && resultado == 0) {
            operando = ev.target.textContent;
            resultado = Number(termo);
            termo = '';
            // console.log(operando);
            // console.log(resultado);
            // console.log(termo);
        } else if (operando == '' && resultado != 0) {
            //console.log('testando');
            operando = ev.target.textContent;
        } else if (operando == '*' && termo == '' && ev.target.textContent == '-') {
            termo = '-';
        }else {
            let termo1 = resultado;

            if (termo != '') {
                calcularExpressao();
                registraCalculoNoHistorico(termo1, termo, operando);
            }

            operando = ev.target.textContent;
            termo = '';
        }
    })
}

btLimpar.addEventListener('dblclick', limpezaProdunda);
btLimpar.addEventListener('click', limpeza);


btResultado.addEventListener('click', () => {
    let termo1 = resultado;

    if(operando !='' && termo != ''){
        calcularExpressao();
        registraCalculoNoHistorico(termo1, termo, operando);
    }
    

    termo = '';
    //operando = '';
    //console.log(operando);
    //console.log(resultado);

});

/**
 * função que pega o valor da variável resultado ou o equivalente passado e atribuí ao parágrafo com a classe resultado.
 */
function exibirNoVisor(valor = resultado) {
   
        document.querySelector('.resultado').innerHTML = valor;
    /*let conteudo = document.querySelector('.resultado').textContent;
    console.log(conteudo);*/
}

/**
 * Realiza a limpeza do visor e do termo
 */
function limpeza() {
    termo = '';
    exibirNoVisor(0);
    //console.log("limpeza simples");
}

/**
 * Realiza a limpeza do visor, termo, operando e do resultado.
 */
function limpezaProdunda() {
    termo = '';
    operando = '';
    resultado = 0;
    exibirNoVisor();
    //console.log("limpeza profunda");
}

/**
 * Usa as informações presentes no termo, resultado e operando para realizar o cálculo solicitado.
 */
function calcularExpressao() {
    switch (operando) {
        case '+':
            resultado += Number(termo);
            resultado = Number(resultado.toFixed(10));//Limitação da quantidade de casas decimais calculadas
            break;

        case '-':
            resultado -= Number(termo);
            resultado = Number(resultado.toFixed(10));
            break;

        case '*':
            resultado *= Number(termo);
            resultado = Number(resultado.toFixed(10));
            break;

        case '/':
            resultado /= Number(termo);
            resultado = Number(resultado.toFixed(10));
            break;

        default:
            break;
    }

    exibirNoVisor();
}

/**
 * Cria uma li para ser exibida no rodapé da página
 * @param {*} termo1 resultado antes de ser modificado
 * @param {*} termo2 termo
 * @param {*} operador operando
 */
function registraCalculoNoHistorico(termo1, termo2, operador) {
    const historico = document.querySelector('.historico');
    const li = document.createElement('li');

    li.textContent = `${termo1} ${operador} ${termo2} = ${resultado}`;

    historico.insertBefore(li, historico.firstChild);
}

exibirNoVisor();

