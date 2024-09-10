# TIPOS DE DATOS

 - NUMERICOS sin valor decimal
    : 1,2,3 -1, -2 0 , -100, -1351351
 - FLOAT
    : 1.00 ,2.01, 3.00 -1.7156, 3.141516
 

 - STRING: cadenas de texto "hola mundo" 'hola mundo'
 - ARRAY = LISTA : [1,2,3,4,5,6,7,8,9]
     - cada uno es un elemento de array/lista
     - de tipo numerico 
        const lista = [1 ,2,3,4,5,6,7,8,9]
     - de tipo string ['ramiro', 'marcelo', 'violeta', 'jonatan', 1 , "algo"] 
     - de tipo json [{"nombre": 'carlos', edad:22},{"nombre": 'wilver', edad:10}]

- OBJETO 
    formato json
        {
            "nombre": 'carlos',
            edad:22
            nota: 65.7
            esMayor: false
            direccion: {
                calle: "nataniel aguirre"
                numero: 54
            }
            mascotas:["loro", 'perro', 'gato']
        }
- BOOLEANOS
    solo tiene 2 posibles valores
        true, false

- Date -> fechas "2024-08-29 20:26:17"
    new Date()

- any|unknown|undefined|null
    desconocidos


lista
    // shift() -> elimina ,unshift()->iserta al principio
    // push() -> insertar al final, .pop() // remueve del final

## configurar git despues de instalar
git config --global user.name "Wilver vargas"

git config --global user.email "kryshot05@gmail.com"



## comando de git
git pull -> para traer cambios

git push  -> para subir cambios

git fetch -> para actulizar cambios


git log

para ver ramas
git branch

para cambiar de ramas
```sh
git checkout -b jonatan
```

subir rama a remote

```sh
git push -u origin mi_rama_wilver
```
cambiar de rama 

```sh
git checkout jonatan
```

para traer cambios de otra rama (juntar)
```sh
git merge mi_rama_wilver
```
sincroniza local y remoto
```sh
git fetch origin
```

ver historial de cambios
```sh
git log
```

# Typescript

archivo .ts cuando se transpila .js

bugs -> error

<!-- instalar typescript -->
npm install typescript ts-node @types/node --save-dev

npm i typescript ts-node @types/node -D

npm install nodemon

# instalacion de forma global de paquetes npm

npm install ts-node --global
npm install ts-node -g


## configuracion de typescript para ejecutar en consola

npx tsc --init

## ejecutar codigo .ts
npx ts-node ejemplo.ts --watch

## transformar .ts a .js
npx tsc ejemplo.ts --outFile mi_archivo.js


## nestjs -> backend

