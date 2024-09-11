import { log } from "console";

class OperamacionMatematica {

    valor1: number = 0;
    valor2: number = 0;

    constructor( num1: number,  num2: number) {
        this.valor1= num1;
        this.valor2 = num2;
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


    // marcelo, multiplicar

}
const resultado = new OperamacionMatematica(3, 4);
resultado.suma();
resultado.resta();
resultado.multiplica();
