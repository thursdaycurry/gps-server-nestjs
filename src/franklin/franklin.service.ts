import { Injectable } from '@nestjs/common';
import { CreateFranklinDto } from './dto/create-franklin.dto';
import { UpdateFranklinDto } from './dto/update-franklin.dto';

@Injectable()
export class FranklinService {
  create(createFranklinDto: CreateFranklinDto) {
    return 'This action adds a new franklin';
  }

  findAll() {
    return `This action returns all franklin`;
  }

  findOne(id: number) {
    return `This action returns a #${id} franklin`;
  }

  update(id: number, updateFranklinDto: UpdateFranklinDto) {
    return `This action updates a #${id} franklin`;
  }

  remove(id: number) {
    return `This action removes a #${id} franklin`;
  }
}
