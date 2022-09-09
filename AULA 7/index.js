console.log('Lendo arquivo index.js...')

const aluna = { nome: 'Patricia Goncalves', profissao: 'Braba' }

function criarElemento() {
    // Como criar um novo elemento
    const novoElemento = document.createElement('div')

    // Como atribuir um novo texto para o elemento
    novoElemento.innerText = `${aluna.nome} - ${aluna.profissao}`

    // Como alterar o css do elemento
    novoElemento.style.backgroundColor = 'red'

    novoElemento.style.color = 'white'

    novoElemento.style.fontSize = '20px'

    // Como incluir esse elemento no html
    document.body.appendChild(novoElemento)
}

// if (aluna.profissao === 'Braba') {
//     document.body.appendChild(novoElemento)
// } else {
//     console.log('Patricia nem é tão braba')
// }

// Como selecionar um elemento da página
const botao = document.querySelector('button')

// Como incluir um evento no elemento
botao.addEventListener('click', criarElemento)
