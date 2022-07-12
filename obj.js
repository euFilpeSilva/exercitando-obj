let amigo = {
   nome: 'Filipe',
   sexo: 'M',
   peso: 55.6,
// quando definimos um valor padrão numa variavel passada como parametro
// é uma maneira de evitar problemas, ou seja, se não passarmos valor nenhum nos
// parametros, o valor sera aquele que esta pré definido na variavel que se encontra
// na area de parametros da função

// função que pega o peso e passa como argumento atraves do this
// somando ao peso atual
engordar(p = 0) {
    console.log('Engordou')
    this.peso += p
}
}

amigo.engordar(4.4)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)
