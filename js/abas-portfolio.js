// =============================
// ABAS DO PORTFÓLIO
// =============================

const botoesAbas = document.querySelectorAll(".aba");
const conteudosAbas = document.querySelectorAll(".portfolio__conteudo");

botoesAbas.forEach((botao) => {
  botao.addEventListener("click", () => {
    const abaSelecionada = botao.getAttribute("data-aba");

    removerAbaAtiva();
    ativarAba(botao, abaSelecionada);
  });
});

function removerAbaAtiva() {
  botoesAbas.forEach((botao) => {
    botao.classList.remove("ativa");
  });

  conteudosAbas.forEach((conteudo) => {
    conteudo.classList.remove("ativo");
  });
}

function ativarAba(botao, abaSelecionada) {
  botao.classList.add("ativa");

  const conteudoSelecionado = document.getElementById(abaSelecionada);

  if (conteudoSelecionado) {
    conteudoSelecionado.classList.add("ativo");
  }
}