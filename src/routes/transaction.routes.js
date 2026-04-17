const {Router} = require('express');
const {authMiddleware, authSystemUserMiddleware} = require('../middlewares/auth.middleware');
const { createTransaction, createInititalFundsTransaction } = require('../controllers/transaction.controller');

const TransactionRoutes = Router();


TransactionRoutes.post('/', authMiddleware, createTransaction);
TransactionRoutes.post("/system/initial-funds", authSystemUserMiddleware, createInititalFundsTransaction);

module.exports = TransactionRoutes;