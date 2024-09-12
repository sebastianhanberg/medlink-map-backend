import { Controller, Get, Param } from '@nestjs/common';
import { CountiesService } from './counties.service';
import * as swedenCounties from '../data/sweden-counties.json';

@Controller('counties')
export class CountiesController {
  constructor(private readonly countiesService: CountiesService) {}

  @Get()
  findAll() {
    return swedenCounties;
  }

  @Get('search/:name')
  search(@Param('name') name: string) {
    return this.countiesService.search(name);
  }
}
