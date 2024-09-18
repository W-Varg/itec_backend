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
            insertarEstudiante()
            break;
        case '2':
            actualizarEstudiante()
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

function insertarEstudiante(){
    rl.question("Ingresa el nombre del estudiante: ",  (nombreEstudiante) => {
        estudiantes.push(nombreEstudiante)
        mostrarMenu()
     })
}

function actualizarEstudiante() {
    rl.question("Ingresa el nombre del estudiante a actualizar: ", (nombreEstudiante) => { 
        const nombreactualizado = estudiantes.indexOf(nombreEstudiante); 
        if (nombreactualizado === -1) { 
            console.log(`Estudiante ${nombreEstudiante} no encontrado.`);
        } else { 
            rl.question("Ingresa el nuevo nombre del estudiante: ", (nuevoNombre) => {
                estudiantes[nombreactualizado] = nuevoNombre; 
                console.log(`Estudiante actualizado a ${nuevoNombre}.`); 
            });
        }
        mostrarMenu(); 
    });
}





mostrarMenu()


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



