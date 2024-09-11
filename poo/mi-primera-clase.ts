
class OperamacionMatematica {

    valor1: number = 0;
    valor2: number = 0;

    constructor( num1: number,  num2: number) {
        this.valor1= num1;
        this.valor2 = num2;
    }

    // violeta, sumar, restar, multiplicar
       

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


    // marcelo, multiplicar

}