// CRIANDO A CLASSE
class heroi{
    constructor(name,age,type,message){
    this.name = name
    this.age = age
    this.type = type
    this.message = message
    }
    // MÉTODO ATAQUE
    atack(){
        console.log(`O ${this.type} atacou usando ${this.message}`)
    }

}

// CRIANDO OBJETOS A PARTIR DA CLASSE
let mago = new heroi("Ellen", 27, "Mago", "Usou Magia")
let guerreiro = new heroi("Junior", 31, "Guerreiro", "Usou Espada")
let monge = new heroi("Iasis", 59 ,"Monge", "Usou Artes marciais")
let ninja = new heroi("Ellen", 33, "Ninja", "Usou Shuriken")

// OBJETOS UTILIZANDO OS MÉTODOS
mago.atack()
guerreiro.atack()
monge.atack()
ninja.atack()