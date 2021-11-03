let num = document.getElementById('num')
let lista = document.getElementById('quadro')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true
  } else {
    return false
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true
  } else {
    return false
  }
}

function adicionar() {
  if (isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value))
    //É assim que adiciona um vlaor no select do html
    let item = document.createElement('option')
    item.text = `Valor ${num.value} adicionado.`
    lista.appendChild(item)
    res.innerHTML = ''
  } else {
    alert('Valor invalido ou ja encontrado na lista')
  }
  // deixaar a caixa vazia
  num.value = ''
  // nao precisa clicar no objeto para escrever
  num.focus()
}

function finalizar() {
  if (valores.length == 0) {
    alert('Adicione valores antes de finalizar.')
  } else {
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0

    // verificar item a item do vetor
    for (let pos in valores) {
      soma += valores[pos]
      if (valores[pos] > maior) maior = valores[pos]
      if (valores[pos] < menor) menor = valores[pos]
    }
    media = soma / tot
    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo, temos ${tot} números adicionados</p>`
    res.innerHTML += `<p>O maior valor informado foi: ${maior}</p>`
    res.innerHTML += `<p>O menor valor informado foi: ${menor}</p>`
    res.innerHTML += `<p>Somando todos os valores temos: ${soma}</p>`
    res.innerHTML += `<p>A media dos valores digitados e: ${media}</p>`
  }
}
