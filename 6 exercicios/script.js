// Função para somar três números
function soma(num1, num2, num3) {
    return num1 + num2 + num3;
}

const resultado = soma(5, 10, 15);
console.log(resultado); // Saída: 30

// Função para determinar a faixa etária
function faixaEtaria(idade) {
    if (idade < 12) {
        return "Criança";
    } else if (idade >= 12 && idade <= 24) {
        return "Jovem";
    } else {
        return "Adulto";
    }
}

const crianca = faixaEtaria(10);  
const adulto = faixaEtaria(30);   
console.log(crianca);  // Saída: Criança
console.log(adulto);   // Saída: Adulto

// Função para verificar se uma palavra é um palíndromo
function isPalindrome(palavra) {
    const palavraFormatada = palavra.toLowerCase();
    return palavraFormatada === palavraFormatada.split('').reverse().join('');
}

console.log(isPalindrome("arara"));        // Saída: true
console.log(isPalindrome("javascript"));   // Saída: false
console.log(isPalindrome("Radar"));        // Saída: true

// Função para calcular a média de um array de números
function calculateAverage(numeros) {
    if (numeros.length === 0) {
        return 0; // Retorna 0 se o array estiver vazio
    }

    const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
    const media = soma / numeros.length;
    return media;
}

const numeros1 = [10, 20, 30, 40, 50];
console.log(calculateAverage(numeros1)); // Saída: 30

const numerosVazios = [];
console.log(calculateAverage(numerosVazios)); // Saída: 0

// Função para inverter uma string
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("hello"));         // Saída: "olleh"
console.log(reverseString("JavaScript"));    // Saída: "tpircSavaJ"

// Função para contar vogais em uma string
function countVowels(str) {
    const vogais = 'aeiouAEIOU';
    let contador = 0;

    for (let char of str) {
        if (vogais.includes(char)) {
            contador++;
        }
    }

    return contador;
}

console.log(countVowels("Hello World"));     // Saída: 3
console.log(countVowels("JavaScript"));      // Saída: 3
console.log(countVowels("AEIOU"));           // Saída: 5
console.log(countVowels("xyz"));              // Saída: 0

// Função para somar números pares em um array
function sumEvenNumbers(numeros) {
    let soma = 0; // Inicializa a soma em 0

    for (let numero of numeros) {
        if (numero % 2 === 0) {
            soma += numero; // Adiciona o número par à soma
        }
    }

    return soma; // Retorna a soma total dos números pares
}

const numeros2 = [1, 2, 3, 4, 5, 6, -2, -4, -7];
console.log(sumEvenNumbers(numeros2)); // Saída: 6 (2 + 4 + 6 - 2 - 4)