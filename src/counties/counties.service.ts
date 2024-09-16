// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class CountiesService {
//   // This is a mock. In a real application, you'd fetch this from a database.
//   private counties = [
//     {
//       name: 'Stockholm',
//       center: [59.3293, 18.0686],
//       population: 935619,
//       area: 188,
//     },
//     {
//       name: 'Göteborg',
//       center: [57.7089, 11.9746],
//       population: 579281,
//       area: 447,
//     },
//     // Add more counties here
//   ];

//   async searchCounty(query: string) {
//     return this.counties.find((county) =>
//       county.name.toLowerCase().includes(query.toLowerCase()),
//     );
//   }
// }

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { County } from './county.entity';

@Injectable()
export class CountiesService {
  constructor(
    @InjectRepository(County)
    private countiesRepository: Repository<County>,
  ) {}

  async findAll(): Promise<County[]> {
    return this.countiesRepository.find();
  }

  async searchCounty(query: string): Promise<County[]> {
    return this.countiesRepository.find({
      where: { name: Like(`%${query}%`) },
    });
  }

  async create(countyData: Partial<County>): Promise<County> {
    const county = this.countiesRepository.create(countyData);
    return this.countiesRepository.save(county);
  }

  async getSuggestions(query: string): Promise<County[]> {
    return this.countiesRepository.find({
      where: { name: Like(`${query}%`) },
      take: 5, // Limit to 5 suggestions
    });
  }

  async update(id: number, countyData: Partial<County>): Promise<County> {
    await this.countiesRepository.update(id, countyData);
    return this.countiesRepository.findOne({ where: { id } });
  }
}
