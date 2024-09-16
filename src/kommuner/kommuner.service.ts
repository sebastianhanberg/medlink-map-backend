import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { Kommun } from './kommun.entity';

@Injectable()
export class KommunerService {
  constructor(
    @InjectRepository(Kommun)
    private kommunerRepository: Repository<Kommun>,
  ) {}

  async findAll(): Promise<Kommun[]> {
    return this.kommunerRepository.find();
  }

  async searchKommun(query: string): Promise<Kommun[]> {
    return this.kommunerRepository.find({
      where: { name: Like(`%${query}%`) },
    });
  }

  async create(kommunData: Partial<Kommun>): Promise<Kommun> {
    const kommun = this.kommunerRepository.create(kommunData);
    return this.kommunerRepository.save(kommun);
  }

  async getSuggestions(query: string): Promise<Kommun[]> {
    return this.kommunerRepository.find({
      where: { name: Like(`${query}%`) },
      take: 5,
    });
  }

  async update(id: number, kommunData: Partial<Kommun>): Promise<Kommun> {
    await this.kommunerRepository.update(id, kommunData);
    return this.kommunerRepository.findOne({ where: { id } });
  }
}
