import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { CatService } from './cat.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('module cats')
@Controller('cats-controller')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Get()
  getHello(): string {
    return this.catService.getHello();
  }

  @Post()
  // @Authbearer()
  createCat() {}

  @Patch()
  updateCat() {}

  @Put()
  actualizarCat() {}

  @Delete()
  eliminarCat() {}
}
