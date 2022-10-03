const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const resultadoManual =
    array[0] * // 1
    array[1] * // 1 * 2 = 2
    array[2] * // 2 * 3 = 6
    array[3] * // 6 * 4 = 24
    array[4] * // ...
    array[5] * // ...
    array[6] * // ...
    array[7] * // ...
    array[8] * // ...
    array[9] // ...

let resultado = 1

array.forEach((elemento) => {
    resultado = resultado * elemento
})

array.forEach((elemento) => {
    if (elemento % 2 === 0) {
        console.log('Elemento par! Elemento:', elemento)
    }
})

const nomes = ['Alan', 'Bruna', 'Carlos', 'Daniel', 'Eduardo']

nomes.sort().forEach((elemento, indice) => {
    console.log(indice + 1, ' - ', elemento)
})

console.log('Resultado Manual =', resultadoManual)
console.log('Resultado por Iteração =', resultado)
