## Terceira semana do Bootcamp da Reprograma

### O exercício da semana envolveu estrutura de funções, escopo e estrutura de repetições.

### Para este README decidi trazer algumas curiosdades que descobri ao me aprofundar mais no assunto de funções e JavaScript.
### 1- Observer a seguinte função:
```
function soma (a, b) {
         return a + b
}
```
### Se você executar soma(2, 2) o retorno será igual a 4, mas e se você passar mais argumentos, soma(2, 2, 3, 4, 5), consegue adivinhar o resultado?
### Não, não será um erro, os argumentos extras serão simplesmente ignorados e o retorno continuará sendo 4.
### Para acessar os argumentos extras você pode usar o objeto arguments, ele funciona como uma variável de escopo local dentro de todas as funções.
```
function mostraArgumentos (...arguments) {
         console.log(arguments)
}
```
### Ao invocar a função acima você poderá observar o seguinte resultado:
```
mostraArgumentos(2, 2, 3, 4, 5)
//output
[2, 2, 3, 4, 5]
```
### Arguments não é um Array.Parece um Array, mas possui apenas a propriedade length. E o interessante é que você pode referenciar os argumentos passados em uma função acessando pelo índice de cada um, começando pelo 0:
```
function soma (a, b) {
         return arguments[0] + arguments[arguments.length - 1]
}

soma(2,3,4,5)
//output
7
```
### No código acima, a função somafoi reescrita e os argumentos foram acessados pelo objeto arguments. Observe que o retorno será a soma entre o primeiro argumento passado e o último.