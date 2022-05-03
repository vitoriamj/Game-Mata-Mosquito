let altura = 0
let largura = 0
let vidas = 1
let tempo = 10

let nivel = window.location.search
nivel = nivel.replace('?', '')

let mosquitoTempo = 1500

if (nivel === 'normal') {
  mosquitoTempo = 1500
} else if (nivel === 'dificil') {
  mosquitoTempo = 1000
} else if (nivel === 'chucknorris') {
  mosquitoTempo = 750
}
function ajustaTamanho() {
  altura = window.innerHeight
  largura = window.innerWidth
}

ajustaTamanho()

let cronometro = setInterval(function () {
  tempo--

  if (tempo < 0) {
    clearInterval(cronometro)
    clearInterval(criaMosquito)
    window.location.href = 'vitoria.html'
  } else {
    document.getElementById('cronometro').innerHTML = tempo
  }
}, 1000)

function posicaoAleatoria() {
  if (document.getElementById('mosquito')) {
    document.getElementById('mosquito').remove()

    if (vidas > 3) {
      window.location.href = 'fimDeJogo.html'
    } else {
      document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
      vidas++
    }
  }

  let posX = Math.abs(Math.floor(Math.random() * largura) - 90)
  let posY = Math.abs(Math.floor(Math.random() * altura) - 90)

  let mosquito = document.createElement('img')
  mosquito.src = 'imagens/mosca.png'
  mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
  mosquito.style.left = posX + 'px'
  mosquito.style.top = posY + 'px'
  mosquito.style.position = 'absolute'
  mosquito.id = 'mosquito'
  mosquito.onclick = function () {
    this.remove()
  }

  document.body.appendChild(mosquito)
}

function tamanhoAleatorio() {
  let classe = Math.floor(Math.random() * 3)

  switch (classe) {
    case 0:
      return 'mosquito1'
    case 1:
      return 'mosquito2'
    case 2:
      return 'mosquito3'
  }
}

function ladoAleatorio() {
  let classe = Math.floor(Math.random() * 2)

  switch (classe) {
    case 0:
      return 'ladoA'
    case 1:
      return 'ladoB'
  }
}
