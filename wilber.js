
var listaNumero = [1, 58, 93, 153, 18, 31, 8321, 63, 831, 5348, 3, 7485];
function ordenar(lista) {
    console.log("Tamaño = ", lista.length); 

    for (let i = 0; i < lista.length - 1; i++) {
        for (let j = 0; j < lista.length - 1 - i; j++) {
            const primerElemento = lista[j]; 
            const segundoElemento = lista[j + 1]; 
            
           
            if (primerElemento > segundoElemento) {
                lista[j] = segundoElemento; 
                lista[j + 1] = primerElemento; 
            }
        }
    }
    console.log("Lista ordenada =", lista); 
}


ordenar(listaNumero);
