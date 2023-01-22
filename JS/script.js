//Script para Funcionalidade do Projeto
//Constantes para alteragção da Tela
const form = document.querySelector("#form-habits");
const nlwSetup = new NLWSetup(form);
const button = document.querySelector("header button");

//Funcionalidades ao clicar no botão e Salvar a Tela ao ser alterada
button.addEventListener("click", add);
form.addEventListener("change", save);

//Função de Adcionar dia
function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5);
  const dayExists = nlwSetup.dayExists(today);

  if (dayExists) {
    alert("Dia já Incluso! Favor Altere o Dia. 📅");
    return;
  }

  alert("Dia Adicionado com Sucesso! ✔");
  nlwSetup.addDay(today);
}

//Função para salvar Tela ao ser alterada utilizando o Local Storage do Browser
function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data));
}

//Comandos para carregar tela com as alterações salvas
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {};
nlwSetup.setData(data);
nlwSetup.load();
