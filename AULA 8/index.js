const button = document.querySelector('#button')

const buscarGithub = async (e) => {
    const divPerfil = document.querySelector('.perfil')
    if (divPerfil) {
        divPerfil.remove()
    }

    const response = await fetch('https://api.github.com/users/alanmareines')

    const perfilGithub = await response.json()

    const container = document.createElement('div')
    container.classList.add('perfil')

    const meuNome = document.createElement('p')
    meuNome.style.color = 'white'
    meuNome.innerText = `NOME: ${perfilGithub.name}`

    const login = document.createElement('p')
    login.style.color = 'white'
    login.innerText = `LOGIN: ${perfilGithub.login}`

    const dataCriacao = document.createElement('p')
    dataCriacao.style.color = 'white'
    dataCriacao.innerText = `DATA DE CRIAÇÃO: ${perfilGithub.created_at}`

    const avatar = document.createElement('p')
    avatar.style.color = 'white'
    avatar.innerText = `AVATAR URL: ${perfilGithub.avatar_url}`

    const avatarImage = document.createElement('img')
    avatarImage.setAttribute('src', perfilGithub.avatar_url)

    const array = [meuNome, login, dataCriacao, avatar, avatarImage]

    array.forEach((elemento) => {
        container.appendChild(elemento)
    })

    document.body.appendChild(container)
}

button.addEventListener('click', buscarGithub)

// Como eu acesso elementos de um array?

// const array = [1,2,3,4]
// array[2]

// Como eu acesso elementos de um objeto?

// const obj = {chave1: valor1, chave2: valor2}
// obj.chave2
