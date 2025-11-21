const express = require('express');
const cors = require('cors');
 const morgan = require('morgan');

const webhookRouter = require("../src/routes/webhookRouts");
const leads = require("../src/routes/leadsroutes");
function createServer() {
  const app = express();

   
   
  app.use(express.json()); 
  app.use(express.urlencoded({ extended: true }));
  app.use(morgan('dev'));

  
  app.use(cors({ origin: '*' }));

  // Routes
  app.use('/webhook', webhookRouter);
 
 
  app.use((err, _req, res, _next) => {
    console.error(err);
    res.status(500).json({ error: 'internal_server_error' });
  });

  return app;
}

module.exports = { createServer };
