# Base image
FROM node:16
ENV PORT=8080

WORKDIR /usr/src/app
COPY . .

COPY package*.json .
RUN npm install

EXPOSE $PORT

CMD npm run start;
#CMD [ "node", "./dist/main.js" ]
