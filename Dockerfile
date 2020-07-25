FROM node:12
WORKDIR /home/parsasi/Documents/personal/code-jar
COPY package*.json ./
RUN npm install
EXPOSE 8080
CMD [ "npm", "start" ]