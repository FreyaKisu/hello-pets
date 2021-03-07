FROM node:14-alpine 

RUN mkdir -p /usr/src
WORKDIR /usr/src

RUN apk update && apk upgrade

COPY . /usr/src

RUN npm install

RUN npm run build

EXPOSE 3000

CMD npm run start