//5 – Vamos criar uma calculadora com as 4 operações matemáticas básicas? Rs
//a-) Deverá ser possível escolher uma operação aritmética em forma de string: ‘soma’, ‘multiplicação’, ‘divisão’ e ‘subtração’
//b-)Deverá ser possível passar 2 números para a operação escolhida 
//c-)Deverá retornar o resultado e imprimir no console


function calcular (operação, n1, n2){
    if(operação == "soma"){
        return n1 + n2
    }else if(operação == "subtracao"){
        return n1 - n2
    }else if(operação == "divisao"){
        return n1 / n2
    }else if(operação == "multiplicacao"){
        return n1 * n2
    }
}

console.log(calcular("divisao",20,5))