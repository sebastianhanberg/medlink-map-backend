import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class County {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('simple-array')
  center: number[];


  @Column({ default: true })
  isRegion: boolean;

  @Column({ default: false })
  hasAgreement: boolean;

  @Column({ type: 'text', nullable: true })
  additionalInfo: string;
}
