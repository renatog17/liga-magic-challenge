var cartaJinGitaxias = {
    id: 0,
    nome: "Jin-Gitaxias, Augúrio do Núcleo",
    nomeEn: "Jin-Gitaxias, Core Augur",
    code: 76,
    editora: "Wizards of the Coast",
    siglaEditora: "WOTC",
    cor: "Azul",
    codigoRGB: "#0000FF",
    custoMana: 8,
    tipo: "Criatura - Inseto Xamã",
    src: "imgs/cartas/jin-gitaxias.jpg",
    isFavorite: false,
    precoMinimo: 4.58,
    precoMedio: 9.56,
    precoMaximo: 15.95
}

var cartaContraMagica = {
    id: 1,
    nome: "Contramágica",
    nomeEn: "CounterSpell",
    code: 76,
    editora: "Dominaria Remastered",
    siglaEditora: "DMR",
    cor: "Azul",
    codigoRGB: "#0000FF",
    custoMana: 2,
    tipo: "Mágica Instantânea",
    src: "imgs/cartas/counterspell1.jpg",
    isFavorite: false,
    precoMinimo: 9.60,
    precoMedio: 15.20,
    precoMaximo: 28.98
}
var cartaEspectroAbissal = {
    id: 2,
    nome: "Espectro Abissal",
    nomeEn: "Abyssal Especter",
    code: 77,
    editora: "Wizards of the Coast",
    siglaEditora: "WOTC",
    cor: "Preto",
    codigoRGB: "#000000",
    custoMana: 3,
    tipo: "Criatura - Espectro",
    src: "imgs/cartas/abyssal-especter.jpg",
    isFavorite: false,
    precoMinimo: 14.88,
    precoMedio: 45.23,
    precoMaximo: 75.15
}

var cartaMarbleDiamond = {
    id: 3,
    nome: "Diamante de Mármore",
    nomeEn: "Marble Diamond",
    code: 78,
    editora: "Wizards of the Coast",
    siglaEditora: "WOTC",
    cor: "Roxo",
    codigoRGB: "#993399",
    custoMana: 2,
    tipo: "Artefato",
    src: "imgs/cartas/marble-diamond.jpg",
    isFavorite: false,
    precoMinimo: 7.12,
    precoMedio: 8.12,
    precoMaximo: 9.16
}


var cartaDevastadorDeShiv = {
    id: 4,
    nome: "Devastador de Shiv",
    nomeEn: "Shivan Devastator",
    code: 79,
    editora: "Wizards of the Coast",
    siglaEditora: "WOTC",
    cor: "Vermelho",
    codigoRGB: "#FF0000",
    custoMana: 5,
    tipo: "Criatura - Elemental",
    src: "imgs/cartas/shivdevastian.jpg",
    isFavorite: true,
    precoMinimo: 9.68,
    precoMedio: 21.31,
    precoMaximo: 34.00
}
var todasCartas = []
todasCartas.push(cartaJinGitaxias)
todasCartas.push(cartaEspectroAbissal)
todasCartas.push(cartaMarbleDiamond)
todasCartas.push(cartaDevastadorDeShiv)
todasCartas.push(cartaContraMagica)

var carousel = document.querySelector('.carousel')
var proxBtn = document.getElementById('proxima')
var antBtn = document.getElementById('anterior')

var imagensPorVez = 3
var indiceAtual = 0

function updateCarousel() {
    elementosParaRemover = document.querySelectorAll('.carousel-img')
    elementosParaRemover.forEach(function (elemento) {
        elemento.remove()
    })
    aux = 0
    for (var i = indiceAtual; i < indiceAtual + imagensPorVez; i++) {
        var indexCircular = i % todasCartas.length
        var novaImagem = document.createElement('img')
        novaImagem.src = todasCartas[indexCircular].src
        novaImagem.classList.add('carousel-img')
        carousel.insertBefore(novaImagem, antBtn)

        if (aux == 1) {
            atualizarDados(indexCircular)
        } else {
            novaImagem.classList.add('carousel-img-secundaria')
        }
        aux++
    }

}

function atualizarDados(index) {
    const carta = todasCartas[index]

    cartaMain = document.querySelector('.carta-image')
    cartaMain.setAttribute('data-id', carta.id)

    document.querySelector('.carta-image').src = carta.src
    document.querySelector('.titulo-pt').textContent = carta.nome
    document.querySelector('.titulo-en').textContent = carta.nomeEn
    document.querySelector('.edicao-code').textContent = carta.code
    document.querySelector('.edicao-name').textContent = carta.editora
    document.querySelector('.edicao-sigla').textContent = carta.siglaEditora
    document.querySelector('.carta-tipo').textContent = carta.tipo
    document.querySelector('#preco-min').textContent = carta.precoMinimo
    document.querySelector('#preco-medio').textContent = carta.precoMedio
    document.querySelector('#preco-max').textContent = carta.precoMaximo

    if (carta.isFavorite === true)
        document.querySelector('.img-coracao').src = 'imgs/coracao-preenchido.png'
    else {
        document.querySelector('.img-coracao').src = 'imgs/coracao.png'
    }

    elemento = document.querySelector('.carta-cor')
    elemento.style.color = carta.codigoRGB
    elemento.textContent = carta.cor
    custoMana = document.querySelector('.carta-custo-mana')
    mana = document.querySelectorAll('.mana')
    mana.forEach(function (elemento) {
        elemento.remove()
    })

    for (var j = 0; j < carta.custoMana; j++) {
        var novaImagemMana = document.createElement('img')
        novaImagemMana.src = "imgs/blue-mana-cost.png"
        novaImagemMana.classList.add('mana')
        custoMana.append(novaImagemMana)
    }
}

function showPrevious() {
    if (indiceAtual == todasCartas.length - 1) {
        indiceAtual = 0
    } else {
        indiceAtual++
    }
    updateCarousel()
}

function showNext() {
    if (indiceAtual == 0)
        indiceAtual = todasCartas.length - 1
    else
        indiceAtual--
    updateCarousel()
}

function favoritar() {
    cartaMain = document.querySelector('.carta-image')
    const id = cartaMain.getAttribute('data-id')
    const cartaEncontrada = todasCartas.find(carta => carta.id == id)
    cartaEncontrada.isFavorite = !cartaEncontrada.isFavorite
    if (cartaEncontrada.isFavorite) {
        document.querySelector('.img-coracao').src = 'imgs/coracao-preenchido.png'
    } else {
        document.querySelector('.img-coracao').src = 'imgs/coracao.png'
    }
}

antBtn.addEventListener('click', showPrevious)
proxBtn.addEventListener('click', showNext)
document.querySelector('.img-coracao').addEventListener('click', favoritar)
updateCarousel()

