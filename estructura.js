// // git config --global user.name "Wilver vargas"

// // git config --global user.email "kryshot05@gmail.com"


// // …or create a new repository on the command line
// // echo "# itec_backend" >> README.md
// // git init
// // git add README.md
// // git commit -m "first commit"
// // git branch -M main
// // git remote add origin https://github.com/W-Varg/itec_backend.git
// // git push -u origin main
// // …or push an existing repository from the command line
// // git remote add origin https://github.com/W-Varg/itec_backend.git
// // git branch -M main
// // git push -u origin main


// Ejercicio 19: Ordenar un array de números en orden ascendente
// Descripción: Escribe un programa que ordene un array de números en orden ascendente.
// Instrucciones:

// Declara un array numeros con varios números.
//     const numero = [1,58,93,18,31,8321,63,831,5348,3,18]
// Usa el método sort para ordenar el array.

// Imprime el array ordenado en la consola.

var listaNumero = [1,58,93, 153 ,18,31,8321,63,831,5348,3,7485]; // 8
function ordenar(lista){ // argumentos, parametros
    // shift() -> elimina ,unshift()->iserta al principio
    // push() -> insertar al final, .pop() // remueve del final

    // console.log("tamaño = ", lista.length); // 4   

    const lista = [];
    for (let i = 0; i < lista.length -1; i++) {
        for (let j = 0; j < lista.length -1 - i; j++) {
            const primerElemento = lista[j]; // 1,
            const segundoElemento = lista[j +1]; //58
            
            if(primerElemento > segundoElemento){
                listaOrdenada[j] =segundoElemento; // insertar al final, insertar princpio, eliminar de principio, eliminar ultimo
                lista[j+1] = primerElemento;
            }
                
        }
    }
    console.log("lista desordenada =", listaOrdenada);    

    // console.log(listaNumero.sort((elemeno1, elemento2) => elemento2 -elemeno1   ))
}


ordenar(listaNumero);