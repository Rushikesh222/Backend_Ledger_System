const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

const authRoutes = require('./src/routes/auth.routes');
const accountRoutes = require('./src/routes/account.routes');
const transactionRoutes = require('./src/routes/transaction.routes');

app.use(express.json());
app.use(cookieParser())
    
app.use('/api/auth', authRoutes);
app.use('/api/accounts', accountRoutes);
app.use('/api/transactions', transactionRoutes);``

module.exports = app;
