//Desafio1 Imprimindo Números Pares
//Crie uma função que receba um número inteiro Ne imprima todos os números pares de 0até N.

function imprimePares(N) {
    for (let i = 0; i <= N; i++) {
      if (i % 2 === 0) {
        console.log(i);
      }
    }
  }
  
  // Chamada da função com o número 10
  imprimePares(10);
  
//Desafio2 Soma dos Números de um Array
//Crie uma função que recebe um array de números e retorna a soma de todos os elementos.
function somaArray(numeros) {
    let soma = 0;
  
    for (let i = 0; i < numeros.length; i++) {
      soma += numeros[i];
    }
  
    return soma;
  }
  
  // Entrada:
  const resultado = somaArray([1, 2, 3, 4, 5]);
  
  // Saída:
  console.log(resultado); // 15
  
//Desafio3  identificar Número Primo
//Crie uma função que receba um número inteiro e retorne true se for primo e false caso contrário.

function ePrimo(numero) {
    // Caso o número seja menor que 2, não é primo
    if (numero < 2) {
      return false;
    }
  
    // Verifica se o número é divisível por qualquer outro número entre 2 e a raiz quadrada de 'numero'
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }
  
    return true; // Se não for divisível, é primo
  }
  
  // Entradas:
  console.log(ePrimo(7)); // true
  console.log(ePrimo(10)); // false
  
  //Desafio4 FizzBuzz
  //Crie uma função que imprima números de 1 a 50, misturando múltiplos de 3 por "Fizz", 
  //múltiplos de 5 por "Buzz" e múltiplos de ambos por "FizzBuzz"

  function fizzBuzz() {
    for (let i = 1; i <= 50; i++) {
      // Verifica se o número é múltiplo de 3 e 5
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
      }
      // Verifica se é múltiplo de 3
      else if (i % 3 === 0) {
        console.log("Fizz");
      }
      // Verifica se é múltiplo de 5
      else if (i % 5 === 0) {
        console.log("Buzz");
      }
      // Se não for múltiplo de 3 nem de 5, imprime o número
      else {
        console.log(i);
      }
    }
  }
  
  // Entrada:
  fizzBuzz();
  
//Desafio5 Contador de vogais
//Crie uma função que receba uma string e retorne a quantidade de vogais nela.

function contaVogais(str) {
    // Define as vogais
    const vogais = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú'];
    
    // Inicializa o contador de vogais
    let contador = 0;
  
    // Percorre cada caractere da string
    for (let i = 0; i < str.length; i++) {
      // Verifica se o caractere é uma vogal (considerando minúsculas e maiúsculas)
      if (vogais.includes(str[i].toLowerCase())) {
        contador++;
      }
    }
  
    return contador;
  }
  
  // Entrada:
  console.log(contaVogais("Node.js é incrível")); // Saída esperada: 6

//Desafio6 Tabuada de um Número
//Crie uma função que recebe um número e imprima a sua tabuada de 1 a 10. 

function tabuada(numero) {
    for (let i = 1; i <= 10; i++) {
      console.log(`${numero} x ${i} = ${numero * i}`);
    }
  }
  
  // Entrada:
  tabuada(5);

//Desafio7 Corda inversora
//Crie uma função que recebe uma string e retorna a mesma string invertida.

function inverteString(str) {
    // Converte a string em um array, inverte o array e depois junta novamente os elementos em uma string
    return str.split('').reverse().join('');
  }
  
  // Entrada:
  console.log(inverteString("hello")); // Saída esperada: "olleh"

//Desafio8 Encontre o Maior Número
//Crie uma função que recebe um array de números e retorna o maior número presente nele.

function maiorNumero(arr) {
    // Usando Math.max para encontrar o maior número do array
    return Math.max(...arr);
  }
  
  // Entrada:
  console.log(maiorNumero([3, 10, 6, 2])); // Saída esperada: 10

//Desafio9 Palíndromo
//Crie uma função que recebe uma string e retorna truese ela para um palíndromo e falsecaso contrário.

function ePalindromo(str) {
    // Remove os espaços e converte para minúsculas
    const strLimpa = str.replace(/\s+/g, '').toLowerCase();
    
    // Compara a string limpa com sua versão invertida
    return strLimpa === strLimpa.split('').reverse().join('');
  }
  
  // Entradas:
  console.log(ePalindromo("Ame a ema")); // Saída esperada: true
  console.log(ePalindromo("Olá mundo")); // Saída esperada: false

//Média de Notas
//Crie uma função que recebe um array de notas e retorna se a média é "Aprovado" (≥7) ou "Reprovado"

function calculaMedia(notas) {
    // Calcula a média das notas
    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    const media = soma / notas.length;
  
    // Verifica se a média é maior ou igual a 7 (Aprovado) ou menor que 7 (Reprovado)
    if (media >= 7) {
      return `Aprovado - Média: ${media.toFixed(1)}`;
    } else {
      return `Reprovado - Média: ${media.toFixed(1)}`;
    }
  }
  
  // Entradas:
  console.log(calculaMedia([8, 7, 6])); // Saída esperada: "Aprovado - Média: 7.0"
  console.log(calculaMedia([5, 6, 4])); // Saída esperada: "Reprovado - Média: 5.0"


  
  
  