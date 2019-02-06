FROM node:6.9.5
WORKDIR /carsFrontApp
COPY package.json /carsFrontApp
RUN npm install
COPY . /carsFrontApp
CMD ["npm", "start"]
EXPOSE 3000