const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect("mongodb://localhost:27017/theatre_details");
}

module.exports = connect;