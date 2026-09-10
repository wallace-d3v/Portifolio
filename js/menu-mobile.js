// =============================
// MENU MOBILE
// =============================

const botaoMenu = document.getElementById("botao-menu");
const menu = document.getElementById("menu");
const linksMenu = document.querySelectorAll(".menu a");

if (botaoMenu && menu) {
  botaoMenu.setAttribute("aria-expanded", "false");

  botaoMenu.addEventListener("click", () => {
    const menuEstaAberto = menu.classList.toggle("menu--aberto");

    botaoMenu.setAttribute("aria-expanded", menuEstaAberto);

    botaoMenu.textContent = menuEstaAberto ? "×" : "☰";
  });
}

linksMenu.forEach((link) => {
  link.addEventListener("click", () => {
    fecharMenuMobile();
  });
});

function fecharMenuMobile() {
  if (menu && botaoMenu) {
    menu.classList.remove("menu--aberto");
    botaoMenu.setAttribute("aria-expanded", "false");
    botaoMenu.textContent = "☰";
  }
}