FROM node:lts-alpine AS build_stage

WORKDIR /app

COPY . /app

RUN npm install
RUN npm run build

FROM nginx:stable-alpine

COPY --from=build_stage /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]