
//1 – Crie um algoritmo que imprime no console de 10 a 60, inteirando a cada 5, 
//exceto para os números 35 e 45 que irão ser substituídos pela palavra “PULOU”

let i = 10
while (i <= 60) {
    
    if(i === 35 || i === 45){
        console.log(`PULOU`)
        
    }else{
        console.log(i)
    }
    i += 5
}


