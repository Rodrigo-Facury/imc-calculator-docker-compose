FROM node:12.16

USER node
WORKDIR /home/node/

COPY package.json .
RUN npm install

EXPOSE 3001

COPY . .

CMD ["npm", "start"]