import * as readline from "readline";

// CRUD
// c -> create
// r -> read
// u -> update
// d -> delete
let estudiantes :string[] =[]
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
            borrarEstudiante();
            break;
        case '4':
            mostrarEstudiantes();
            break;
        case '5':
            mostrarTodosLosEstudiantes();
            break;
        default:
            salirPrograma()            
            break;
    }
}

const mostrarMenu= ()=>{
    console.log("1. Crear estudiante");
    console.log("2. Actualizar estudiante");
    console.log("3. Borrar estudiante");
    console.log("4. Mostrar estudiante");
    console.log("5. Mostrar todos los estudiantes");

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

function mostrarEstudiantes(){
    rl.question("Ingresa el nombre del estudiante: ",  (nombreEstudiante) => {
        const estudianteExiste = estudiantes.find((estudiantesexistentes)=> nombreEstudiante.toUpperCase()===estudiantesexistentes.toUpperCase());
        if(estudianteExiste){
            console.log(`El estudiante ${nombreEstudiante} si existe`)
        }else{
            console.log(`El estudiante ${nombreEstudiante} no existe`)
        }
        mostrarMenu()
     })

    }
function borrarEstudiante (){
    console.log(estudiantes);
    rl.question("Ingresa el nombre del estudiante a borrar: ",  (nombreEstudiante) => {
        estudiantes.push(nombreEstudiante)
        
        const borrar=estudiantes.find((array_nombre)=> nombreEstudiante.toUpperCase()===array_nombre.toUpperCase())
        if(borrar){
            estudiantes = estudiantes.filter((array_nombre)=> nombreEstudiante.toLowerCase() !== array_nombre.toLowerCase()) 
            console.log(estudiantes);
            
        }
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
                mostrarMenu();
            });
        }
        mostrarMenu(); 
    });
}

function mostrarTodosLosEstudiantes() {
    if (estudiantes.length === 0) {
        console.log("No hay estudiantes registrados.");
    } else {
        console.log("Lista de todos los estudiantes:");
        estudiantes.forEach((estudiante, index) => {
            console.log(`${index + 1}. ${estudiante}`);
        });
    }
    mostrarMenu();
}


// insertar -> c
// actualizar -> u -> wilber, -> existir, estudiante a acualizar, no existe estidan
// mostrar -> r -> violeta, nombre ediante, 
    // impirimir is existe o no
    // imprmir los estudiantes 

// borrar -> d -> cesar
    // verificar si existe en el array, si existe borrar
    // mostrar el la nueva lista de estudiante sin el estudiante a borrar
// motrarTotalEstudiantes -> jonatan
    // mostrar total de estudiantes
    // === 0, no hay estudiante
    //  === 1 solo hay 1 estudiante
    // > 1, los estudiantes son 861
    // mostrar los estudiantes

// mostrarMenuDeOperaciones
    // 1. Crear estudiante
    // 2. Actualizar estudiante
    // 3. Borrar estudiante
    // 4. Mostrar estudiante

// motrarTotalEstudiantes
// mostrarEstudiantesVarones
// mostrarEstudiantesMayores

function salirPrograma(){
    rl.close()
}

mostrarMenu()
