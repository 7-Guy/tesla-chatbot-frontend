# Step 1: Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Step 2: Define a build argument for the base URL
ARG REACT_APP_BASE_URL

# Step 3: Set the working directory in the container
WORKDIR /app

# Step 4: Copy package.json and package-lock.json files
COPY package*.json ./

# Step 5: Install app dependencies
RUN npm install

# Step 6: Set the environment variable for the React app
# This will make REACT_APP_BASE_URL available in the React app during build
ENV REACT_APP_BASE_URL=${REACT_APP_BASE_URL}

# Step 7: Copy the rest of your app's code into the container
COPY . .

# Step 8: Build the React app for production
RUN npm run build

# Step 9: Expose port 3000 for the React app
EXPOSE 3000

# Step 10: Command to run the app
CMD ["npm", "start"]
