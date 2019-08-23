FROM node:lts-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm build

EXPOSE 9000
ENTRYPOINT ["npm", "deploy"]