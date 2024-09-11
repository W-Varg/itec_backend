
class OperamacionMatematica {

    valor1: number = 0;
    valor2: number = 0;

    constructor( num1: number,  num2: number) {
        this.valor1= num1;
        this.valor2 = num2;
    }

    // violeta, sumar, restar, multiplicar
       

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