//Let sempre para criar uma variavel e armazenar na memoria
//Quando criar uma variavel para manipulação do HTML, utilizar document.querySelector
//innerHTML = Dentro do HTML
//Return = Retornar valor a variavel
// Comandos entre [], são criados para declarar Listas dentro do Java Script.

let numSorted = [];
let numLimit = 10;
let numSecret = numAleatorio();
let trys = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag, texto);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

showMenssageInitial();

function showMenssageInitial() {
    exibirTextoNaTela('h1', 'RAFA GAMES');
    exibirTextoNaTela('p', 'Insira um Número entre 1 e 10');
}

//Criar uma função, Função trecho de código que executa alguma tarefa.
function verificarChute() {
    let kick = document.querySelector('input').value;
    console.log(numSecret);
    if (kick == numSecret) {
        exibirTextoNaTela('h1', "Acetou Mizeravi!");
        let palavraTrys = trys > 1 ? 'Tentativas' : 'Tentativa';
        let mensageTrys = `Você descobriu com ${trys} ${palavraTrys}!`;
        exibirTextoNaTela('p', mensageTrys);
        //getElementById buscar um ID especifico do HTML
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (kick > numSecret) {
            exibirTextoNaTela('p', 'O numéro secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O numéro secreto é maior');
        }
        trys++;
        cleanKick();
    }
}

function numAleatorio() {
    let numSelect = parseInt (Math.random() * numLimit + 1);
    let qtdElements =  numSorted.length;
    if(qtdElements == numLimit) {
        numSorted = [];
    }
    if (numSorted.includes(numSelect)) {
        return numAleatorio();
    } else {
        //Adicionar item ao final da lista JS
        numSorted.push(numSelect);
        console.log(numSorted);
        return numSelect;
    }
}

function cleanKick() {
    kick = document.querySelector('input');
    kick.value = '';
}

function reloadGame() {
    numSecret = numAleatorio();
    cleanKick();
    trys = 1;
    showMenssageInitial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}