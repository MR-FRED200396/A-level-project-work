import { ApiProperty, PartialType } from '@nestjs/swagger';
import { ProductModel } from './model';

export class PartialUpdateProduct extends PartialType(ProductModel) {
  @ApiProperty({ type: String, required: true })
  readonly id!: number;
}
