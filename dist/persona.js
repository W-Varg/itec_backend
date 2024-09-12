"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Persona = /** @class */ (function () {
    // inicializador de valores
    function Persona(nombre1, edadEntrada) {
        this.nombre = nombre1;
        this.edad = edadEntrada;
    }
    // funciones, metodos, acciones
    // por defecto public
    Persona.prototype.saludar = function (datoEntrada) {
        //dato objeto de tipos json
        var message = "Hola, mi nombre es ".concat(this.nombre, "\n        y tengo ").concat(this.edad, " anios, mando saludos a\n        ").concat(datoEntrada.nombre3, " y tengo ").concat(datoEntrada.edad, " anios");
        return { message: message };
    };
    return Persona;
}());
//inicializar "instPersona" de tipo "Persona"
var instPersona = new Persona("Wilber", 25);
var respuesta = instPersona.saludar({ nombre3: "Cesar", edad: 26 });
console.log(respuesta.message);
