from node:14.19.0 

WORKDIR /usr/src/app

COPY package.json .
COPY scripts scripts
COPY common common
COPY backend-common backend-common
COPY api api

RUN npm install -g typescript
RUN yarn setup

WORKDIR /usr/src/app/api
RUN yarn build

EXPOSE 3000

CMD [ "yarn", "start" ]