require('dotenv').config();
const connectDB = require("./config/db");

const { createServer } = require('./server');
connectDB();
const PORT = process.env.PORT ? Number(process.env.PORT) : 5000;
const app = createServer();

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
