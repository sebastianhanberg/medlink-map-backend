import { Controller, Get, Put, Param, Body, Query } from '@nestjs/common';
import { CountiesService } from './counties.service';

@Controller('counties')
export class CountiesController {
  constructor(private readonly countiesService: CountiesService) {}

  @Get()
  findAll() {
    return this.countiesService.findAll();
  }

  @Get('search')
  search(@Query('query') query: string) {
    return this.countiesService.search(query);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateData: { color: string, tag: string }) {
    return this.countiesService.update(+id, updateData);
  }
}