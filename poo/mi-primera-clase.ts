
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
       

    // wilber , dividir a /b, retorne el resto


    // cesar, sacar el exponente, raiz cuadrada


    // marcelo, multiplicar

}