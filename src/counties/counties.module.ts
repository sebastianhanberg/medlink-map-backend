import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountiesService } from './counties.service';
import { CountiesController } from './counties.controller';
import { County } from './county.entity';

@Module({
  imports: [TypeOrmModule.forFeature([County])],
  providers: [CountiesService],
  controllers: [CountiesController],
})
export class CountiesModule {}