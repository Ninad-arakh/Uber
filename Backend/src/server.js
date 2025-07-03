
const http = require('http');
const app = require('./app');
const port = process.env.PORT || 4000
const connectToDb = require('./db/db')

const server = http.createServer(app);

connectToDb()
.then(() => {
    console.log("Database Connected successfully...");
    server.listen(port, () => {
      console.log(`server is listening on port ${port}....`);
    });
  })
  .catch(() => {
    console.log("Database Not Connected...");
  });