FROM node:14-alpine

WORKDIR /app

COPY . /app

EXPOSE 3000

CMD yarn start:prod