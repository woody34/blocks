#alpine build
FROM node:13.12.0-alpine as builder
WORKDIR /usr/src/blocks
ENV PATH /usr/src/blocks/node_modules/.bin:$PATH
COPY package*.json ./
RUN npm ci --silent --only=production
RUN npm install prettier
COPY . ./
RUN npm run build:prod
FROM nginx:stable-alpine
#COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/blocks/build /usr/share/nginx/html
EXPOSE 8080
#CMD ["nginx", "-g", "daemon off;"]
CMD ["/bin/sh", "-c", "sed -i 's/listen  .*/listen 8080;/g' /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'"]



# Node 12 build
# FROM node:12
# WORKDIR /usr/src/blocks
# COPY package*.json ./
# RUN npm ci --silent --only=production
# RUN npm install prettier
# COPY . ./
# RUN npm run build:prod
# EXPOSE 8080
# CMD [ "npm", "run", "start" ]