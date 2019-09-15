FROM node:10-alpine

RUN mkdir /target

WORKDIR /target

COPY /frontend ./
