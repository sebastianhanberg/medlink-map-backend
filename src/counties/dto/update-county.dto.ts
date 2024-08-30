import { IsString, IsOptional } from 'class-validator';

export class UpdateCountyDto {
  @IsString()
  @IsOptional()
  color?: string;

  @IsString()
  @IsOptional()
  tag?: string;
}