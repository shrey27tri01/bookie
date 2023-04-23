# Base image
FROM node:16-alpine

# Create the /bookie_ui directory
RUN mkdir /bookie_ui

# Install dependencies
COPY package*.json /bookie_ui/

# Set the working directory to /react_app
WORKDIR /bookie_ui/

# Install NPM
RUN npm install

# Copy the React project code into the container
COPY . /bookie_ui/

# Build the React app
RUN npm run build

# Expose the React server port
EXPOSE 3000

# Run the React development server
CMD ["npm", "start"]