FROM node:16-alpine3.11

WORKDIR /app/src/

COPY . .

RUN npm install

CMD ["node", "index.js"]