# CBackendNestJS
Curso de Backend con NestJS

## ¿Por qué usar NestJS?
  NestJS es un potente framework de NodeJS para la construcción de aplicaciones del lado del servidor.

  NestJS ha crecido mucho en los últimos años y se ha convertido en una de las principales opciones que los desarrolladores eligen para la programación de APIs con NodeJS.

  Gracias a la utilización de TypeScript y la Programación Orientada a Objetos, es un framework ideal para iniciar en el desarrollo backend.

  Si vienes de front-end y conoces Angular, te sentirás como en casa, ya que los desarrolladores de NestJS se inspiraron en Angular para desarrollar este maravilloso framework.

  [NestJS](https://nestjs.com/) también te dará patrones para:
  - Solid
  - Typescript
  - Orientado a objetos
  - Programación funcional
  - Programación reactiva

## Crea tu primer proyecto con NestJS
  Cuando se inicia con una nueva tecnología, el primer paso es el ya conocido “Hola Mundo”. Realizar la instalación por primera vez del framework o lenguaje para asegurar que este esté funcionando.

  **Preparando el Entorno**
  - Asegúrate de tener instalado en tu ordenador tanto NodeJS como NPM. Se recomienda al menos NodeJS versión 10 u 12.
  Instalación
  ```bash
  node --version # nodejs version
  npm i -g @nestjs/cli 
  nest --version # Para ver la versión de NestJS
  nest --help # Para ver la ayuda
  ```

  **Creando un proyecto**
  ```bash
  nest new proyecto-nestjs # Crea un proyecto con el nombre proyecto-nestjs
  cd proyecto-nestjs # Nos movemos al directorio proyecto-nestjs
  ```
  **Ejecutando el proyecto**
  ```bash
  npm run start # Ejecuta el proyecto
  npm run dev # Ejecuta el proyecto en modo desarrollo
  npm run build # Ejecuta el proyecto en modo producción
  ```
  **Herramientas para el desarrollo en Visual Code**
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

## Estructura de aplicaciones en NestJS
  NestJS posee desde el inicio de un proyecto varios directorios y archivos que se generan por defecto al crearlo. Veamos para que te sirve cada uno.
  
  ### 1. Node_modules:
  Todo proyecto de Javascript posee este directorio donde se almacenan las librerías y dependencias que se descarguen con NPM.

  ### 2. SRC:
  Directorio principal del proyecto donde encontramos:

  - app.controller.spec.ts: archivo de pruebas unitarias del controlador con el mismo nombre.
  - app.controller.ts: controlador que contiene endpoints a diferentes recursos.
  - app.module.ts: módulo principal de toda la aplicación NestJS.
  - app.service.ts: servicio consumido por los controladores para determinados propósitos.
  - main.ts: archivo Core de la aplicación NestJS donde se realizan configuraciones e imports básicos para su funcionamiento.

  ### 3. Test:
  Directorio de pruebas unitarias y de integración. NestJS utiliza por defecto Jest para escribir las pruebas.

  - [.editorconfig](https://editorconfig.org/): este archivo no viene por defecto, pero se recomienda crearlo e instalar el plugin con el mismo nombre en el editor. Permite autoformatear los archivos, espacios, indentación, etc.
  - [.eslintrc.js](https://eslint.org/  ): permite la configuración de un analizador de código para detectar tempranamente errores y resolverlos. Requiere instalación de un plugin en el editor.
  - .gitignore: indicarle a GIT qué archivos/directorios ignorar.
  - [.prettierrc](https://prettier.io/): archivo de configuración para el autoformateo de código. Requiere instalación de un plugin en el editor.
  - nest-cli.json: archivo con configuraciones de NestJS. Algunos plugins del framework requieren de configuraciones adicionales en este archivo.
  - package-lock.json: describe las dependencias exactas que se generaron en la instalación del proyecto.
  - package.json: archivo para el manejo de dependencias, scripts y metadatos relevantes para el proyecto.
  - [README.md](https://changelog.md/): archivo markdown para la documentación del proyecto.
  - tsconfig.build.json: archivo principal para la configuración de TypeScript.
  - tsconfig.json: extensión con más configuraciones de TypeScript.

## Presentación del proyecto: Platzi Store
  Para aplicar tus conocimientos de NestJS vas a crear una API ecommerce. El proyecto tendrá todas las entidades que tiene un comercio electrónico. [Repo del Proyecto](https://github.com/platzi/fundamentos-nestjs)

  Entidades del proyecto Platzi Store:
  - Ordenes de compra
  - Usuarios
  - Categorías
  - Productos
  - Clientes
  - Marcas

  La API la podrás consumir desde Android o cualquier aplicación Frontend como Angular, React, etc

  También lograremos tener la documentación de la API REST con Swagger.

## Repaso a TypeScript: tipos y POO
  NestJS utiliza TypeScript como lenguaje de programación y conocer sus características y qué le adiciona a Javascript te convertirá en un profesional más completo de esta tecnología.

  **Qué es TypeScript**
  
  TypeScript es un lenguaje de programación mantenido por Microsoft. En otras palabras, es un “superconjunto” de Javascript que le agrega tipado de datos y programación orientada a objetos.

  El código fuente escrito en TypeScript, se “transpila” a código Javascript que es el que finalmente entienden los intérpretes de Javascript como los navegadores web o NodeJS.

  **Tipado de Datos con TypeScript**

  Con Javascript puedes crear una variable del tipo String y posteriormente asignarle un valor del tipo Entero o Boolean. Esto es propenso a tener errores en tiempo de ejecución.
  TypeScript permite tipar los datos para que estos no cambien de tipo.
  ```typescript
  // Tipado de datos con TypeScript
  const text: string;
  const num: number;
  const bool: boolean:
  const arr: Array<number>[];
  ```
  Safe type
  ```typescript
  let name: string;
  const age = 19;
  const suma = (a: number, b:number) => {
    return a + b;
  }
  ```
  Classes
  ```typescript
  class Person {
   constructor(private age: number, private name: string) {}

    getSummary() {
      return `I'm ${this.name} and I'm ${this.age}`;
    }
  }
  ```
  **POO con TypeScript**

  Javascript permite el desarrollo de aplicaciones utilizando POO basada en Prototipos. Puedes tomar el Curso Básico de Programación Orientada a Objetos con JavaScript para entrar en más detalle. TypeScript llega para permitir escribir código utilizando los conceptos de la POO más fácilmente con clases, herencia, polimorfismo, etc. 
  ```typescript
  // Programación Orientada a Objetos con TypeScript
  class Alumno {
    private nombre: string;
    private apellido: string;
    
    constructor(nombre: string, apellido: string) {
      this.nombre = nombre;
      this.apellido = apellido;
    }
    
    getNombre() {
      return this.nombre;
    }
    setNombre(nuevoNombre: string) {
      this.nombre = nuevoNombre;
    }
  }
  const alumno = new Alumno('Freddy', 'Vega');
  ```

## Introducción a controladores
  El concepto más básico para desarrollar una aplicación con NestJS son los [Controladores](https://docs.nestjs.com/controllers).

  Ejecutamos:
  ```bash
  npm run start:dev
  ```
  Nos permite ejecutar un server con la caracteristica de liveload, que cada vez que escribamos un codigo se va a reiniciar el server ejecutando los cambios que hayamos hecho.
  
  ### Qué son los controladores en NestJS
  Los Controladores manejarán las rutas o endpoints que la aplicación necesite, además de validar los permisos del usuario, filtro y manipulación de datos.

  ### Estructura de un controlador
  La aplicación de NestJS creada por defecto con el CLI con el comando <code>nest new project-name</code>  trae consigo un controlador básico con el nombre <code>app.controller.ts</code>. Verás que dicho archivo contiene una clase que a su vez posee un decorador llamado <code>@Controller()</code>.

  Dicho decorador le indica al compilador de NestJS que esta clase tendrá el comportamiento de un controlador.
  ```typescript
  // app.controller.ts
  import { Controller, Get } from '@nestjs/common';
  import { AppService } from './app.service';

  @Controller()
  export class AppController {

    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string {
      return this.appService.getHello();
    }
  }
  ```
  Los controladores deben ser importados en un módulo para que sean reconocidos los endpoints.
  ```typescript
  // app.module.ts
  import { Module } from '@nestjs/common';
  import { AppController } from './app.controller';

  @Module({
    imports: [],
    controllers: [
      // Imports de Controladores
      AppController
    ],
  })
  export class AppModule {}
  ```
  El controlador importa un servicio que son los responsables de la lógica y obtención de datos desde una BBDD que el controlador requiere.
  ```typescript
  // app.service.ts
  import { Injectable } from '@nestjs/common';

  @Injectable()
  export class AppService {
    getHello(): string {
      return 'Hello World!';
    }
  }
  ```
  Puedes correr el servidor de NestJS con el comando <code>npm run start:dev</code> e ingresar a la ruta <code>localhost:3000</code> para visualizar el contenido que el controlador envía.

  Si quieres crear una nueva ruta, basta con crear un método en la clase del controlador y colocarle el decorador <code>@Get()</code> con un nombre para el nuevo endpoint.
  ```typescript
  // app.controller.ts
  @Controller()
  export class AppController {

    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string {
      return this.appService.getHello();
    }
    
    @Get('new-endpoint')
    newEndpoint(): string {
      return 'New endpoint';
    }
  }
  ```
  Ingresa a esta nueva ruta desde <code>localhost:3000/new-endpoint</code> para visualizar su respuesta y así crear los endpoints que necesites.

## GET: cómo recibir parámetros
  Existen diferentes tipos de endpoints que se identifican a través de los Verbos HTTP. Cada uno con un propósito determinado siguiendo el protocolo.

  ### Obtención de datos con GET
  En particular, el verbo GET suele utilizarse para endpoints que permiten la obtención de datos como un producto o una lista de productos.

  Es frecuente la necesidad de que este tipo de endpoints también reciban información dinámica en las URL como el identificador de un producto.

  Para capturar estos datos en NestJS, tienes que importar el decorador <code>Param</code> desde <code>@nestjs/common</code> y emplearlo de la siguiente manera en tus endpoints.
  ```typescript
  import { Controller, Get, Param } from '@nestjs/common';
  import { AppService } from './app.service';

  @Controller()
  export class AppController {

    constructor(private readonly appService: AppService) {}

    @Get('product/:idProduct')
    getProduct1(@Param() params: any): string {
      return `Producto id: ${params.idProduct}`;
    }

    @Get('product/:idProduct')
    getProduct2(@Param('idProduct') idProduct: string): string {
      return `Producto id: ${idProduct}`;
    }
  }
  ```
  Observa el decorador <code>@Get()</code> que posee el nombre del endpoint seguido de un <code>:idProduct</code> que identifica al parámetro dinámico. Luego puedes implementar el decorador <code>@Param()</code> para capturar todos los parámetros juntos en un objeto o <code>@Param('idProduct')</code> para capturar únicamente el parámetro con dicho nombre.

  De esta forma, accede en un navegador a <code>localhost:3000/product/12345</code> para capturar ese <code>12345</code> y posteriormente utilizarlo.
  ```typescript
  import { ..., Param } from '@nestjs/common';
  ...

  @Controller()
  export class AppController {
    ...

    @Get('products/:productId')
    getProduct(@Param('productId') productId: string) {
      return `product ${productId}`;
    }

    @Get('categories/:id/products/:productId')
    getCategory(@Param('productId') productId: string, @Param('id') id: string) {
      return `product ${productId} and ${id}`;
    }
  }
  ```
  
## GET: parámetros query
  Hay varias maneras de enviar información a un endpoint del tipo GET, cada una con sus ventajas y desventajas. Profundicemos acerca de ellas. [Param decorators](https://docs.nestjs.com/custom-decorators#param-decorators)

  ### Parámetros de ruta vs Parámetros query
  Los parámetros de ruta son aquellos que forman parte del propio endpoint y suelen ser parámetros obligatorios.
  ```typescript
  @Get('product/:idProduct')
  getProduct2(@Param('idProduct') idProduct: string): string {
      return `Producto id: ${idProduct}`;
  }
  ```
  En NestJS se capturan con el decorador <code>@Param()</code>.

  Por otro lado, están los parámetros de consulta o query en las URL como por ejemplo <code>example.com/products?limit=10&offset=20</code> que se capturan con el decorador <code>@Query()</code> importado desde <code>@nestjs/common</code>.
  ```typescript
  @Get('products')
  getProducts(@Query('limit') limit = 10, @Query('offset') offset = 0): string {
      return `Lista de productos limit=${limit} offset=${offset}`;
  }
  ```
  Su principal diferencia es que los parámetros de consulta suelen ser opcionales; el comportamiento del endpoint tiene que contemplar que estos datos pueden no existir con un valor por defecto.

  Los parámetros de ruta se utilizan para IDs u otros identificadores obligatorios, mientras que los parámetros de consulta se utilizan para aplicar filtros opcionales a una consulta. Utilízalos apropiadamente en tus endpoints según tengas la necesidad.

  ### Evitando el bloqueo de rutas

  Un importante consejo a tener en cuenta para construir aplicaciones con NestJS es asegurar que un endpoint no esté bloqueando a otro.
  Por ejemplo:
  ```typescript
  /* Ejemplo Bloqueo de Endpoints */
  @Get('products/:idProduct')
  endpoint1() {
      // ...
  }
  @Get('products/filter')
  endpoint2() {
      // ...
  }
  ```
  El **endpoint1** bloquea al **endpoint2**, ya que este está esperando un parámetro <code>:idProduct</code> y si llamamos a <code>localhost:3000/products/filter</code> NestJS entenderá que la palabra <code>filter</code> es el ID que espera el primer endpoint ocasionando que no sea posible acceder al segundo endpoint.

  Se soluciona de forma muy sencilla invirtiendo el orden de los mismos. Coloca los endpoints dinámicos en segundo lugar para que no ocasionen problemas.
  ```typescript
  /* Solución Bloqueo de Endpoints */
  @Get('products/filter')
  endpoint2() {
      // ...
  }
  @Get('products/:idProduct')
  endpoint1() {
      // ...
  }
  ```
  Este es un inconveniente común que suele suceder en NestJS y es importante que lo conozcas para evitar dolores de cabeza.
  ```typescript
  import { ..., Query } from '@nestjs/common';

  @Controller()
  export class AppController {
    ...

    @Get('products')
    getProducts(
      @Query('limit') limit = 100,
      @Query('offset') offset = 0,
      @Query('brand') brand: string,
    ) {
      return `products limit=> ${limit} offset=> ${offset} brand=> ${brand}`;
    }

    @Get('products/filter')
    getProductFilter() {
      return `yo soy un filter`;
    }
  }
  ```

## Separación de responsabilidades
  NestJS le da mucha importancia a los Principios SOLID en el desarrollo de software para mantener las buenas prácticas de codificación. Una de ellas es la responsabilidad única.
  - [CLI command reference](https://docs.nestjs.com/cli/usages)
  - [nest generate](https://docs.nestjs.com/cli/usages#nest-generate)
  
  Creamos nuestros controladores con el comando <code>nest generate controller</code> y le pasamos el nombre del controlador que queremos crear.
  ```bash
  nest generate controller controllers/products --flat
  ```
  
  ### Qué es la responsabilidad única

  La S de SOLID hace referencia a “Single Responsibility” y recomienda que **cada pieza de software debe tener una única función.** Por ejemplo, un controlador de productos no debería encargarse de categorías o de usuarios. Se debe crear un controlador para cada entidad que la aplicación necesite.

  Lo mismo ocurre con los métodos. Un método para la obtención de datos solo debe realizar dicha acción y no estar actualizando o manipulando los datos de otra manera.

  **Responsabilidades en NestJS**

  En NestJS, una buena práctica es crear un directorio llamado <code>controllers</code> donde se agruparán todos los controladores que tu aplicación necesite. Ese ya es un buen paso para mantener el orden en tu proyecto.
  Apóyate del CLI de NestJS para autogenerar código rápidamente con el comando <code>nest generate controller</code>n o en su forma corta <code>nest g co</code>.
  Es una buena forma de comenzar a seguir las buenas prácticas a la hora de escribir código y estructurar una aplicación.

  **Controllers y responsabilidades**

  ```bash
  nest g cor controllers/categories --flat
  ```
  src/controllers/categories.controller.ts
  ```typescript
  import { Controller, Get, Param } from '@nestjs/common';

  @Controller('categories') // 👈 Route
  export class CategoriesController {

    @Get(':id/products/:productId')
    getCategory(
      @Param('productId') productId: string,
      @Param('id') id: string
    ) {
      return `product ${productId} and ${id}`;
    }
  }
  ```
  ```bash
  nest g co controllers/products --flat
  ```
  src/controllers/products.controller.ts
  ```typescript
  import { Controller, Get, Query, Param } from '@nestjs/common';

  @Controller('products') // 👈 Route
  export class ProductsController {
    @Get()
    getProducts(
      @Query('limit') limit = 100,
      @Query('offset') offset = 0,
      @Query('brand') brand: string,
    ) {
      return `products limit=> ${limit} offset=> ${offset} brand=> ${brand}`;
    }

    @Get('filter')
    getProductFilter() {
      return `yo soy un filter`;
    }

    @Get(':productId')
    getProduct(@Param('productId') productId: string) {
      return `product ${productId}`;
    }
  }
  ```
  src/app.module.ts
  ```typescript
  import { Module } from '@nestjs/common';
  import { AppController } from './app.controller';
  import { AppService } from './app.service';
  import { ProductsController } from './controllers/products.controller';
  import { CategoriesController } from './controllers/categories.controller';

  @Module({
    imports: [],
    controllers: [
    AppController,
    ProductsController, // 👈 New controller
    CategoriesController  // 👈 New controller
    ],
    providers: [AppService],
  })
  export class AppModule {}
  ```

## Instalación de Postman o Insomia
  Para poder probar nuestra API de forma más productiva vamos a tener que usar algún cliente de APIs que nos permita hacer las pruebas de funcionamiento de lo que estás construyendo, los dos clientes más famosos son Insomnia y Postman y vas a necesitar de alguno de ellos para ir probando cada característica que vamos a ir construyendo en nuestro servicio de Platzi Store.

  ### Insomnia
  Como cliente para probar APIs tiene grandes características, destaca principalmente por una interfaz limpia y sencilla, pero a la vez potente, en donde puede configurar ambientes, exportar e importar, gran soporte con GraphQL, etc. Insomnia será el que vamos a usar en este curso 🙂
  ![](https://raw.githubusercontent.com/Kong/insomnia/develop/screenshots/main.png)

  **Instalación**

  La instalación es sencilla, solo tienes que ingresar a https://insomnia.rest/download y descargar el instalador. Una vez esté descargado lo ejecutas y sigues los pasos de la instalación; en caso de Windows descarga un archivo .exe, en caso de Mac descarga un .dmg, y finalmente, en caso de Ubuntu descargas el .deb.

  ### Postman
  Es uno de los más usados y legendariamente nos ha acompañado por mucho tiempo, además cuenta con características similares a Insomnia como: exportar e importar, ambientes, entornos, y provee una API para hacer testing muy potente.
  
  **Instalación Windows y Mac**

  La instalación es sencilla solo tienes que ingresar a https://www.postman.com/downloads/
  y descargar el instalador, una vez esté descargado lo ejecutas y sigues los pasos de la instalación, en caso de Windows descarga un archivo .exe y en caso de Mac descargas un archivo comprimido lo descomprimes y ahí sigues el proceso.

  **Instalación Linux**

  ```bash
  # Debian, Ubuntu y derivados
  sudo apt install postman
  # Arh, Manjaro
  sudo pacman -S postman
  # Fedora
  sudo yam install postman
  ```

## Qué es el método POST
  Así como el verbo HTTP GET se utiliza para la obtención de datos, el verbo HTTP Post se utiliza para la creación de los mismos previamente.

  **Qué es el método Post**

  Es el método para creación de datos. Para utilizarlo en Nest.js debemos importar el decorador.

  ### Crear registro con Post
  En tu proyecto NestJS, tienes que importar los decoradores <code>Post y Body</code> desde <code>@nestjs/common</code>. El primero para indicar que el endpoint es del tipo POST y el segundo para capturar los datos provenientes del front-end en el cuerpo del mensaje.

  ```typescript
  import { Controller, Post, Body } from '@nestjs/common';

  @Controller()
  export class AppController {

    @Post('product')
    createProducto(@Body() body: any): any {
      return {
        name: body.name,
        price: body.price
      };
    }
  }
  ```
  Un buen endpoint del tipo POST tiene que devolver el registro completo recientemente insertado en la BBDD para que el front-end pueda actualizarse inmediatamente y no tener que realizar una consulta por el mismo.

  Recuerda también que, al tratarse de un endpoint POST, no puedes realizar la solicitud desde el navegador al igual que con los endpoints GET. Para probar tu aplicación, tienes que utilizar una plataforma de APIs como Postman.
  ```typescript
  import { ..., Post, Body } from '@nestjs/common';

  @Controller('products')
  export class ProductsController {
    ...

    @Post() // 👈 New decorator
    create(@Body() payload: any) {
      return {
        message: 'accion de crear',
        payload,
      };
    }
  }
  ```

## Métodos PUT y DELETE para editar y eliminar
  El verbo HTTP GET se utiliza para la obtención de datos y el verbo POST para la creación de estos. También existe el verbo PUT y DELETE para la actualización y borrado de datos respectivamente.

  ### Actualización de datos con PUT
  El verbo PUT se usa para la actualización de un registro en la BBDD. Suele recibir un Body con los datos a actualizar, pero también es importante que reciba el ID del registro para buscar al mismo.
  ```typescript
  import { Controller, Put, Param, Body } from '@nestjs/common';
  import { AppService } from './app.service';

  @Controller()
  export class AppController {

    @Put('product/:idProduct')
    updateProducto(@Param('idProduct') idProduct: string, @Body() body: any): any {
      return {
        idProduct: idProduct,
        name: body.newName,
        price: body.newPrice
      };
    }
  }
  ```
  El ID suele recibirse por parámetros de URL para que sea obligatorio, mientras que reservamos el cuerpo del mensaje para los datos actualizados. Finalmente, retornamos el registro completo luego de ser actualizado.

  ### Eliminar datos con DELETE
  Eliminar un registro es sencillo. Basta con decorar el endpoint con DELETE. Suele recibir el ID del registro a borrar únicamente.
  ```typescript
  import { Controller, Delete, Param } from '@nestjs/common';
  import { AppService } from './app.service';

  @Controller()
  export class AppController {

    @Delete('product')
    deleteProducto(@Param('idProduct') idProduct: string): any {
      return {
        idProduct: idProduct,
        delete: true,
        count: 1
      };
    }
  }
  ```
  Una buena práctica para este tipo de endpoints es retornar un booleano que indique si el registro fue eliminado o no. Además de incluir un <code>count</code> que indique cuántos registros fueron eliminados.

  src/controllers/products.controller.ts
  ```typescript
  import {..., Put, Delete } from '@nestjs/common';

  @Controller('products')
  export class ProductsController {
    ...
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
  ```

## Códigos de estado o HTTP response status codes
  El protocolo HTTP tiene estandarizado una lista de códigos de estado que indican los tipos de respuesta que las API deben enviar dependiendo la situación. Como profesional en el desarrollo de software, debes conocerlos y diferenciarlos.

  ### Cuáles son los códigos HTTP
  Hay cinco familias de códigos de estado HTTP que tienes que utilizar apropiadamente para que tus APIs informen correctamente la situación de la solicitud.

  - Estados informativos (100–199)
  - Estados de éxito (200–299)
  - Estados de redirección (300–399)
  - Estados de error del cliente (400–499)
  - Estados de error del servidor (500–599)

  ### Cómo manejar los códigos de estado HTTP con NestJS
  En NestJS, puedes manejar los códigos de estado HTTP importando el decorador **HttpCode** y el enumerado **HttpStatus** desde <code>@nestjs/common</code>.

  El primero te servirá para indicar cuál será el código de estado HTTP que un endpoint tiene que devolver; el segundo para ayudarte por si no recuerdas qué código pertenece a cada tipo de respuesta.

  ```typescript
  import { Controller, HttpCode, HttpStatus } from '@nestjs/common';

  @Get('product/:idProduct')
  @HttpCode(HttpStatus.OK)
  getProduct2(@Param('idProduct') idProduct: string): string {
      return `Producto id: ${idProduct}`;
  }

  @Post('product')
  @HttpCode(HttpStatus.CREATED)
  createProducto(@Body() body: any): any {
      return {
        name: body.name,
        price: body.price
      };
  }
  ```
  El enumerado <code>HttpStatus.OK</code> indica código de estado **200** que es el que suele devolver por defecto todos los endpoints cuando la operación sale exitosamente. Los endpoints POST suelen devolver <code>HttpStatus.CREATED</code> o código **201** para indicar la creación exitosa del registro.

  src/controllers/products.controller.ts
  ```typescript
  import { ..., HttpStatus, HttpCode, Res } from '@nestjs/common';
  import { Response } from 'express';

  @Controller('products')
  export class ProductsController {
    ...
    @Get(':productId')
    @HttpCode(HttpStatus.ACCEPTED) // 👈 Using decorator
    getOne(
      @Res() response: Response,
      @Param('productId') productId: string
    ) {
      response.status(200).send({...}); // 👈 Using express directly
    }
  }
  ```
  Resumen de los códigos HTTP
  - [Con imágenes de perritos 🐶](https://httpstatusdogs.com/)
  - [Con imágenes de gatitos 🐱](https://http.cat/)
  - [HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

## Introducción a servicios: crea tu primer servicio
  Puedes crear los servicios usando el generador de Nest CLI con
  ```bash
  nest g s services/products --flat
  ```
  Los servicios en NestJS son los que suelen tener la lógica del negocio y la conexión con la base de datos.

  ### Qué son los servicios en NestJS
  Los servicios son una pieza esencial de las aplicaciones realizadas con el framework NestJS. Están pensados para proporcionar una capa de acceso a los datos que necesitan las aplicaciones para funcionar.

  Un servicio tiene la responsabilidad de gestionar el trabajo con los datos de la aplicación, de modo que realiza las operaciones para obtener esos datos, modificarlos, etc.

  Primer servicio con NestJS

  Para crear un servicio puedes utilizar el comando <code>nest generate service "service name"</code> o en su forma corta <code>nest g s "service name"</code>.
  ```typescript
  // app.service.ts
  import { Injectable } from '@nestjs/common';

  @Injectable()
  export class AppService {

    getHello(): string {
      return 'Hello World!';
    }
  }
  ```
  Los servicios utilizan el decorador <code>@Injectable()</code> y deben ser importados en los providers del módulo al que pertenecen o tu aplicación no lo reconocerá y tendrás errores al levantar el servidor.
  ```typescript
  // app.module.ts
  import { Module } from '@nestjs/common';
  import { AppService } from './app.service';

  @Module({
    imports: [],
    providers: [
      // Imports de Servicios
      AppService
    ],
  })
  export class AppModule {}
  ```
  Crea un método en el servicio para cada propósito que necesites. Uno para obtener un producto, otro para obtener un listado de productos. Uno para crear producto, para actualizar, eliminar, etc.

  ***Servicios en NestJS**

  ```typescript
  // src/entities/product.entity.ts

  export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;
  }
  ```
  nest g s services/products --flat
  ```typescript
  // src/services/products.service.ts
  import { Injectable } from '@nestjs/common';

  import { Product } from './../entities/product.entity';

  @Injectable()
  export class ProductsService {
    private counterId = 1;
    private products: Product[] = [
      {
        id: 1,
        name: 'Product 1',
        description: 'bla bla',
        price: 122,
        image: '',
        stock: 12,
      },
    ];

    findAll() {
      return this.products;
    }

    findOne(id: number) {
      return this.products.find((item) => item.id === id);
    }

    create(payload: any) {
      this.counterId = this.counterId + 1;
      const newProduct = {
        id: this.counterId,
        ...payload,
      };
      this.products.push(newProduct);
      return newProduct;
    }
  }
  ```
  ```typescript
  // src/app.module.ts
  import { Module } from '@nestjs/common';
  ...
  import { ProductsService } from './services/products.service';

  @Module({
    imports: [],
    controllers: [...],
    providers: [AppService, ProductsService], // 👈 New Service
  })
  export class AppModule {}
  ```

