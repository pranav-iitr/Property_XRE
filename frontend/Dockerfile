# Stage 1: Build the application
FROM node:18 

# Set the working directory
WORKDIR /xre/frontend

# Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start Vite development server
CMD ["npm", "run", "dev"]