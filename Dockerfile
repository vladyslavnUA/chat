# ---- Base Node ----
FROM node:15.2

# Create directory
RUN mkdir -p /app

# Set directory
WORKDIR /app

# Copy dependencies
COPY ./package.json /app

# install app dependencies
RUN npm i && npm cache clean --force

# copy project 
COPY ./ /app

# setting env
ENV NODE_ENV production

# env port
ENV PORT 80

# open port
EXPOSE 3000 

# start project
CMD ["npm", "start"]