const mongoose = require('mongoose');
const url = "mongodb://geethamgsc:Geetu123@ac-r5ionri-shard-00-00.t0losrt.mongodb.net:27017,ac-r5ionri-shard-00-01.t0losrt.mongodb.net:27017,ac-r5ionri-shard-00-02.t0losrt.mongodb.net:27017/collegeapp?ssl=true&replicaSet=atlas-m1wgsw-shard-0&authSource=admin&retryWrites=true&w=majority";

module.exports.connect = () => {
    mongoose
        .connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log("MongoDB connected successfully");
        })
        .catch((error) => console.log("Error: ", error));
};
