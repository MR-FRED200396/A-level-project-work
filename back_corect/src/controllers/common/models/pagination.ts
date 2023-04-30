import { ApiProperty } from '@nestjs/swagger';

export class Pagination {
  @ApiProperty({ type: Number })
  readonly skip!: number;

  @ApiProperty({ type: Number })
  readonly take!: number;
}
