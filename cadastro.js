var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var prompt = require('prompt-sync')();


//O aluno consiste em um objeto com as seguintes propriedades: id, nome, sala, media e presença.
let id = 1
let max = 100

const aluno = { 
  "0": {
    "nome": "teste",
    "sala": "testesala",
    "media": 0 ,
    "presenca": 0,
  }
}

function addAluno(addNome, addSala, addMedia){
  aluno[id] = {}
  aluno[id]["nome"] = addNome
  aluno[id]["sala"] = addSala
  aluno[id]["media"] = addMedia
  id++
}

function delAluno(delNome){
  let x = 0
  while (aluno[x]){
      if (aluno[x]["nome"] == delNome ){
        delete aluno[x]
    }
    x++
  }
}

function editAluno(editNome){
  let x = 0
  while (aluno[x]){
      if (aluno[x]["nome"] == editNome ){
        aluno[x]["nome"] = prompt("Novo nome: ")
        aluno[x]["sala"] = prompt("Nova sala: ")
        aluno[x]["media"] = prompt("Nova media: ")
    }
    x++
  }
}
function passouAluno(nomeAluno){

}

addAluno("Zezinho", 1, 10)
addAluno("Zezao", 2, 8)

console.log("Bem vindo!\n Menu:\n 1 - Adicionar aluno\n 2 - Deletar aluno\n 3 - Editar aluno\n 4 - Passou de ano?\n 0 - Sair\n ")
let opcao = prompt()

console.log("Wait")
switch (opcao){
  case "1":
    addAluno(prompt("Nome do aluno:"), prompt("Sala do aluno:"), prompt("Media do aluno:"))
    break;
  case "2":
    delAluno(prompt("Nome do aluno:")) 
    break;
  case "3":
    editAluno("Nome do aluno:")
    break;
  case "4":
    
    break;
 
    case "0":
    console.log('Fim')
}








console.log(aluno)

