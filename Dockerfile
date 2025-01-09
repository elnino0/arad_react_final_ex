# Use an official Node.js image as a base
FROM node:20.12.0

# Set the working directory to /app
WORKDIR /app


# Copy the package*.json files to the working directory
COPY package*.json ./
COPY index.html ./
COPY vite.config.js ./
COPY postcss.config.js ./
COPY tailwind.config.js ./
COPY eslint.config.js ./


# Install the dependencies
RUN npm install

# Copy the application code to the working directory
COPY ./src ./src

# Expose the port that the application will use
EXPOSE 5173

# Run the command to start the application when the container launches
CMD ["npm", "run", "dev"]