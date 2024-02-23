# Reto 3: Conceptos DevOps, microservicios y contenedores

To execute this project

1. Download the project and rename the __.env.template__ file to __.env__
2. Set your env variables into the __.env__ file
3. Execute the following commands:
```
npm install
```
```
nodemon index
```
To execute the tests
```
npm test
```

To build the docker image:
```
docker-compose -f docker-compose.prod.yml --env-file .env up --build
```


