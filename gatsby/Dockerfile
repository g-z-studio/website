FROM node:11-alpine

# Also exposing VSCode debug ports
EXPOSE 8000

# Create and set workdir
RUN mkdir -p /home/gatsby-app
WORKDIR /home/gatsby-app

# Install linux system dependencies for alpine
RUN \
  apk add --no-cache python make curl g++ && \
  apk add vips-dev fftw-dev --no-cache --repository http://dl-3.alpinelinux.org/alpine/edge/community --repository http://dl-3.alpinelinux.org/alpine/edge/main && \
  rm -fR /var/cache/apk/*

# Install nodejs global packages
RUN npm install -g gatsby-cli

# Copy package.json to cache packages image layer
COPY package*.json ./

# Install nodejs local packages
RUN ["npm", "install"]

# Copy sourcecode files
COPY . .

RUN ["npm", "rebuild"]