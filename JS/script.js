const form = document.querySelector("#form-habits");
const nlwSetup = new NLWSetup(form);
const button = document.querySelector("header button");

button.addEventListener("click", add);

function add(){
    alert('Você Clicou no Botão');
}

/*const data = {
  run: ["01-01", "01-05"],
  water: ["01-02", "01-04"],
  food: ["01-03"],
  journal: ["01-02", "01-04"],
  takePills: ["01-01", "01-05"],
};

nlwSetup.setData(data);
nlwSetup.load();*/
