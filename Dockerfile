FROM node:18.13.0-bullseye-slim

WORKDIR /app

COPY ["./next-13-redux/package*.json", "./"]

COPY ./next-13-redux .

RUN npm i

# CMD [ "npm", "start" ]