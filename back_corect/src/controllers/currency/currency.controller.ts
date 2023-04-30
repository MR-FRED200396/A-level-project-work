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
import { Currency } from 'src/common/interfaces/currency';
import { CurrencyService } from 'src/services/currency.service';
import { ErrorType } from '../models/error.model';
import { CurrencyFilter } from './models/filter';
import { CurrencyModel } from './models/model';
import { PartialUpdateCurrency } from './models/partial';
import { CurrencySort } from './models/sort';
import { CurrencyWhere } from './models/where';
import { Pagination } from '../common/models/pagination';
import { List } from 'src/common/interfaces/list';

@Controller('currency')
@ApiExtraModels(CurrencyWhere)
@ApiExtraModels(CurrencySort)
@ApiExtraModels(Pagination)
@ApiTags('Currency')
export class CurrencyController {
  constructor(private readonly service: CurrencyService) {}

  @Get('/:id')
  @ApiParam({ name: 'id', type: 'string' })
  @ApiOkResponse({ type: CurrencyModel })
  @ApiNotFoundResponse({
    description: 'Not found entity error',
    type: ErrorType,
  })
  findOne(@Param('id') id: number): Promise<Currency | undefined> {
    return this.service.findOne(id);
  }

  @Get('')
  @ApiQuery({
    name: 'where',
    required: false,
    content: {
      'application/json': {
        schema: { $ref: getSchemaPath(CurrencyWhere) },
      },
    },
  })
  @ApiQuery({
    name: 'sort',
    required: false,
    content: {
      'application/json': {
        schema: { $ref: getSchemaPath(CurrencySort) },
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
  async findAll(@Query() params: CurrencyFilter): Promise<List<Currency>> {
    const where = params.where ? JSON.parse(params.where) : undefined;
    const sort = params.sort ? JSON.parse(params.sort) : undefined;
    const pagination = params.pagination
      ? (JSON.parse(params.pagination) as Pagination)
      : undefined;
    return this.service.findAll(where, sort, pagination);
  }

  @Post('')
  @ApiCreatedResponse({ type: CurrencyModel })
  @ApiUnprocessableEntityResponse({
    type: ErrorType,
  })
  async create(@Body() input: CurrencyModel): Promise<CurrencyModel> {
    return this.service.create(input);
  }

  @Put('')
  @ApiOkResponse({ type: CurrencyModel })
  @ApiUnprocessableEntityResponse({
    type: ErrorType,
  })
  async update(@Body() input: CurrencyModel): Promise<CurrencyModel> {
    return this.service.update({ ...input });
  }

  @Patch('')
  @ApiOkResponse({ type: CurrencyModel })
  @ApiUnprocessableEntityResponse({
    type: ErrorType,
  })
  async partialUpdate(
    @Body() input: PartialUpdateCurrency,
  ): Promise<CurrencyModel> {
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
