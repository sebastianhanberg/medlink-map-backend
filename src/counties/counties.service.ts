import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { County } from './county.entity';

@Injectable()
export class CountiesService {
  constructor(
    @InjectRepository(County)
    private countiesRepository: Repository<County>,
  ) {}

  findAll(): Promise<County[]> {
    return this.countiesRepository.find();
  }

  async update(id: number, updateData: Partial<County>): Promise<County> {
    await this.countiesRepository.update(id, updateData);
    return this.countiesRepository.findOne({ where: { id } });
  }

  async search(query: string): Promise<County[]> {
    return this.countiesRepository.createQueryBuilder('county')
      .where('county.name LIKE :query', { query: `%${query}%` })
      .getMany();
  }
}