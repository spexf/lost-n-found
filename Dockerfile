FROM node:lts-alpine3.19

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

ENTRYPOINT [ "npx", "next", "dev", "-H", "0.0.0.0" ]