let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function addCliente(cliente) {
    if (typeof cliente === 'string') {
        clientesTrybeBank.push(cliente);
        return 'Cliente adicionado(a) com sucesso!'
    } else {
        return 'O parâmetro passado deve ser do tipo "string"!';
    }
}

addCliente('bruno');

console.log(clientesTrybeBank);