// import { Controller, Get, Query } from '@nestjs/common';
// import { CountiesService } from './counties.service';

// @Controller('counties')
// export class CountiesController {
//   constructor(private readonly countiesService: CountiesService) {}

//   @Get('search')
//   async searchCounty(@Query('query') query: string) {
//     return this.countiesService.searchCounty(query);
//   }
// }

import { Controller, Get, Post, Body, Query, Put, Param } from '@nestjs/common';
import { CountiesService } from './counties.service';
import { County } from './county.entity';

@Controller('counties')
export class CountiesController {
  constructor(private readonly countiesService: CountiesService) {}

  @Get()
  async getAllCounties() {
    return this.countiesService.findAll();
  }

  @Get('search')
  async searchCounty(@Query('query') query: string) {
    return this.countiesService.searchCounty(query);
  }

  @Get('suggestions')
  async getSuggestions(@Query('query') query: string) {
    return this.countiesService.getSuggestions(query);
  }

  @Post()
  async createCounty(@Body() countyData: Partial<County>) {
    return this.countiesService.create(countyData);
  }

  @Put(':id')
  async updateCounty(
    @Param('id') id: string,
    @Body() countyData: Partial<County>,
  ) {
    return this.countiesService.update(+id, countyData);
  }
}
