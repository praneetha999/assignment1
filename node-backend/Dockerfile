# Use official Node.js 18 image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json if available
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all app files
COPY . .

# Expose port 2699
EXPOSE 2699

# Start the app
CMD ["npm", "start"]
