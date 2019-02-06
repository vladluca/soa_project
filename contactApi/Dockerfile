FROM node:6.9.5
WORKDIR /contactApiApp
COPY package.json /contactApiApp
RUN npm install
COPY . /contactApiApp
CMD node server.js
EXPOSE 3002