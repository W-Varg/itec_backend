// herencia
// encapsulacion
// abstraccion
// polimorfismo

type EdadDatoDeEntrada ={
    edad:number
}
interface IPersona {
    nombre: string|undefined;
    asignarEdad(dto:EdadDatoDeEntrada):void
}

class DatosPersona implements IPersona {
    nombre: string|undefined =undefined;
    private edad: number = 0;

    // inicializar valores iniciales
    constructor(valo11: string) {       
        this.nombre = valo11;
    }

    asignarEdad(dto:EdadDatoDeEntrada): void {
       this.edad = dto.edad
       console.log(`se asigno la edad = ${this.edad}`);
    }

    retornarMiNombre(){
     return this.nombre;
    }

    private metodo1() {
        console.log("metodo1");
    }

    funcion2(){
        console.log("funcion2");
    }
    accion3(){
        console.log("accion3");
    }
}

const persona = new DatosPersona("Wilber");
console.log(persona.retornarMiNombre());
 

class Usuario extends DatosPersona {

    contrasena: string = "Admin123";
    // constructor( name: string) {
    //     super(name);
    // }
    asignarNombre(name: string) {
        this.nombre = name;
    }

    asignarContrasena(contrasena: string) {
        this.contrasena = contrasena;
    }
}

const usuario = new Usuario("Violeta");
usuario.asignarEdad({edad: 20});