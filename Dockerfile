FROM strapi/base

WORKDIR /strapi-app

COPY ./package.json ./

RUN yarn install

COPY . .

ENV NODE_ENV production

RUN yarn build

RUN yarn bootstrap

EXPOSE 1337

ENTRYPOINT [ "./entrypoint.sh" ]
