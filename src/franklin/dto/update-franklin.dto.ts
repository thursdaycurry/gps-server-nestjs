import { PartialType } from '@nestjs/mapped-types';
import { CreateFranklinDto } from './create-franklin.dto';

export class UpdateFranklinDto extends PartialType(CreateFranklinDto) {}
