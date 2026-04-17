 const app = require('./index');
const port = 3000;


// Connect to MongoDB
const connectDB = require('./src/config/db');
connectDB(); 

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});