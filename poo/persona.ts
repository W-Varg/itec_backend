
import { Sexo } from "./persona.enum";
import {RespuestaSaludo} from "./types";

class Persona {
    //atributos
    nombre: string;
    edad: number;
    sexo: Sexo;

    // inicializador de valores
    constructor( nombre1: string,  edadEntrada: number, sexoEntrada: Sexo) {
        this.nombre = nombre1;
        this.edad = edadEntrada;
        this.sexo = sexoEntrada;
    }

    // funciones, metodos, acciones
    // por defecto public
    saludar(datoEntrada: {nombre3:string, edad: number}):RespuestaSaludo {
        //dato objeto de tipos json
        const message = `Hola, mi nombre es ${this.nombre}
        y tengo ${this.edad} anios, mando saludos a
        ${datoEntrada.nombre3} y tengo ${datoEntrada.edad} anios`;
        return{message}
    }

}

//inicializar "instPersona" de tipo "Persona"
const instPersona = new Persona("Wilber", 25,Sexo.Masculino);
const respuesta = instPersona.saludar({nombre3:"Cesar", edad: 26});
console.log(respuesta.message);

