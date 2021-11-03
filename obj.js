let amigo = {nome: 'Filipe',
sexo: 'F',
peso: 55.6,
// quando definimos um valor padrão numa variavel sendo passada num parametro
// é uma maneira de evitar problemas, ou seja, se não passarmos valor nenhum nos
// parametros, o valor sera aquele que esta pré definido na variavel que se encontra
// na area de parametros da função

// função que pega o peso que eu vou passar la em baixo e passa como argumento atraves do this
// comando ao peso atual
engordar(p = 0) {
    console.log('Engordou')
    this.peso += p
}
}

amigo.engordar(4.4)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)
