import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  //Res,
} from '@nestjs/common';

// import { Response } from 'express';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `products limit=> ${limit} offset=> ${offset} brand=> ${brand}`,
    };
  }

  @Get('filter')
  getProductFilter() {
    return `yo soy un filter`;
  }

  //rutas dinamicas
  //con decorador de nextjs mas recomendado
  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('productId') productId: string) {
    return {
      message: `product ${productId}`,
    };
  }

  //responde status de express con decorador @Res
  // @Get(':productId')
  // getOne(@Res() response: Response, @Param('productId') productId: string) {
  //   response.status(200).send({
  //     message: `product ${productId}`,
  //   });
  // }

  // enviar datos por el body
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'accion de crear',
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return id;
  }
}
