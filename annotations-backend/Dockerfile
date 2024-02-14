FROM node:20-alpine3.18 AS build

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install

COPY . .
RUN npm run build

FROM node:20-alpine3.18 AS deploy
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package*.json ./
COPY --from=build /app/dist ./dist
COPY --from=build /app/prisma ./prisma

EXPOSE 80
EXPOSE 443

ENTRYPOINT [ "npm", "run", "start:prod" ]