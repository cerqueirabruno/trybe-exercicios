// 1
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log("Bem vindo(a),", info.personagem);

// 2
info['recorrente'] = "sim";

console.log(info);

// 3
for (let index in info) {
    console.log(index);
}

console.log("------------------");

// 4
for (let index in info) {
    console.log(info[index]);
}

// 5
let info2 = Object.assign(info)

console.log(info2);





// outros
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
        {
            titulo: 'O Pior Dia de Todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas',
        },
    ],
};

// 1
console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama "' + leitor.livrosFavoritos[0].titulo + '"');

// 2
leitor.livrosFavoritos.push(
    {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
    },
);

// 3
console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.');