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
