import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    const resultado = this.appService.getHello();
    return resultado;
  }

  @Get('/estudiantes')
  getEstudiantes() {
    return ['Wilber', 'Cesar', 'Violeta', 'Jonatan', 'marcelo'];
  }

  @Get('/buscar/:nombre')
  buscarEstudiante(@Param('nombre') nombre: string) {
    return this.appService.buscarEstudiante(nombre);
  }
}

// @Post()

// @Put()

// @Delete()
