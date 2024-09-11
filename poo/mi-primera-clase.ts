import { log } from "console";

class OperamacionMatematica {

    valor1: number = 0;
    valor2: number = 0;

    constructor( num1: number,  num2: number) {
        this.valor1= num1;
        this.valor2 = num2;
    }
    // wilver, area de un circulo
    areaCirculo() {
       const radio = this.valor1;
        const area = Math.PI * Math.pow(radio, 2); // pi * r2 
        console.log(area);
    }

    // violeta, sumar, restar, multiplicar
    suma(){        
        console.log("La suma es:",this.valor1+this.valor2);
    }   
    resta(){
        console.log("La resta es:",this.valor1-this.valor2);
    } 
    multiplica(){
        console.log("El producto es:",this.valor1*this.valor2);
    } 

    
    // wilber , dividir a /b, retorne el resto


    // cesar, sacar el exponente, raiz cuadrada
    exp_raiz(){
        const elevado = Math.pow(this.valor1, this.valor2);
        const raiz = Math.sqrt(this.valor1);
        const raiz2 = Math.sqrt(this.valor2);
        console.log(this.valor1 + "elevado a" + this.valor2 "=" elevado);
        console.log("La raiz cuadrada de " + this.valor1 + "=" raiz);
        console.log("La raiz cuadrada de " + this.valor2 + "=" raiz2);
    }

    // marcelo, multiplicar

}
const resultado = new OperamacionMatematica(3, 4);
resultado.suma();
resultado.resta();
resultado.multiplica();
