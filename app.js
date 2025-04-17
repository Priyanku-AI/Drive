const express = require('express');
const app = express();
const port = 3000;
const userRouter = require('./routes/user.routes');
const dotenv = require('dotenv');
const connectToDB = require('./config/db'); // Import the database connection
dotenv.config(); // Load environment variables from .env file
console.log(process.env.MONGO_URI); // Log the MongoDB URI for debugging
connectToDB(); // Call the function to connect to the database




// Middleware to parse JSON bodies
// app.use(express.json());
app.use(express.urlencoded({ extended: true })); // since form data is url encoded


app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
//   res.render('index');
// }); 

app.use('/user', userRouter);

app.listen(port, () => {
    console.log("Server is running on port " + port);
});