function ItemListaCompra(id, nome, quantidade) {
    this.id = id
    this.nome = nome
    this.quantidade = quantidade
}

const listaDeCompras = []

function adicionarNaLista() {
    const qtdItens = parseInt(document.querySelector('.quantidade-compra').textContent)
    const idCarta = document.querySelector('.carta-image').getAttribute('data-id')
    const nomeCarta = document.querySelector('.titulo-pt').textContent
    
    const itemExistente = listaDeCompras.find(item => item.id === idCarta)

    if (itemExistente) {
        itemExistente.quantidade += qtdItens
    } else {
        const novoItem = new ItemListaCompra(idCarta, nomeCarta, qtdItens)
        listaDeCompras.push(novoItem)
    }
    alert("Lista de Compras:\n" + 
    listaDeCompras.map(item => `ID=${item.id}, Nome=${item.nome}, Quantidade=${item.quantidade}`).join('\n'))
}

document.querySelector('.btn-adicionar-mais').addEventListener('click', adicionarNaLista)

const quantidadeCompra = document.querySelector('.quantidade-compra')
const operadorMais = document.querySelector('.operador-mais-img')
const operadorMenos = document.querySelector('.operador-menos-img')

operadorMais.addEventListener('click', function () {
    quantidadeCompra.textContent = parseInt(quantidadeCompra.textContent) + 1
})

operadorMenos.addEventListener('click', function () {
    const novoValor = Math.max(parseInt(quantidadeCompra.textContent) - 1, 1)
    quantidadeCompra.textContent = novoValor
})
