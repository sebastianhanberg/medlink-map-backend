import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class County {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('json')
  geometry: any;

  @Column({ nullable: true })
  color: string;

  @Column({ nullable: true })
  tag: string;
}