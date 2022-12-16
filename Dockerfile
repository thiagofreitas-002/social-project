FROM node:lts-alpine
WORKDIR /app
COPY ./package.json .
RUN npm install --force
COPY . .
CMD npm run dev -- --host --port 8080
EXPOSE 8080:8080
