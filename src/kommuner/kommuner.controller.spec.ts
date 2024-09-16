import { Test, TestingModule } from '@nestjs/testing';
import { KommunerController } from './kommuner.controller';

describe('KommunerController', () => {
  let controller: KommunerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KommunerController],
    }).compile();

    controller = module.get<KommunerController>(KommunerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
