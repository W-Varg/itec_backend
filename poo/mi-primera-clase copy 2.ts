import { AsiDebeSerLaRespuesta3 } from "./mi-primera-clase";


class OperamacionMatematica2 {

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
    public areaCirculo():AsiDebeSerLaRespuesta3 {
       const radio = this.valor1;
        const area = Math.PI * Math.pow(radio, 2); // pi * r2 
        console.log(area);
        return { numero:135, mensaje:"Area del circulo",valor:true}
    }


}

export class OperamacionMatematica3 {

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
    public areaCirculo():AsiDebeSerLaRespuesta3 {
       const radio = this.valor1;
        const area = Math.PI * Math.pow(radio, 2); // pi * r2 
        console.log(area);
        return { numero:135, mensaje:"Area del circulo",valor:true}
    }

    perimeto(){
        const perimetro = 2 * Math.PI * this.valor1;
        console.log(perimetro);
    }

    // 300 funciones, 200 mateicas, 100 operciones logicas +200 =300


}