FROM sykescottages/node:20

RUN mkdir /app
COPY . .
EXPOSE 3001
CMD ["npm", "run", "dev"]