import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ControllersModule } from './controllers/controllers.module';
import { ResolversModule } from './resolvers/resolvers.module';

@Module({
  imports: [ControllersModule, ResolversModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
