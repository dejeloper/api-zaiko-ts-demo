# Api Zaiko

Api conectada a Base de datos productiva

## Usar Docker para Postgres (local)

_Solicitar script de base de datos y seeds_

### Herramienta hecha en Node, Express y Postgres(Adding)

- Para correr el contenedor de docker en local:
  `docker-compose up -d postgres`
- Para ejecutar el bash del componente es:
  `winpty docker-compose exec postgres bash`
- Para accede a la base de datos:
  `psql -h localhost -d zaiko_db -U zaiko_admin`
- Para correr el contenedor de docker en local:
  `docker-compose up -d pgadmin`
- Para correr el pgadmin en local:
  <pre>
  - http://localhost:5050/login?next=%2F
  - admin@mail.com
  - root
  </pre>
- Para saber que IP está usando postgres:
  <pre>
  - docker ps (Se obtiene el id del contenedor/ tambien está en el docker desktop)
  - docker inspect #####
  - Usar el campo: "IPAddress": "172.21.0.2"
  </pre>
- Para crear server en el pgadmin:
  <pre>
  - HOST: IPAddress
  - DB=zaiko_db
  - USER=zaiko_admin
  - PASSWORD=zaiko_pass
  - Guardar la password
  </pre>

> Desarrollado por **_@dejeloper_**
