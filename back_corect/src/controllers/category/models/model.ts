import { ApiProperty } from '@nestjs/swagger';
import { Category } from '../../../common/interfaces/category';

export class CategoryModel implements Category {
  @ApiProperty({ type: Number })
  readonly id!: number;

  @ApiProperty({ type: String })
  readonly name!: string;
}
