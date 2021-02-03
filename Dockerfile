FROM node:15-slim

WORKDIR /app

COPY package-lock.json .
COPY package.json .

RUN npm i

COPY . .

ENTRYPOINT [ "npm", "start" ]