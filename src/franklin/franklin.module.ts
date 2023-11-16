import { Module } from '@nestjs/common';
import { FranklinService } from './franklin.service';
import { FranklinController } from './franklin.controller';

@Module({
  controllers: [FranklinController],
  providers: [FranklinService],
})
export class FranklinModule {}
