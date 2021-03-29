# build environment
FROM timbru31/java-node:8 as builder
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY . /usr/src/app
RUN npm install
RUN npm run generate:api
RUN npx ng b --prod

# production environment
FROM nginx:1.19.8-alpine
RUN rm -rf /etc/nginx/conf.d
RUN mkdir -p /etc/nginx/conf.d
COPY ./default.conf /etc/nginx/conf.d/
COPY --from=builder /usr/src/app/dist/kicker-liga /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
