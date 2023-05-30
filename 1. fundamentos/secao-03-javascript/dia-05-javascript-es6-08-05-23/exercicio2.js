const numeroAleatorio = () => {
  return Math.random();
}

console.log(numeroAleatorio());

// -----------------------------------------------

const nomeCompleto = (nome, sobrenome) => {
  return `${nome} ${sobrenome}`;
}

let nome = 'Ivan';

let sobrenome = 'Pires';

console.log(nomeCompleto(nome, sobrenome));

// --------------------------

let speed = 90;

const speedCar = (speed) => {
  return (speed >= 120 ? 'Você ultrapassou o limite de velocidade' : 'Você está na velocidade permitida' )
};

console.log(speedCar(speed));

// ------------------------------

