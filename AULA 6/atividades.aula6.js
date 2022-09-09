// Complete essas funções somente com uma linha de código
// Caso não ache a função necessária para o tipo de dado que vc precisa, não se esqueça:
// O Google está aí para isso 🤓

function variosArgumentos(...args) {
    // TODO: retorne todos os argumentos em um array
    // E.x. variosArgumentos(oi, tchau, beleza) => [oi, tchau, beleza]
}

function converteObjetoEmArrays(objetoExemplo) {
    // TODO: converta um objeto em um array de arrays, sendo o primeiro, as chaves, e no segundo, os valores
    // E.x. converteObjetoEmArrays({nome: 'Pedro', local: 'Copa do Mundo'}) => [['nome', 'local'], ['Pedro', 'Copa do Mundo']]
    const keys = []
    const values = []
    Object.entries(objetoExemplo).forEach(([key, value]) => {
        keys.push(key)
        values.push(value)
    })
    return [keys, values]
}

function retornarArgumentosEmObjeto(...args) {
    // TODO: retorne todos os argumentos, mas agora em um objeto.
    // A estrutura deve ser a seguinte: {argumento1: <valorargumento1>, argumento2:<valorargumento2>}
    // E.x. retornarArgumentosEmObjeto('Flamengo', 'Campeão', 'Copa', 'Brasil') resultado esperado na linha seguinte
    // {argumento1: 'Flamengo', argumento2:'Campeão', argumento3: 'Copa', argumento4: 'Brasil'}
}

module.exports = {
    variosArgumentos,
    retornarArgumentosEmObjeto,
    converteObjetoEmArrays,
}
