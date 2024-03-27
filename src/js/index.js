/*
    O que precisamos fazer? - quando clicar no botão personagem nal lista temos que marcar o botão como selecionado e mostrar o personagem correspondente.

        OBJETIVO 1 - quando clicar no botao do personagem na lista, marcar o botao como selecionado
            passo 1 - pegar os botoes no js pra pdoer verificar quando o usuario clicar em cima de um deles
            passo 2 - adcioanr a classe selecionado no botao que o usuario clicou
            passo 3 - vrificar se ja existe um botao selecionado, se sim, devemos remover a seleção dele

        OBJETIVO 2 - quando clicar no botao do personagem mostrar as informaçoes do personagem
            passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele
            passo 2 - adicionar a classe selecionado no personagem qe o usuario selecionou
            passo 3 - verificiar se ja existe um personagem selecionado, se sim, evemos remover a seeao dele
*/
 
//OBJETIVO 1 - quando clicar no botao do personagem na lista, marcar o botao como selecionado
//passo 1 - pegar os botoes no js pra pdoer verificar quando o usuario clicar em cima de um dele
const botoes = document.querySelectorAll(".botao");
const perso = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        desselecionarBotao();
        desselecionarForma();

        botao.classList.add("selecionado");
        perso[indice].classList.add("selecionado");
    });
});

function desselecionarForma()  {
    const formaSelecionada = document.querySelector(".personagem.selecionado");
    formaSelecionada.classList.remove("selecionado");
}

function desselecionarBotao () {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}