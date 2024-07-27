<p align="center">
  <a href="/"><img src='./logo.jpg' width="250" alt="IPFC" /></a>
</p>

<p align="center" >
<a href="https://www.typescriptlang.org/" target="_blank"><img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-007ACC.svg?logo=typescript&logoColor=white"></a>
<a href="https://nestjs.com/" target="_blank"><img alt="NestJS" src="https://img.shields.io/badge/NestJS-E0234E.svg?logo=nestjs&logoColor=white"></a>
<a href="https://www.postgresql.org/" target="_blank"><img alt="PostgreSQL" src="https://img.shields.io/badge/PostgreSQL-336791.svg?logo=postgresql&logoColor=white"></a>
<a href="https://www.docker.com/" target="_blank"><img alt="Docker" src="https://img.shields.io/badge/Docker-2496ED.svg?logo=docker&logoColor=white"></a>
<a href="https://typeorm.io/" target="_blank"><img alt="TypeORM" src="https://img.shields.io/badge/TypeORM-262627.svg?logo=typeorm&logoColor=white"></a>
<a href="https://www.postman.com/" target="_blank"><img alt="Postman" src="https://img.shields.io/badge/Postman-FF6C37.svg?logo=postman&logoColor=white"></a>
</p>

## Descripción

**IPFC** ([Instituto Politecnico Formosa Conecta](https://www.ipf.edu.ar/)), o simplemente llamado _IPF Conecta_, es una plataforma online orientada a la busqueda de trabajo y potenciar las oportunidades laborales de los estudiantes egresados del IPF.

En este repositorio se encuentra el desarrollo del backend de dicha aplicación, asi que si estas especializado en el la programación y estas interesado en probar la aplicación, te dejo los pasos para inicializar el proyecto. Cabe aclarar que deberás de tener algunas intalaciones previas como configuraciones en tu computadora. En este caso, requerirás de NodeJS y Tener Docker ya inicializado ( En su defecto PgAdmin ).

## Instalación de librerias.

```bash
 pnpm install
```

## Levatar la base de datos utilizando un contendor de Docker.

```bash
docker-compose up -d
```

## Configurar las variables de entorno necesarias.

```
DB_PASSWORD=
DB_NAME=
DB_HOST=
DB_PORT=
DB_USERNAME=

PORT=
JWT_SECRET=
```

## Iniciar la aplicación

```bash
pnpm run start

# En modo de desarrollo.
pnpm run start:dev
```

### Para ver las peticiones posibles, vease el archivo **HttpResquests.md**.
