import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FranklinService } from './franklin.service';
import { CreateFranklinDto } from './dto/create-franklin.dto';
import { UpdateFranklinDto } from './dto/update-franklin.dto';

@Controller('franklin')
export class FranklinController {
  constructor(private readonly franklinService: FranklinService) {}

  @Post()
  create(@Body() createFranklinDto: CreateFranklinDto) {
    return this.franklinService.create(createFranklinDto);
  }

  @Get()
  findAll() {
    return this.franklinService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.franklinService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFranklinDto: UpdateFranklinDto,
  ) {
    return this.franklinService.update(+id, updateFranklinDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.franklinService.remove(+id);
  }
}
