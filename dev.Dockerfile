FROM node:14.19.3-alpine

ENV NODE_ENV development

RUN npm install -g npm@6.14.13

#add turborepo
RUN yarn global add turbo

#add strapi
RUN yarn global add @strapi/strapi@${STRAPI_VERSION}

# Set working directory
WORKDIR /app

# Install app dependencies
COPY  ["yarn.lock", "package.json", "./"]

# Copy source files
COPY . .

# Install app dependencies
RUN yarn

# DB Seed
RUN yarn seed

# Build
# RUN yarn build

EXPOSE 3000 1337

#CMD ["yarn", "build", "--clean"]

CMD ["yarn", "dev"]
