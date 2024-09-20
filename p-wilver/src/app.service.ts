export class AppService {
  getHello() {
    return {
      message: 'Hello World!',
      nombre: 'Violeta',
      edad: 32,
    };
  }

  buscarEstudiante(nombre: string) {
    const estudiantes = ['Wilber', 'Cesar', 'Violeta', 'Jonatan', 'marcelo'];
    const estudianteEncontrado = estudiantes.find((cadaStd) => cadaStd.toUpperCase() === nombre.toUpperCase());

    if (estudianteEncontrado) {
      return `se encontro el estudiante = ` + estudianteEncontrado;
    }
    return 'No existe el estudiante';
  }
}
