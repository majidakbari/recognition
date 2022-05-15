# Veriff session info micro service

## Summary

This application is a standalone _task based_ microservice providing REST HTTP endpoints.

## Challenge to be tackled

## Features Overview

* Fully isolated and dockerized application
* Avoiding compilation error with the power of [Typescript](https://www.typescriptlang.org/)
* Strong error handling
* Using PM2 advanced production process manager

## Installation guide

Follow these steps to simply run the project.

### Clone the project

Clone this repository into your local machine using the following command;
Please note that it's a private repository, you may ask for proper permissions to be able to visit the page.
```bash
git clone git@github.com:majidakbari/recognition.git
```

### Environment variables

There is a `.env.example` file in the project's root directory containing OS level environment variables used for
deploying the whole application. Every single variable inside the file has a default value, so you
do not need to change them; But you can also override your own variables. First copy the example file to the `.env`
file:

```bash
cd /path-to-project
cp .env.example .env
```

Then open your favorite text editor like `vim` or `nano` and change the variables.

For example `APP_PORT` environment variable shows the project will run on the following port. You can change them to
your desired values.

### Running containers

Open `Terminal` and type the following command:

```bash
docker-compose up -d 
```

### Running tests

Simply execute the following command in terminal:

```bash
docker-compose exec core-service npm run test
```

It will run all the tests with code coverage.

## Technical discussions (Images/Containers)

This project includes just one docker container:

`core-service`
node:18

## Further suggestions

* To add more tests and increase the code coverage.
* Using code quality tools like [Sonar](https://www.sonarqube.org/) to avoid having code smells and other development
  issues.
* To add a logging tool.

## Author

Majid Akbari [Linkedin](https://linkedin.com/in/majid-akbari)

## Licence

[MIT](https://choosealicense.com/licenses/mit/)