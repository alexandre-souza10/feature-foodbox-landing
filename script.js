// Habilitar botão Enviar após validação dos campos
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const mensagem = document.getElementById("mensagem");
const enviarBtn = document.getElementById("enviarBtn");

function validarFormulario() {
  if (nome.value && email.value && mensagem.value) {
    enviarBtn.disabled = false;
  } else {
    enviarBtn.disabled = true;
  }
}

nome.addEventListener("input", validarFormulario);
email.addEventListener("input", validarFormulario);
mensagem.addEventListener("input", validarFormulario);

document.getElementById("contatoForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Mensagem enviada com sucesso!");
  this.reset();
  enviarBtn.disabled = true;
});

// Mostrar botão "Voltar ao topo" após scroll
const btnTop = document.getElementById("btn-top");

window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
};

// Scroll suave ao topo
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}