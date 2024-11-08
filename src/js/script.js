const btnArrow = document.querySelectorAll(".icone-controle")
const descricoes = document.querySelectorAll(".descricao")
const imagens = document.querySelectorAll(".imagem")

btnArrow.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        selecionarDescricao(indice)

        ativarImagen(indice)

    })
})

function selecionarDescricao(indice) {
    const selecionado = document.querySelector(".selecionado")
    selecionado.classList.remove("selecionado")
    descricoes[indice].classList.add("selecionado")
}

function ativarImagen(indice) {
    const ativo = document.querySelector(".ativo")
    ativo.classList.remove("ativo")
    imagens[indice].classList.add("ativo")
}