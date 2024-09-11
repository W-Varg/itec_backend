import { log } from "console";

class OperamacionMatematica {

    // atributos
    readonly esMayorDe: number = 18;
    protected valor1: number = 0;
    valor2: number = 0;

    constructor( num1: number,  num2: number) {
        this.valor1= num1;
        this.valor2 = num2;
    }
    // wilver, area de un circulo
    public areaCirculo() {
       const radio = this.valor1;
        const area = Math.PI * Math.pow(radio, 2); // pi * r2 
        console.log(area);
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
// const resultado = new OperamacionMatematica(3, 4);
// // resultado.suma();
// resultado.areaCirculo();
// // resultado.resta();
// resultado.multiplica();

const pi = OperamacionMatematica.valorPi();
console.log(pi)