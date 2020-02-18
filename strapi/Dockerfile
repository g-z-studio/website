FROM node:10-alpine

WORKDIR /usr/src/api

# RUN echo "unsafe-perm = true" >> ~/.npmrc

# RUN apk add --no-cache build-base gcc autoconf automake libtool zlib-dev libpng-dev nasm

# RUN npm install -g strapi@beta

# RUN npm install -g strapi@alpha

COPY 
RUN chmod +x ./strapi.sh

EXPOSE 1337

COPY healthcheck.js ./
HEALTHCHECK --interval=15s --timeout=5s --start-period=30s \
      CMD node /usr/src/api/healthcheck.js

CMD ["./strapi.sh"]
