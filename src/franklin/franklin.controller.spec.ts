import { Test, TestingModule } from '@nestjs/testing';
import { FranklinController } from './franklin.controller';
import { FranklinService } from './franklin.service';

describe('FranklinController', () => {
  let controller: FranklinController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FranklinController],
      providers: [FranklinService],
    }).compile();

    controller = module.get<FranklinController>(FranklinController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
