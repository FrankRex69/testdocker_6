## SETTAGGIO DOCKERFILE E DOCKER COMPOSE PER APPLICAZIONE WEB:
```bash
Creazione immagine, container e start app in locale:
$ docker compose -f docker-compose-local.yml --env-file .env up

Creazione immagine, container e start app online:
$ docker compose -f docker-compose-development.yml --env-file .env up
```