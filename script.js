//function toggleMode() {
//const html = document.documentElement; //document é a representação do documento, isto é, da página. O "." significa que estamos acessando priopriedades e funcionalidades dessa página, u seja acesso o html da página através do documentElement //
//if (html.classList.contains("light"))
// html.classList.remove("light");
//else {
//html.classList.add("light");}}

function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  // pegar a tag img
  const img = document.querySelector("#profile img");
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png");
  } else {
    // se tiver sem light mode, adicionar a imagem dark
    img.setAttribute("src", "./assets/avatar-dark.png");
  }
}
