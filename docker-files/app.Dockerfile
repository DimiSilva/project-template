from node:14.19.0 as dependencies

WORKDIR /usr/src/app

COPY package.json .
COPY Makefile .
COPY common/package.json common/
COPY app/package.json app/

RUN yarn setup

from node:14.19.0 as build

WORKDIR /usr/src/app

COPY common common
COPY app app

COPY --from=dependencies /usr/src/app/common/node_modules common/node_modules
COPY --from=dependencies /usr/src/app/app/node_modules app/node_modules

WORKDIR /usr/src/app/app
RUN npm install -g typescript
RUN yarn build

from nginx:stable

RUN rm /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/app/app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]