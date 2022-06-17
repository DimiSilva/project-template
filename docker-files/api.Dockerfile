from node:14.19.0 

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .
COPY .yarnrc.yml .
COPY .yarn/releases .yarn/releases
COPY common common
COPY backend-common backend-common
COPY api api

RUN npm install -g typescript
RUN yarn install 

RUN yarn api-build

EXPOSE 3000

CMD [ "yarn", "api-start" ]