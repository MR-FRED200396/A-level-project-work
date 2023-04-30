import { ApiProperty } from '@nestjs/swagger';

export class ErrorType {
  @ApiProperty({ type: String, description: 'Error code', example: 404 })
  readonly 'statusCode'!: number;

  @ApiProperty({
    type: String,
    description: 'Error description',
    example: `Entity ERROR`,
  })
  readonly 'message'!: string;

  @ApiProperty({
    type: String,
    description: 'Error code',
    example: 'Not Found',
  })
  readonly 'error'!: string;
}
