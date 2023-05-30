// exercício 1
let a = 10;
let b = 20;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// exercício 2
if (a > b) {
    return console.log("oi, sou maior que a variável 'b'");
} else if (b > a) {
    return console.log("oi, sou maior que a variável 'a'");
}

// exercício 3
let c = 50;

if (a > b && a > c) {
    return console.log("'a' é maior que 'b' e 'c'");
} else if (b > a && b > c) {
    return console.log("'b' é maior que 'a' e 'c' ");
} else {
    return console.log("'c' é maior que 'a' e 'b' ");
}

// exercício 4
let numero = 1;

function verifica(numero) {
    if (numero > 0) {
        return "positive";
    } else if (numero < 0) {
        return "negative";
    } else {
        return "zero";
    }
}

verifica();

// exercício 5
function triangulo(angulo1, angulo2, angulo3) {
    if (angulo1 <= 0 || angulo2 <= 0 || angulo3 <= 0) {
        return "Erro: um ou mais ângulos são inválidos.";
    } else if (angulo1 + angulo2 + angulo3 == 180) {
        return true;
    } else {
        return false;
    }
}

// exercício 6
function movimentosDaPeca(nomePeca) {
    let peca = nomePeca.toLowerCase();
    let movimentos = "";

    switch (peca) {
        case "rainha":
            movimentos = "move-se na horizontal, na vertical e na diagonal";
            break;
        case "rei":
            movimentos = "move-se em todas as direções, uma casa por vez";
            break;

    }

    return movimentos;
}

movimentosDaPeca();

// exercício 7

let nota = 100;

if (nota >= 90 && nota < 100) {
    console.log("A");
} else if (nota >= 80 && nota < 90) {
    console.log("B");
} else if (nota >= 70 && nota < 80) {
    console.log("C");
} else if (nota >= 60 && nota < 70) {
    console.log("D");
} else if (nota >= 50 && nota < 60) {
    console.log("E");
} else if (nota < 50) {
    console.log("F");
} else if (nota < 0 || nota > 100) {
    console.log("Ops, alguma nota pode estar com o valor errado, por favor confira e tente novamente!");
} else {
    console.log("Por favor, digite um nota!");
}

// exercício 8

let num1 = 10;
let num2 = 30;
let num3 = 55;

function numPar(num1, num2, num3) {
    if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
        return true;
    } else {
        return false
    }
}

numPar()

// exercício 9
function numImpar(num1, num2, num3) {
    if (num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0) {
        return true;
    } else {
        return false;
    }
}

// exercício 10
let custo = 100;
let lucro = custo + (custo / 100 * 50)

// exercício 11
let aliquotINSS;
let aliquotIR;

let grossSalary = 2000.00;

if (grossSalary <= 1556.94) {
    aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
    aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
    aliquotINSS = grossSalary * 0.11;
} else {
    aliquotINSS = 570.88;
}

let baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
    aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
    aliquotIR = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
    aliquotIR = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
    aliquotIR = (baseSalary * 0.225) - 636.13;
} else {
    aliquotIR = (baseSalary * 0.275) - 869.36;
};

console.log("Salário: " + (baseSalary - aliquotIR));