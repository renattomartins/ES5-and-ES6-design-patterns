'use strict';

let _singleton = null

class Singleton
{
    // Cria uma nova instância se não existir
    // ou retorna a instância já existente
    constructor (data) {
        if(!_singleton) {
            this.data = data
            _singleton = this
        }
        else
            return _singleton
        console.log("Singleton class created")
    }

    SingletonOperation () {
        console.log('SingletonOperation')
    }

    GetSingletonData () {
        return this.data
    }
}

// Para testar:
function init_Singleton() {
    var singleton1 = new Singleton("data1")
    var singleton2 = new Singleton("data2")
    console.log(singleton1.GetSingletonData()) // data1
    console.log(singleton2.GetSingletonData()) // data1
    console.log(singleton1 instanceof Singleton) // true
    console.log(singleton2 instanceof Singleton) // true
    console.log(singleton1 === singleton2) // true
}
init_Singleton();

