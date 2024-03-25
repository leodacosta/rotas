const clientes = [
    {'id': 1, 'nome': 'Leonardo', 'email': 'teste@exemplo.com', 'telefone': '11 12345678'},
    {'id': 2, 'nome': 'Dante', 'email': 'teste@exemplo.com', 'telefone': '11 12345678'},
    {'id': 3, 'nome': 'Laila', 'email': 'teste@exemplo.com', 'telefone': '11 12345678'},
];

getClients = (req, res) => {
    res.status(200).send(clientes);
}

getOneClient = (req, res) => {
    let id = req.params.id;
    const cliente = clientes.find((item) => item.id === Number(id));
    if(cliente){
        res.status(200).send(cliente);
    } else {
        res.status(404).send("Cliente com o ID não foi encontrado. Tente novamente")
    }

}

createClient = (req,res) => {
    const cliente = req.body;
    if(Object.keys(cliente).length > 0){
        clientes.push(cliente);
        res.status(201).send(cliente);
    } else {
        res.status(406).send("Não foi possível adicionar este cliente.")
    }
}

updateClient = (req,res) => {
    let id = req.params.id;
    let indice = findClientIndex(id);
    clientes[indice] = req.body;
    res.status(201).send("Cliente atualizado com sucesso.")
}

findClientIndex = (id) => {
    const indice = clientes.findIndex((item) => item.id === Number(id));
    return indice;
}

removeClient = (req,res) => {
    let id = req.params.id;
    let indice = findClientIndex(id);
    clientes.splice(indice, 1);
    res.status(200).send(`Cliente com ID ${id} foi removido com sucesso.`)
}

module.exports = {getClients, getOneClient, createClient, updateClient, removeClient};