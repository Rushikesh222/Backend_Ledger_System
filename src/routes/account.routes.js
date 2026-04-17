const express = require('express');
const {authMiddleware} = require('../middlewares/auth.middleware');
const { createAccountController, getUserAccountController, getAccountBalanceController } = require('../controllers/account.controller');
const router = express.Router();



/**
 * - Post /api/accounts
 * - Creates a new account for the authenticated user.
 * - Requires authMiddleware to ensure the user is authenticated.
 */


router.post('/', authMiddleware,createAccountController)   

/**
 * - GET /api/accounts
 * - Retrieves the account for the authenticated user.
 * - Requires authMiddleware to ensure the user is authenticated.
 */

router.get('/', authMiddleware,getUserAccountController)   

/**
 * - GET /api/accounts/balance/:accountId
 * - Retrieves the account balance for the authenticated user.
 * - Requires authMiddleware to ensure the user is authenticated.
 */

router.get('/balance/:accountId', authMiddleware, getAccountBalanceController )




module.exports = router;