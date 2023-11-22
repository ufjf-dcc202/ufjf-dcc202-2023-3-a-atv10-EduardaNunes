let joao = 1;
let maria = 2;

function setJoao(valor){
    if(joao >= 0){
        joao = valor;
    }else{
        joao = 0;
    }

}

function setMaria(valor){
    if(maria >= 0){
        maria = valor;
    }else{
        maria = 0;
    }

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