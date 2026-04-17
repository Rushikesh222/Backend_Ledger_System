const accountModel = require('../models/account.model');


const createAccountController = async (req, res) => {
    try {
        const userId = req.user._id

        const newAccount = await accountModel.create({ user: userId})
        res.status(201).json({ message: 'Account created successfully', data: newAccount, status: "success" });
    } catch (error) {
        console.error('Error creating account:', error);
        res.status(500).json({ message: 'Server error' });
    }
}
const getUserAccountController = async (req, res) => {
    try {
        const userId = req.user._id
        const account = await accountModel.find({ user
: userId });
        if (!account) {
            return res.status(404).json({ message: 'Account not found', status: "failed" });
        }   
        res.status(200).json({ message: 'Account retrieved successfully', data: account, status: "success" });
    } catch (error) {
        console.error('Error retrieving account:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

const getAccountBalanceController = async (req, res) => {
    try {
        const {accountId} = req.params;
        const account = await accountModel.findOne({
            _id: accountId,
            user: req.user._id
        });
        if (!account) {
            return res.status(404).json({ message: 'Account not found', status: "failed" });
        }
        const balance = await account.getBalance();
        // if (account.user.toString() !== req.user._id.toString()) {
        //     return res.status(403).json({ message: 'Forbidden Access, account does not belong to the user', status: "failed" });
        // }
        res.status(200).json({ message: 'Account balance retrieved successfully', data: { balance: balance , accountId : account._id}, status: "success" });
    } catch (error) {
        console.error('Error retrieving account balance:', error);
        res.status(500).json({ message: 'Server error' });
    }
};



module.exports = { 
    createAccountController,
    getUserAccountController,
    getAccountBalanceController
}