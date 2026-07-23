# yachting-django

An early-stage full-stack web app for a yachting service, pairing a Django (Python) backend with an Angular (TypeScript) frontend.

## What this is

A full-stack project scaffolded in 2019. It stands up the two halves of a yachting-service web app together with the tooling to ship them:

- Backend (`yachting/`) - a Django 2.2 project (Python 3) with a sample module and a pytest suite, containerized with Docker and wired to Travis CI for automated DockerHub and Heroku deploys. It runs on SQLite; docker-compose defines a PostgreSQL service and psycopg2 is installed, but Django is not pointed at it yet.
- Frontend (`yacht-service/`) - an Angular 8 application (TypeScript, SCSS) with the app shell and a header component, plus Karma/Jasmine unit tests and Protractor end-to-end tests.

The project is at the foundation stage: the build, container, CI, and test scaffolding are in place, with the domain models and screens still to be built out.

## Run

Frontend (requires Node.js):

```
cd yacht-service
npm install
npm start
```

Then open http://localhost:4200.

Backend (requires Python 3):

```
cd yachting
pip install -r requirements.txt
python manage.py runserver
```

Or run the stack with Docker: `docker-compose up` from the `yachting/` directory.

## Tech

Django 2.2, Angular 8, TypeScript, Python, SQLite, Docker, Travis CI, pytest, Karma/Jasmine.

## License

MIT - see [LICENSE](LICENSE).
