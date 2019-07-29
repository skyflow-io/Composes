FROM node:alpine
LABEL maintainer="Skyflow - Franck"
RUN mkdir -p /assets/src /assets/out
COPY ./webpack /assets/webpack
COPY ./package.json /assets/package.json
COPY ./package-lock.json /assets/package-lock.json
WORKDIR /assets
RUN npm install