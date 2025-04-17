const mongoose = require('mongoose');

function connectToDB() {
    mongoose.connect(process.env.MONGO_URI).then(() =>{
        console.log("Connected to MongoDB successfully");   

    })
}


module.exports = connectToDB;

// another way to connect to MongoDB using async/await

// async function connectToDB() {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("Connected to MongoDB successfully");
// }