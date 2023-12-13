/* eslint-disable no-return-await */
const mongoose = require('mongoose');

const connectDB = async (url) => await mongoose.connect('mongodb://localhost:27017/user_data');

module.exports = connectDB;
