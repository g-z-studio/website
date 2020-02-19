FROM node:13.8.0

WORKDIR .

COPY package.json .
RUN npm install --quiet

COPY . .