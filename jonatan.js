// Declara un array de números
const numeros = [1, 58, 93, 18, 31, 8321, 63, 831, 5348, 3, 18];

// Ordena el array en orden ascendente usando un bucle for (Bubble Sort)
for (let i = 0; i < numeros.length; i++) {
  for (let j = 0; j < numeros.length - 1; j++) {
    // Compara elementos adyacentes y los intercambia si están en el orden incorrecto
    if (numeros[j] > numeros[j + 1]) {
      // Intercambio de elementos usando destructuring
      [numeros[j], numeros[j + 1]] = [numeros[j + 1], numeros[j]];
    }
  }
}

// Imprime el array ordenado en la consola
console.log(numeros);
