let nota = 80;

if (nota >= 80) {
    console.log("Parabéns, você faz parte do grupo de pessoas aprovadas!");
} else if (nota < 80 && nota >= 60) {
    console.log("Você está na nossa lista de espera.");
} else if (nota < 60) {
    console.log("Infelizmente, você reprovou.");
} else {
    console.log("Por Favor, insira os dados!");
}