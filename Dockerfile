# https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

#FROM node:12
FROM node:13.12.0-alpine as builder

# Create app directory
WORKDIR /usr/src/blocks

ENV PATH /usr/src/blocks/node_modules/.bin:$PATH

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
RUN npm ci --silent --only=production
COPY . ./
RUN npm run build:prod

# Install app dependencies
#RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source

FROM nginx:stable-alpine
COPY --from=builder /usr/src/blocks/build /usr/share/nginx/html
EXPOSE 8080
CMD [ "npm", "run", "start" ]

# https://developer.okta.com/blog/2020/06/24/heroku-docker-react
# Heroku nodes
# heroku container:login
# git remote add heroku https://git.heroku.com/<your-app-name>.git
# heroku container:push web --remote heroku
# heroku container:release web --remote heroku
# heroku open --remote heroku