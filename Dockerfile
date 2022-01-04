FROM node:14-alpine

WORKDIR /app

COPY . /app

RUN yarn build

EXPOSE 3000

CMD yarn start:prod