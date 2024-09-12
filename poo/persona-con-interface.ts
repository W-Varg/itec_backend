
import {RespuestaSaludo} from "./types";

//esquelito
interface DatoDeTransferencia {
    nombre3:string;
}

interface PersonaInterface {
    nombre: string;
    edad: number;
    saludar(datoEntrada: DatoDeTransferencia):RespuestaSaludo
    dimeSiEstoyVivo():boolean
}

class Persona implements PersonaInterface {
    //atributos
    nombre: string;
    edad: number;
    estaVivo: boolean;

    // inicializador de valores
    constructor( nombre1: string,  edadEntrada: number) {
        this.nombre = nombre1;
        this.edad = edadEntrada;
        this.estaVivo = true;
    }

    dimeSiEstoyVivo(){
        return this.estaVivo
    }

    // funciones, metodos, acciones, subFunciones
    // por defecto public
    public saludar(datoEntrada: DatoDeTransferencia):RespuestaSaludo {
        //dato objeto de tipos json
        const message = `Hola, mi nombre es ${this.nombre}
        y tengo ${this.edad} anios, mando saludos a
        ${datoEntrada.nombre3} y tengo 0 anios`;
        // this.misDatos()
        return{message}
    }

    private misDatos() {
        console.log({
            nombre:this.nombre,
            edad:this.edad,
            estaVivo:this.estaVivo}
        );
    }
}

//inicializar "instPersona" de tipo "Persona"
const instPersona = new Persona("Wilber", 25);
const respuesta = instPersona.saludar({nombre3:"Cesar"});
console.log(respuesta.message);

