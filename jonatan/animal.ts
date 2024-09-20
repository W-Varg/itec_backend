interface IAminal {
    nombre: string;
    tipo: string;

    dimeTuTipo(): string;
}

class Animal implements IAminal {
    nombre: string;
    tipo: string = '';

    constructor(nomAnimal: string, tipAnimal: string) {
        this.nombre = nomAnimal;
        this.asignarTipo(tipAnimal);
    }

    public dimeTuTipo(): string {
        return `Mi nombre es ${this.nombre} y soy un ${this.tipo}`
    }

    private asignarTipo(tipAnimal: string) {
        this.tipo = tipAnimal;
    }
    
}

// const animal = new Animal("gato", "mamifero");
// const valorRetornado:string = animal.dimeTuTipo();
// console.log(valorRetornado);

// const animal2 = new Animal("Leon", "felino");
// const valorRetornado2:string = animal2.dimeTuTipo();
// console.log(valorRetornado2);

class Perro extends Animal {
     raza: string = '';

    public asignarRaza(nuevaRaza:string){
        this.raza = nuevaRaza;
    }

    public dimeTuRaza(): string {
        return `Mi raza es ${this.raza} y soy de tipo ${this.tipo}`
    }
}

class Marino extends Animal {
    tipoPescado: string = '';

    public dimeTuTipo(): string {
        return `Soy pescado de tipo ${this.tipoPescado}`
    }

    public asignar(tipoPescado: string) {
        this.tipoPescado = tipoPescado;
    }
}

const perro = new Perro("Pequeñin", "canino");
perro.asignarRaza("Chiwawa");
const resultadoRaza = perro.dimeTuRaza(); 
console.log(resultadoRaza);

const marino = new Marino("Marisco", "Marino");
marino.asignar("Pescado de agua salada");
const resultadoTipo = marino.dimeTuTipo(); 
console.log(resultadoTipo);