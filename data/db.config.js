const mongoose = require("mongoose");
const DB_NAME = process.env.DB_NAME;
const DB_ADMIN = process.env.DB_ADMIN;
const DB_MDP = process.env.DB_MDP;

const MongoDBClient = {
    initialize: () => {
        try {
            mongoose.connect(`mongodb+srv://${DB_ADMIN}:${DB_MDP}@cluster0.s4enj.mongodb.net/${DB_NAME}`, {
                useNewUrlParser: true,
                useUnifiedTopology: true,

            }
            ).then(() => console.log(`Succesfully connected to DB: ${DB_NAME}`))
        } catch (e) { console.log("failed to connect to MongoDB", e) }

    }
}
module.exports = MongoDBClient;