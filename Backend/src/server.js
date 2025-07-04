const http = require('http');
const app = require('./app');
const port = process.env.PORT || 4000
const connectToDb = require('./db/db')

const server = http.createServer(app);

connectToDb()
.then(() => {
    server.listen(port, () => {
      console.log(`server is listening on port ${port}....`);
    });
  })
  .catch(() => {
    console.log("Database Not Connected...");
  });