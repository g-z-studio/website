FROM node:11-alpine

# Also exposing VSCode debug ports
EXPOSE 1337

# Create and set workdir
RUN mkdir -p /home/app
WORKDIR /home/app

# Copy package.json to cache packages image layer
COPY package*.json ./

# Install nodejs local packages
RUN ["npm", "install"]

# Copy sourcecode files
COPY . .