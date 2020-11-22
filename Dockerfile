#base image
FROM node:12.18.1-alpine


#add /app/node_modules/.bin to $PATH
ENV PATH /app/node_modules/.bin:$PATH

#install and cache app dependencies
COPY package.json /app/package.json
COPY . /app
WORKDIR /app

RUN npm install
RUN npm install @vue/cli -g

#start app
CMD ["npm", "run", "serve"]