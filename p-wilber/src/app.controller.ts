import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  invitados = ['jonatan']
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  crearlistaestudiantes() {
  return 'lista';
  }
  @Post()
  RecibeInvitados(){
    
  }
}
