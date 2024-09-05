function ordenar(){
    const listaNumero = [1,58,93, 153,,18,31,8321,63,831,5348,3,18];
    console.log(listaNumero.length); // 4   

    const listaOrdenada = [];
    for (let i = 0; i < listaNumero.length; i++) { //tamaño del vector
        for (let j = 0; j < listaNumero.length; j++) { //tamaño del vector ordena
            const element = array[j];
            if(listaNumero[i]<listaNumero[j+1]){
                listaOrdenada[j]=listaNumero[i];
            }   
          }
        
        

    }
    // console.log("lista ordenada", listaOrdenada);    
}