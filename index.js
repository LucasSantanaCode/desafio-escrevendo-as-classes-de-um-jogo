class heroi{
    constructor(name,age,type,message){
    this.name = name
    this.age = age
    this.type = type
    this.message = message
    }

    atack(){
        console.log(`O ${this.type} atacou usando ${this.message}`)
    }

}

let mago = new heroi("Ellen", 27, "Mago", "Usou Magia")
let guerreiro = new heroi("Junior", 31, "Guerreiro", "Usou Espada")
let monge = new heroi("Iasis", 59 ,"Monge", "Usou Artes marciais")
let ninja = new heroi("Ellen", 33, "Ninja", "Usou Shuriken")

mago.atack()
guerreiro.atack()
monge.atack()
ninja.atack()