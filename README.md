# Backend_Ledger_System
# 🚀 Ledger Management System (Backend API)

A backend API built using Node.js, Express, and MongoDB to manage ledger transactions (Credit/Debit) and calculate real-time account balance.

---

## 📌 Features

- 🔐 User Authentication (Register & Login)
- 🔑 JWT-based Authorization
- 🔒 Password Hashing using bcrypt
- 💰 Add Credit & Debit Transactions
- 📊 Real-time Balance Calculation using MongoDB Aggregation
- ⚡ RESTful API Design
- 🛡️ Error Handling & Validation

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (Authentication)
- bcrypt (Password Security)

---

## 📂 Project Structure
project/
│
├── controllers/
├── models/
├── routes/
├── middlewares/
├── config/
├── services/
├── server.js
├──index.js
└── .env


---

## ⚙️ Installation & Setup

1. Clone the repository
git clone https://github.com/Rushikesh222/Backend_Ledger_System.git

2. Install dependencies
npm install

3. Create `.env` file
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLIENT_ID=your-client_id
CLIENT_SECRET=your_client_secret
REFRESH_TOKEN=refresh_token
EMAIL_USER=user_mail_id

4. Run the server
npm run dev

Server will run on:
http://localhost:3000

---

## 🔗 API Endpoints

### 🔹 Auth Routes

| Method | Endpoint | Description |
|--------|--------|-------------|
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | Login User |
| POST | /api/auth/logout | Logout User |
| POST | /api/transactions/system/initial-funds | System Initial Funds |
| POST | /api/transactions| Transaction |
| POST | /api/accounts/ | Create User Account |
| GET | /api/accounts | Get All User Account |
| GET | /api/accounts/balance/:accountId| Get User Account Balance |

---

## 📬 API Testing

You can test all APIs using Postman Collection:

👉 https://grey-station-134310.postman.co/workspace/cbedab46-f910-4df4-97f7-eaeeb4fdcb0c/collection/29492943-9bca5ca9-cb7b-46c2-b2d9-3ae55c713db8?action=share&source=copy-link&creator=29492943

---

## 📊 Example Response

```json
{
    "message": "Login successful",
    "data": {
        "id": "69e09681905c99742bf492bd",
        "email": "rahultest2@gmail.com",
        "name": "rahul"
    },
    "status": "success",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZTA5NjgxOTA1Yzk5NzQyYmY0OTJiZCIsImlhdCI6MTc3NjQxMzU4NywiZXhwIjoxNzc2NDE3MTg3fQ.Dm9Quu-vyc3b5DmUnduqMi3GBTYaVdxuMGVrWzFcpfg"
}



