FROM --platform=linux/arm64 node:lts-alpine

ARG PORT=8080
ENV PORT $PORT

EXPOSE $PORT

RUN mkdir -p /home/node/app
WORKDIR /home/node/app

COPY . .

RUN npm ci --production

CMD [ "npm", "run", "start" ]