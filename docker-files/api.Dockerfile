from node:14.19.0 as build

WORKDIR /usr/src/app

COPY package.json .
COPY Makefile .
COPY common/package.json common/
COPY backend-common/package.json backend-common/
COPY api/package.json api/

RUN yarn setup

from node:14.19.0

WORKDIR /usr/src/app

COPY common common
COPY backend-common backend-common
COPY api api

COPY --from=build /usr/src/app/common/node_modules common/node_modules
COPY --from=build /usr/src/app/backend-common/node_modules backend-common/node_modules
COPY --from=build /usr/src/app/api/node_modules api/node_modules

WORKDIR /usr/src/app/api
RUN npm install -g typescript
RUN yarn build

EXPOSE 3000

ENTRYPOINT [ "yarn", "start" ]