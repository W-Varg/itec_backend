
type DatosPersona ={// esqueleto, 
    nombre:string
    primerApellido:string
    segundoApellido?:string
    fechaNacimiento: Date
    estaVivo?:boolean
}

type AsiDebeSerLaRespuesta ={// esqueleto, 
    numero:number
    mensaje:string
}

// disponible para importar en otros lados
export type AsiDebeSerLaRespuesta3  = AsiDebeSerLaRespuesta & {
    valor:boolean
}




interface Respuesta2 { // esqueleto
    numero:number
    mensaje:string
    valor:boolean, // ? este valor es opcional
}

class OperamacionMatematica {

    // atributos
    readonly esMayorDe: number = 18;
    protected valor1: number = 0;
    valor2: number = 0;

    constructor( num1: number,  num2: number) {
        this.valor1= num1;
        this.valor2 = num2;
        this.esMayorDe = 20;
    }
    // wilver, area de un circulo
    // uso de type
    public areaCirculo(datosPersona:DatosPersona):AsiDebeSerLaRespuesta {
       const radio = this.valor1;
        const area = Math.PI * Math.pow(radio, 2); // pi * r2 
        console.log(area);
        return { numero:135, mensaje:"Area del circulo"}
    }

        // uso de interface
    public areaCirculo2():Respuesta2 {
        const radio = this.valor1;
         const area = Math.PI * Math.pow(radio, 2); // pi * r2 
         console.log(area);
         return { numero:135, mensaje:"Area del circulo",valor:true}
     }

     // uso de type con extension de atributos
     public areaCirculo3():AsiDebeSerLaRespuesta3 {
        const radio = this.valor1;
         const area = Math.PI * Math.pow(radio, 2); // pi * r2 
         console.log(area);
         return { numero:135, mensaje:"Area del circulo",valor:true}
     }

    //  hace uso de type para datos de entrada
     public areaCirculo4(datosEntrada:AsiDebeSerLaRespuesta3):Respuesta2 {
        const radio = this.valor1;
         const area = Math.PI * Math.pow(radio, 2); // pi * r2 
         console.log(area);
         return { numero:135, mensaje:"Area del circulo",valor:true}
     }


    static valorPi(){
        return Math.PI
    }

    // violeta, sumar, restar, multiplicar
    private suma(){        
        console.log("La suma es:",this.valor1+this.valor2);
    }   
    public resta(){
        this.suma();
        console.log("La resta es:",this.valor1-this.valor2);
    } 
    public multiplica(){
        console.log("El producto es:",this.valor1*this.valor2);
    } 

    
    // wilber , dividir a /b, retorne el resto
      
        // Método para realizar la división de valor1 entre valor2.
        division(): number {
          if (this.valor2 === 0) {
            throw new Error("No se puede dividir por cero.");
          }
          return this.valor1 / this.valor2;
        }
        resto(): number {
          if (this.valor2 === 0) {
            throw new Error("No se puede calcular el resto con divisor cero.");
          }
          return this.valor1 % this.valor2;
        }
      
      

    // cesar, sacar el exponente, raiz cuadrada
    exp_raiz(){
        const elevado = Math.pow(this.valor1, this.valor2);
        const raiz = Math.sqrt(this.valor1);
        const raiz2 = Math.sqrt(this.valor2);
        console.log(this.valor1 + "elevado a" + this.valor2, "=" , elevado);
        console.log("La raiz cuadrada de " + this.valor1 + "=", raiz);
        console.log("La raiz cuadrada de " + this.valor2 + "=", raiz2);
    }

    // marcelo, multiplicar

}
const resultado = new OperamacionMatematica(3, 4);
// // resultado.suma();
const datosPersona = resultado.areaCirculo({
    nombre:"Wilber",
    primerApellido:"Vargas",
    fechaNacimiento:new Date(),
    estaVivo:true,
});

const result2 = resultado.areaCirculo4({mensaje:"Area del circulo",numero:135, valor:true});
console.log(result2.mensaje);

// // resultado.resta();
// resultado.multiplica();

const pi = OperamacionMatematica.valorPi();
console.log(pi)



