/*IProfession {
    nombre: string;

    dimeTuProfesion(): number;
}

-- crear clases, y subclases,
private, public*/

interface IProfesion {
    nombre: string|undefined;
    tipo: string;
    dimeTuProfesion(): string;
}

class Profesion implements IProfesion{
    nombre: string;
    tipo: string;

    constructor(nompersona:string, tipoprofesion:string){
        this.nombre =nompersona;
        this.tipo = tipoprofesion;
    }
    
    public dimeTuProfesion(): string {
        return `Mi nombre es ${this.nombre} y mi profesión es ${this.tipo}`;
       
    }
    private clasificacion(){
        nombre: this.nombre;
        tipo: this.tipo;
        if(this.tipo == "Informática"){
            console.log(this.nombre, "tu profesión: ",this.tipo,"pertenece a: Tecnología")
        }else{
            console.log(this.nombre, "tu profesión: ",this.tipo,"pertenece a: Ciencias Económicas")
        }
    }
}

const instProfesion = new Profesion("Jose", "Informática");
const respuesta = instProfesion.dimeTuProfesion();
console.log(respuesta);