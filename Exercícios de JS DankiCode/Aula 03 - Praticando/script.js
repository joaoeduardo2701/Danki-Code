function Pessoa()
{
    this.returnAnimal = function(animal){
        return animal
    }
}

function Animal(nome, raça)
{
    this.nome = nome
    this.raça = raça
}

var animal = new Animal()
var pessoa = new Pessoa()

animal.nome = "Cachorro"
animal.raça = "Bulldog"

console.log(pessoa.returnAnimal(animal.nome))
console.log(pessoa.returnAnimal(animal.raça))
