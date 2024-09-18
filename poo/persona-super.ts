interface IMateria {
    temas: string[]

    asignarTema(nombreTema:string): void
    mostrarTemas(): void
}



class Materia implements IMateria {
    nombre?: string
    
    temas: string[] = []

    constructor( name: string) {
        this.nombre = name;
        this.temas = [];
    }

    asignarTema(nombreMateria:string): void {
        this.temas.push(nombreMateria);
    }

    mostrarTemas(): void {
        console.log(this.temas);
    }
}

const materia = new Materia("Matematicas");
materia.asignarTema("Calculo I"); 
materia.asignarTema("Calculo II"); 
materia.mostrarTemas();

class SubMateria extends Materia {

    nombreSubMateria?: string
    estudiantes:string[] = [] // array

    constructor( nombreMateria: string, nombreSubMateria: string) {
        super(nombreMateria);
        this.nombreSubMateria = nombreSubMateria
        this.estudiantes = []
    }

    asignarEstudiante(nombreEstudiante:string){
        this.estudiantes.push(nombreEstudiante)
    }
    eliminarEstudiante(nombreEstudiante:string){
        // this.estudiantes // ['Wilber', 'Cesar', 'Violeta', 'Jonatan']
        const estudianteEntrado = this.estudiantes.find((elArray)=> nombreEstudiante.toUpperCase()===elArray.toUpperCase()) // simulador de for
        // JONATAN ==== JONATAN
        // NULL
        if(estudianteEntrado){
            this.estudiantes = this.estudiantes.filter((elArray)=> nombreEstudiante.toLowerCase() !== elArray.toLowerCase()) // wilber !== Wilber
            //inicialmente es false, true

            //Jonatan -> jonatan   -> JONATAN -> jonatan
        }

    }

    mostrarEstudiantes(): void {
        console.log(this.estudiantes);
    }
}

const subMateria = new SubMateria("Biologia", "Quimica");
subMateria.asignarEstudiante("Wilber");
subMateria.asignarEstudiante("Cesar");
subMateria.asignarEstudiante("Violeta");
subMateria.asignarEstudiante("jonAtan");
subMateria.mostrarEstudiantes();
subMateria.eliminarEstudiante("Cesar");
subMateria.mostrarEstudiantes();

subMateria.eliminarEstudiante("JONATAN");
subMateria.mostrarEstudiantes();

