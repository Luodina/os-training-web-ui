FROM node:lts-alpine
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build

EXPOSE 9000
ENTRYPOINT ["yarn", "deploy"]