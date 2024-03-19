import { Controller, Get, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(@Query('filter') filter: string): any {
    const products = [
      {
        name: 'Samsung Galaxy',
        category: 'electronics',
      },
      {
        name: 'Motorola V3',
        category: 'electronics',
      },
      {
        name: 'Iphone 12',
        category: 'electronics',
      },
      {
        name: 'Skippy',
        category: 'grocery store',
      },
    ];

    const filteredProducts = filter
      ? products.filter((product) => product.category === filter).slice(0, 2)
      : products;

    return { products: filteredProducts };
  }
}
