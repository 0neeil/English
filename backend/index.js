const express = require('express');
const sequelize = require('./db/db_connection');
const auth_router = require('./auth/auth_router')
require('dotenv').config();

const PORT = process.env.PORT || 5000;
const app = express();

let cors = require("cors");
app.use(express.json())
app.use(cors())



app.use('/auth', auth_router )

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

(async () => {
  try {
    await sequelize.sync();
  } catch (error) {
    console.error('Error connecting to the database:', error);
  } 
})();