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