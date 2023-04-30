import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiExtraModels,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiParam,
  ApiQuery,
  ApiTags,
  ApiUnprocessableEntityResponse,
  getSchemaPath,
} from '@nestjs/swagger';
import { Order } from 'src/common/interfaces/order';
import { OrderService } from '../../services/order.service';
import { ErrorType } from '../models/error.model';
import { OrderFilter } from './models/filter';
import { OrderModel } from './models/model';
import { PartialUpdateOrder } from './models/partial';
import { OrderSort } from './models/sort';
import { OrderWhere } from './models/where';
import { List } from 'src/common/interfaces/list';
import { Pagination } from '../common/models/pagination';

@Controller('order')
@ApiExtraModels(OrderWhere)
@ApiExtraModels(OrderSort)
@ApiExtraModels(Pagination)
@ApiTags('Order')
export class OrderController {
  constructor(private readonly service: OrderService) {}

  @Get('/:id')
  @ApiParam({ name: 'id', type: 'string' })
  @ApiOkResponse({ type: OrderModel })
  @ApiNotFoundResponse({
    description: 'Not found entity error',
    type: ErrorType,
  })
  findOne(@Param('id') id: number): Promise<Order | undefined> {
    return this.service.findOne(id);
  }

  @Get('')
  @ApiQuery({
    name: 'where',
    required: false,
    content: {
      'application/json': {
        schema: { $ref: getSchemaPath(OrderWhere) },
      },
    },
  })
  @ApiQuery({
    name: 'sort',
    required: false,
    content: {
      'application/json': {
        schema: { $ref: getSchemaPath(OrderSort) },
      },
    },
  })
  @ApiQuery({
    name: 'pagination',
    required: false,
    content: {
      'application/json': {
        schema: { $ref: getSchemaPath(Pagination) },
      },
    },
  })
  async findAll(@Query() params: OrderFilter): Promise<List<Order>> {
    const where = params.where ? JSON.parse(params.where) : undefined;
    const sort = params.sort ? JSON.parse(params.sort) : undefined;
    const pagination = params.pagination
      ? (JSON.parse(params.pagination) as Pagination)
      : undefined;
    return this.service.findAll(where, sort, pagination);
  }

  @Post('')
  @ApiCreatedResponse({ type: OrderModel })
  @ApiUnprocessableEntityResponse({
    type: ErrorType,
  })
  async create(@Body() input: OrderModel): Promise<OrderModel> {
    return this.service.create(input);
  }

  @Put('')
  @ApiOkResponse({ type: OrderModel })
  @ApiUnprocessableEntityResponse({
    type: ErrorType,
  })
  async update(@Body() input: OrderModel): Promise<OrderModel> {
    return this.service.update({ ...input });
  }

  @Patch('')
  @ApiOkResponse({ type: OrderModel })
  @ApiUnprocessableEntityResponse({
    type: ErrorType,
  })
  async partialUpdate(@Body() input: PartialUpdateOrder): Promise<OrderModel> {
    return this.service.partialUpdate({ ...input });
  }

  @Delete(':id')
  @ApiOkResponse({ type: Boolean })
  @ApiUnprocessableEntityResponse({
    type: ErrorType,
  })
  async delete(@Param('id') id: number): Promise<boolean> {
    return this.service.delete(id);
  }
}
