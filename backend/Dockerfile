FROM node:lts-alpine
WORKDIR /express-app
COPY . /express-app
RUN npm install
EXPOSE 8000
CMD [ "node", "app.js" ]