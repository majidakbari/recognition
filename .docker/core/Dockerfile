FROM node:18
LABEL maintainer="Majid Akbari <majidakbariiii@gmail.com>"

RUN mkdir /node
COPY ./app /node
RUN rm -rf /node/node_module
RUN cd /node && npm install && npm run transpile
RUN npm install -g pm2 --no-optional

WORKDIR /node

ENTRYPOINT ["npm", "start"]