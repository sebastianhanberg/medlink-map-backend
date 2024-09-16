import { Controller, Get, Post, Body, Query, Put, Param } from '@nestjs/common';
import { KommunerService } from './kommuner.service';
import { Kommun } from './kommun.entity';

@Controller('kommuner')
export class KommunerController {
  constructor(private readonly kommunerService: KommunerService) {}

  @Get()
  async getAllKommuner() {
    return this.kommunerService.findAll();
  }

  @Get('search')
  async searchKommun(@Query('query') query: string) {
    return this.kommunerService.searchKommun(query);
  }

  @Get('suggestions')
  async getSuggestions(@Query('query') query: string) {
    return this.kommunerService.getSuggestions(query);
  }

  @Post()
  async createKommun(@Body() kommunData: Partial<Kommun>) {
    return this.kommunerService.create(kommunData);
  }

  @Put(':id')
  async updateKommun(
    @Param('id') id: string,
    @Body() kommunData: Partial<Kommun>,
  ) {
    return this.kommunerService.update(+id, kommunData);
  }
}
