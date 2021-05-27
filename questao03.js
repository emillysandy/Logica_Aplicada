//3 – Crie em função que recebe 2 parâmetros e retorna o resultado da divisão entre eles. 
//Além disso,se o resto dessa divisão for zero deverá imprimir no console o valor e dize 
//que ele é par.

function dividir(a, b){
    const divisao = a/b
    
    console.log(`O resultado da divisão é: ${divisao}`)

    if(divisao%2==0){
        console.log(`${divisao} é par`)
    }
}
console.log(dividir(20,10))
 