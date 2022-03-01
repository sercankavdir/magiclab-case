FROM node:14

ENV GOOGLE_APPLICATION_CREDENTIALS="./magiclab-case-firebase-adminsdk-e2nxt-59b331fe87.json"
ENV JWT_KEY=jwtkey

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["node", "src/server.js"]

