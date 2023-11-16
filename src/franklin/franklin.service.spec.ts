import { Test, TestingModule } from '@nestjs/testing';
import { FranklinService } from './franklin.service';

describe('FranklinService', () => {
  let service: FranklinService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FranklinService],
    }).compile();

    service = module.get<FranklinService>(FranklinService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
