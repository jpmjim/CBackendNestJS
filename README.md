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


