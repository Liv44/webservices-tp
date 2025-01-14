FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./
COPY tsconfig.json ./

RUN npm install

COPY . .

COPY ./src/infrastructure/database/prisma/ prisma

EXPOSE 3000

CMD ["npm", "run", "dev"]