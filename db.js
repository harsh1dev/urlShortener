// db.js
const mongoose = require('mongoose');

// MongoDB connection string
const uri = 'mongodb+srv://admin:Harsh123@prodcluster.bgqsp.mongodb.net/?retryWrites=true&w=majority&appName=prodCluster'

const connectDB = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('MongoDB connection failed:', err.message);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
