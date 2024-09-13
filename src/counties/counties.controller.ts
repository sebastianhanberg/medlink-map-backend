import { Controller, Get, Query } from '@nestjs/common';
import { CountiesService } from './counties.service';

@Controller('counties')
export class CountiesController {
  constructor(private readonly countiesService: CountiesService) {}

  @Get('search')
  async searchCounty(@Query('query') query: string) {
    return this.countiesService.searchCounty(query);
  }
}
