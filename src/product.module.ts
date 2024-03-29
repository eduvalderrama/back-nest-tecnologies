import { Module } from '@nestjs/common';
import { ProductsController } from './products/products.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, ProductsController],
  providers: [AppService],
})
export class AppModule {}
