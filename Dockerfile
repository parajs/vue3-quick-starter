FROM node:16.15.0 as builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY ./ .

RUN npm run build-only

FROM nginx:1.19.0-alpine

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]

