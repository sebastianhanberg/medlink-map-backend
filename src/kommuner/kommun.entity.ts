import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Kommun {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('simple-array')
  center: number[];

  @Column()
  population: number;

  @Column()
  area: number;

  @Column({ default: false })
  isRegion: boolean;

  @Column({ default: false })
  hasAgreement: boolean;

  @Column({ type: 'text', nullable: true })
  additionalInfo: string;
}
