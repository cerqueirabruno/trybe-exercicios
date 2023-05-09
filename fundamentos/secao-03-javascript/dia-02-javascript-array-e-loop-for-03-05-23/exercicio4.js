let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// 2
let soma = 0;

for (let i = 0; i < numbers.length; i++) {
    soma += numbers[i];
}

// 3
let divisao = soma / numbers.length;

// 4
if (divisao => 20) {
    console.log("O valor da média aritmética é maior que 20");
} else {
    console.log("O valor da média aritmética é menor ou igual a 20");
}

// 5
let maior = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maior) {
        maior = numbers[i];
    }
}

console.log(maior);


// 6
let contagem = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        contagem++;
    }
}

if (contagem > 0) {
    console.log("Existem " + contagem + " valores ímpares no array.");
} else {
    console.log("Nenhum valor ímpar encontrado.");
}


// 7
let menor = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < menor) {
        menor = numbers[i];
    }
}

console.log(menor);

// 8
let numeros = [];

for (let i = 1; i <= 25; i++) {
    numeros.push(i);
}

console.log(numeros);

// 9
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i] / 2);
}

// 10
let word = 'tryber';
let reversedWord = '';

for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
}

console.log(reversedWord);

// 11
let largestPrime = 2;

for (let i = 2; i <= 50; i++) {
    let isPrime = true;

    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime && i > largestPrime) {
        largestPrime = i;
    }
}

console.log(largestPrime);