// LIBRARIES
const express = require('express');
const cors = require('cors');
require('dotenv').config();

// ROUTES
const productRouter = require('./routes/productRoute');
const userRouter = require('./routes/userRoute');

// CONFIG DATA BASE
require('./config/db');

// INSTANCE EXPRESS
const app = express();

// ALL ORIGINS
app.use(cors());

// POST -> JSON
app.use(express.json());

// USE ROUTE
app.use('/api/products', productRouter); // assuming you have specific paths for your routers
app.use('/api/users', userRouter);

// INIT SERVER
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
