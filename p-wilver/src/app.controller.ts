import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiProperty } from '@nestjs/swagger';

class DatosDeEntrada {
  @ApiProperty() // habilita el campo para ver en el swagger
  nombre: string;

  // @ApiProperty() //, nose meustra en el swagguer
  edad: number;
}

@Controller()
export class AppController {
  invitados = ['Jonatan'];

  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    const resultado = this.appService.getHello();
    return resultado;
  }

  @Post()
  recibeInvitados(@Body() datos: DatosDeEntrada) {
    this.invitados.push(datos.nombre);

    return {
      mensaje: `invitado ${datos.nombre} agregado`,
      listaInvitados: this.invitados,
    };
  }

  @Delete()
  retornarAnimal() {
    return `listado de animal`;
  }
}

// @Post()

// @Put()

// @Delete()
