FROM node:14.15.0-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . . 

ENV PORT=5000

EXPOSE 5000

CMD ["npm","start"]