import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KommunerService } from './kommuner.service';
import { KommunerController } from './kommuner.controller';
import { Kommun } from './kommun.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Kommun])],
  providers: [KommunerService],
  controllers: [KommunerController],
})
export class KommunerModule {}
