
class Persona {
    nombre: string
    constructor( name: string) {
        this.nombre = name;
    }
}

class PersonaLatina extends Persona {
    comportamiento3() {
     console.log("metodo1");
    }
}

class PersonaEU extends PersonaLatina {
    comportamiento2() {
        console.log("metodo1");
       }
}

class PersonaEuroa extends Persona {
    comportamiento1() {
        console.log("accion3");
       }

       comportamiento3() {
        console.log("accion3");
       }
}