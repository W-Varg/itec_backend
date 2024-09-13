interface IFigurasGeometricas {
    calcularArea(): number; 
}


class FigurasGeometricas implements IFigurasGeometricas {
    protected area: number;

    constructor() {
        this.area = 0;
    }

    public calcularArea(): number {
        return this.area;
    }
}

class Cuadrado extends FigurasGeometricas {
    private lado: number;

     constructor(lado: number) {
        super();  
        this.lado = lado;
    }

    public calcularArea(): number {
        this.area = this.lado * this.lado; 
        return this.area; 
    }
}

class Circulo extends FigurasGeometricas {
    private radio: number;

      constructor(radio: number) {
        super();  
        this.radio = radio;
    }

    public calcularArea(): number {
        this.area = Math.PI * this.radio * this.radio;
        return this.area; 
    }
}

class Rectangulo extends FigurasGeometricas {
    private largo: number;
    private ancho: number;

     constructor(largo: number, ancho: number) {
        super();         
        this.largo = largo;
        this.ancho = ancho;
    }


    public calcularArea(): number {
        this.area = this.largo * this.ancho; 
        return this.area; 
    }
}

class Rombo extends FigurasGeometricas{
    private Diagonalmayor: number;
    private Diagonalmenor: number;

    constructor (Diagmayor:number, diagmenor:number){
        super();
        this.Diagonalmayor = Diagmayor;
        this.Diagonalmenor = diagmenor;
    }
    public calcularArea(): number {
        this.area = (this.Diagonalmayor * this.Diagonalmenor)/2
        return this.area;
    }
}

class Hexagono extends FigurasGeometricas{
    private a:number;

    constructor(ladoa:number){
        super();
        this.a = ladoa;
    }
    public calcularArea(): number {
        this.area = ((3*Math.sqrt(3))/2)*Math.pow(this.a,2);
        return this.area;
    }
}

const cuadrado = new Cuadrado(5);
console.log("Área del cuadrado:", cuadrado.calcularArea()); 

const circulo = new Circulo(3);
console.log("Área del círculo:", circulo.calcularArea()); 

const rectangulo = new Rectangulo(4, 6);
console.log("Área del rectángulo:", rectangulo.calcularArea()); 

const rombo = new Rombo(7, 8);
console.log("Área del rombo:", rombo.calcularArea());

const hexa = new Hexagono(5);
console.log("Área del Hexagono:", hexa.calcularArea());
