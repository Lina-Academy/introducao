const funcoes = require('./atividades.aula6')

test('Deve retornar array dos argumentos', () => {
    expect(funcoes.variosArgumentos(1, 2, 3, 4)).toStrictEqual([1, 2, 3, 4])
    expect(funcoes.variosArgumentos('oi', 'tchau', 'beleza')).toStrictEqual([
        'oi',
        'tchau',
        'beleza',
    ])
    expect(
        funcoes.variosArgumentos(
            ['elemento1', 'elemento2'],
            { chave: 'valor' },
            'string'
        )
    ).toStrictEqual([['elemento1', 'elemento2'], { chave: 'valor' }, 'string'])
})

test('Deve retornar um objeto com chave argumentoN e valor do argumento', () => {
    expect(
        funcoes.retornarArgumentosEmObjeto(
            'Flamengo',
            'Campeão',
            'Copa',
            'Brasil'
        )
    ).toStrictEqual({
        argumento1: 'Flamengo',
        argumento2: 'Campeão',
        argumento3: 'Copa',
        argumento4: 'Brasil',
    })

    expect(funcoes.retornarArgumentosEmObjeto(null, 0, 'oi')).toStrictEqual({
        argumento1: null,
        argumento2: 0,
        argumento3: 'oi',
    })
})
