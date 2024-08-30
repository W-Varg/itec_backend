function ordenar(){
    let listanumerada = [1,58,93,18,31,8321,63,831,5348,3,18]
    console.log(listanumerada.length);

    const listaordenada = [];
    for (let i = 0; i < listanumerada.length; i++) {
        for (let j = 0; j < listanumerada.length-1; j++) {
            const elemento1 = listanumerada[j];
            const elemento2 = listanumerada[j+1];
            if(elemento1>elemento2){
                listaordenada = listanumerada[j];
                listanumerada[j] = listanumerada[j+1];
                listanumerada[j+1] = listaordenada;           
            }
        }
        
    }
    console.log("Lista ordenada =", listanumerada);    // safdsaf
}
ordenar();