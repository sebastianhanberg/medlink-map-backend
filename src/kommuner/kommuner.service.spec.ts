import { Test, TestingModule } from '@nestjs/testing';
import { KommunerService } from './kommuner.service';

describe('KommunerService', () => {
  let service: KommunerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KommunerService],
    }).compile();

    service = module.get<KommunerService>(KommunerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
