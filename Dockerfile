FROM node:24
WORKDIR /app
COPY . .
RUN npm i
RUN npx prisma generate
RUN npm run build
CMD ["npm", "run", "start"]