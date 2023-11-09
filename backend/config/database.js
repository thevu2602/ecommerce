const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose
        .connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
        .then((data) => {
            console.log(`Mongodb connected successfully`);
        })
        .catch((error) => {
            console.log(`Mongodb connected failure`);
        });
};

module.exports = connectDatabase;
