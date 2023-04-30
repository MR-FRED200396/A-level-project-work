import { registerEnumType } from '@nestjs/graphql';
import { Direction } from '../../common/enums/direction';

registerEnumType(Direction, {
  name: 'Direction',
});
