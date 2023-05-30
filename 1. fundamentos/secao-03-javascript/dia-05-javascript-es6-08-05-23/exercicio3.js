// 1
let motorLigado = true;

function onOff() {
    if (motorLigado == true) {
        return console.log('desligando motor')
    } else if (motorLigado == false) {
        return console.log('ligando motor');
    }
}

onOff();


// 2
const circleArea = (radius) => {
    const PI = 3.14;

    if (typeof radius !== 'number') {
        return 'O parâmetro radius deve ser um número';
    }

    let area = PI * (radius ** 2);
    return `Esta é a área do círculo: ${area}`;
};

// 3
const longestWord = (text) => {
    const wordArray = text.split(' ');
    let maxLength = 0;
    let result = '';

    for (const word of wordArray) {
        if (word.length > maxLength) {
            maxLength = word.length;
            result = word;
        }
    }

    return result;
}

console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu'));