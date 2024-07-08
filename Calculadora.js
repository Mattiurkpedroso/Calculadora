const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let calculadora = [];
exibirMenu();

function exibirMenu() {
  console.log(`
_________________________________________________________________________________
| Menu para cálculos de Adição, Subtração, Multiplicação, Divisão e Porcentagem |
|===============================================================================|
| 1- Adição                                                                     |
| 2- Subtração                                                                  |
| 3- Multiplicação                                                              |
| 4- Divisão                                                                    |
| 5- Porcentagem                                                                |
| 6- Mostrar Resultados                                                         |
| 7- Atualizar Resultado                                                        |
| 8- Deletar Resultado                                                          |
| 9- Sair                                                                       | 
|===============================================================================|
|_______________________________________________________________________________|
  `);

  rl.question('Escolha uma opção: ', (opcao) => {
    switch (opcao) {
      case '1':
        resolverAdicao();
        break;
      case '2':
        resolverSubtracao();
        break;
      case '3':
        resolverMultiplicacao();
        break;
      case '4':
        resolverDivisao();
        break;
      case '5':
        resolverPorcentagem();
        break;
      case '6':
        mostrarResultados();
        break;
      case '7':
        atualizarResultado();
        break;
      case '8':
        deletarResultado();
        break;
      case '9':
        rl.close();
        break;
      default:
        console.log('Opção inválida, tente novamente.');
        exibirMenu();
        break;
    }
  });
}

function resolverAdicao() {
  rl.question('Digite os números para adição (separados por espaço): ', (input) => {
    const numeros = input.split(' ').map(Number);
    const resultado = numeros.reduce((acc, num) => acc + num, 0);
    console.log(`Resultado: ${resultado}`);
    calculadora.push({ operacao: 'Adição', resultado });
    exibirMenu();
  });
}

function resolverSubtracao() {
  rl.question('Digite os números para subtração (separados por espaço): ', (input) => {
    const numeros = input.split(' ').map(Number);
    const resultado = numeros.reduce((acc, num) => acc - num);
    console.log(`Resultado: ${resultado}`);
    calculadora.push({ operacao: 'Subtração', resultado });
    exibirMenu();
  });
}

function resolverMultiplicacao() {
  rl.question('Digite os números para multiplicação (separados por espaço): ', (input) => {
    const numeros = input.split(' ').map(Number);
    const resultado = numeros.reduce((acc, num) => acc * num, 1);
    console.log(`Resultado: ${resultado}`);
    calculadora.push({ operacao: 'Multiplicação', resultado });
    exibirMenu();
  });
}

function resolverDivisao() {
  rl.question('Digite os números para divisão (separados por espaço): ', (input) => {
    const numeros = input.split(' ').map(Number);
    const resultado = numeros.reduce((acc, num) => acc / num);
    console.log(`Resultado: ${resultado}`);
    calculadora.push({ operacao: 'Divisão', resultado });
    exibirMenu();
  });
}

function resolverPorcentagem() {
  rl.question('Digite o número e a porcentagem (separados por espaço): ', (input) => {
    const [numero, porcentagem] = input.split(' ').map(Number);
    const resultado = (numero * porcentagem) / 100;
    console.log(`Resultado: ${resultado}`);
    calculadora.push({ operacao: 'Porcentagem', resultado });
    exibirMenu();
  });
}

function mostrarResultados() {
  if (calculadora.length === 0) {
    console.log('Nenhum resultado armazenado.');
  } else {
    calculadora.forEach((item, index) => {
      console.log(`${index + 1} - ${item.operacao}: ${item.resultado}`);
    });
  }
  exibirMenu();
}

function atualizarResultado() {
  rl.question('Digite o índice do resultado que deseja atualizar: ', (index) => {
    const idx = Number(index) - 1;
    if (idx >= 0 && idx < calculadora.length) {
      rl.question('Digite o novo resultado: ', (novoResultado) => {
        calculadora[idx].resultado = Number(novoResultado);
        console.log('Resultado atualizado com sucesso.');
        exibirMenu();
      });
    } else {
      console.log('Índice inválido.');
      exibirMenu();
    }
  });
}

function deletarResultado() {
  rl.question('Digite o índice do resultado que deseja deletar: ', (index) => {
    const idx = Number(index) - 1;
    if (idx >= 0 && idx < calculadora.length) {
      calculadora.splice(idx, 1);
      console.log('Resultado deletado com sucesso.');
    } else {
      console.log('Índice inválido.');
    }
    exibirMenu();
  });
}