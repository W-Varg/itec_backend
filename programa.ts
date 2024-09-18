import * as readline from "readline";

// CRUD
// c -> create
// r -> read
// u -> update
// d -> delete
const estudiantes :string[] =[]
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function verificarDeOpcion(valorEntrada: string){ //1,23,3,4, dsafd
    switch (valorEntrada) {
        case '1':
            // async/ await -> 
            rl.question("Ingresa el nombre del estudiante: ",  (nombreEstudiante) => {
               insertarEstudiante(nombreEstudiante)
               console.log(estudiantes, "\n" /*agrega salto de linea*/);
               mostrarMenu()
            })

            
            break;
        case '2':
            console.log('eleccion opcion 2');
            break;
        case '3':
            console.log('eleccion opcion 3');
            break;
        case '4':
            console.log('eleccion opcion 4');
            break;
        default:
            console.log('opcion no valida');            
            break;
    }
}

const mostrarMenu= ()=>{
    console.log("1. Crear estudiante");
    console.log("2. Actualizar estudiante");
    console.log("3. Borrar estudiante");
    console.log("4. Mostrar estudiante");
    console.log("5. Salir");



    rl.question("Ingresa una opción: ", (opcion) => { // quedarse en espera hasta recibir un valor
        verificarDeOpcion(opcion)
    })
}



mostrarMenu()

function insertarEstudiante(nombreEstudiante: string){
    estudiantes.push(nombreEstudiante)
}

// insertar -> c
// actualizar -> u
// mostrar -> r
// borrar -> d

// mostrarMenuDeOperaciones
    // 1. Crear estudiante
    // 2. Actualizar estudiante
    // 3. Borrar estudiante
    // 4. Mostrar estudiante

// motrarTotalEstudiantes
// mostrarEstudiantesVarones
// mostrarEstudiantesMayores
