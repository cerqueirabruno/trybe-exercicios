// 1
function imprimeIdade() {
    for (let idade = 30; idade <= 40; idade += 1) {
        console.log('Idade dentro do for:', idade)
    }
}
imprimeIdade()

// 2
// Executando esse código, recebe-se um erro `TypeError: Assignment to constant variable.`
const pessoa = {
    nome: 'Henri',
    idade: 20
}

pessoa.nome = 'luna';
pessoa.idade = 19;

console.log('Nome:', pessoa.nome);
console.log('Idade:', pessoa.idade);

// 3
let favoriteFood = 'Lasanha';
favoriteFood = 'Hambúrguer';
console.log(favoriteFood);

// 4
const nome = 'Adriana';
const lastName = 'Soares';

console.log(`Olá ${nome} ${lastName}!`);

function soma(a, b) {
    let resultado = a + b;
    return resultado;
}

let a = 3;

let b = 5;

console.log(`O resultado da soma de ${a} + ${b} é: ${a + b}`);

// 5
function numeroAleatorio => Math.random();

console.log(numeroAleatorio());
