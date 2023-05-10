# # Base image
# FROM node:16-alpine

# # Create the /bookie_ui directory
# RUN mkdir /bookie_ui

# # Install dependencies
# COPY package*.json /bookie_ui/

# # Set the working directory to /react_app
# WORKDIR /bookie_ui/

# # Install NPM
# RUN npm install

# # Copy the React project code into the container
# COPY . /bookie_ui/

# # Build the React app
# RUN npm run build

# # Expose the React server port
# EXPOSE 3000

# # Run the React development server
# CMD ["npm", "start"]


###########
# BUILDER #
###########

# pull official base image
FROM node:18-buster-slim as builder

# set work directory
WORKDIR /usr/src/app/ui

# install dependencies and avoid `node-gyp rebuild` errors
RUN apt-get update && apt-get install -y \
        python \
        make \
        g++ \
    && rm -rf /var/lib/apt/lists/*

# copy package.json and package-lock.json files
COPY ./package*.json ./

# install dependencies
RUN npm install --legacy-peer-deps

# copy our react project
COPY ./ .

# perform npm build
ARG API_SERVER
ENV REACT_APP_API_SERVER=${API_SERVER}
RUN REACT_APP_API_SERVER=${API_SERVER} npm run build

#########
# FINAL #
#########

# pull official base image
FROM node:18-buster-slim

# set work directory
WORKDIR /usr/src/app/ui

# install serve - deployment static server suggested by official create-react-app
RUN npm install -g serve

# copy our build files from our builder stage
COPY --from=builder /usr/src/app/ui/build ./build