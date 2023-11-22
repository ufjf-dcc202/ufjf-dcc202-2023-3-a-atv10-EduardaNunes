let joao = 1;
let maria = 2;

function setJoao(valor){
    joao = valor;
}

function setMaria(valor){
    maria = valor;
}

function getMaria(){
    return maria;
}

function getJoao(){
    return joao;
}

function deMariaParaJoao(){
    joao += maria;
    maria = 0;
}

function deJoaoParaMaria(){
    maria += joao;
    joao = 0;
}

export {getMaria, getJoao, deJoaoParaMaria, deMariaParaJoao, setMaria, setJoao};