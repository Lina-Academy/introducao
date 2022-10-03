const displayForm = document.querySelector(".evento")
const backBtn = document.querySelector("#voltar")
const submitBtn = document.querySelector("#submeter")
const form = document.querySelector("#form-evento")

// ao clicar no botão - quero que aperaça
// um formulário para preenchimento

// Adicionar evento no botão de adição de evento
displayForm.addEventListener("click", () => {
  // Aparecer o formulário
  form.classList.remove("d-none")
  // Estilizar o formulário na vertical
  form.classList.add("display-vert")
  // Sumir com o botão
  displayForm.classList.add("d-none")
})

// Adicionar evento no botão voltar
// Quando o botão estiver dentro de uma tag <form>,
// temos que desabilitar o processo padrão do botão
backBtn.addEventListener("click", (evento) => {
  // Desabilita o comportamento padrão
  evento.preventDefault()
  // Mostra botão novamente
  displayForm.classList.remove("d-none")
  // Esconde formulário
  form.classList.add("d-none")
  // Não basta adicionarmos d-none
  // Precisamos remover display-vert
  form.classList.remove("display-vert")
})

// Adicionar evento no botão submeter
submitBtn.addEventListener("click", (evento) => {
  // Desabilita o comportamento padrão
  evento.preventDefault()
  // Armazenar os inputs
  const ambiente = form.querySelector("#ambiente").value
  const aplicacao = form.querySelector("#aplicacao").value
  const infra = form.querySelector("#infraestrutura").value
  const objetivo = form.querySelector("#objetivo").value
  const dependencia = form.querySelector("#dependencia").value

  // Criar as células
  // Repassar para elementos a serem criados
  const th = document.createElement("th") // criar uma tag <th></th>
  th.innerText = ambiente // <th>{valor do input 'ambiente'}</th>

  const tdAplicacao = document.createElement("td") // criar uma tag <th></th>
  tdAplicacao.innerText = aplicacao // <th>{valor do input 'ambiente'}</th>

  const tdInfra = document.createElement("td") // criar uma tag <th></th>
  tdInfra.innerText = infra // <th>{valor do input 'ambiente'}</th>
  // Criar uma linha
  const tr = document.createElement("tr")
  // Inserir as células na linha
  tr.appendChild(th)
  tr.appendChild(tdAplicacao)
  tr.appendChild(tdInfra)
  tr.appendChild(tdObjetivo)
  //   <tr> <th></th> <td></td> <td></td> </tr>

  // Selecionar tabela
  const tableBody = document.querySelector("tbody")
  // Inserir a linha na tabela
  tableBody.insertBefore(tr, tableBody.firstChild)
})