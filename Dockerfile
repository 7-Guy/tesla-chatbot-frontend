# Step 1: Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json files
COPY package*.json ./

# Step 4: Install app dependencies
RUN npm install

# Step 5: Copy the rest of your app's code into the container
COPY . .

# Step 6: Build the React app for production
RUN npm run build

# Step 7: Expose port 3000 for the React app
EXPOSE 3000

# Step 8: Command to run the app
CMD ["npm", "start"]
