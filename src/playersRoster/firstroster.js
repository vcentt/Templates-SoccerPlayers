const mongoose = require("mongoose");

const playerRosterSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    birth: {
        type: Date,
        require: true
    },
    height: {
        type: Number,
        require: true
    },
    equipement: {
        type: String,
        require: true
    },
    position: {
        type: String,
        requiere: true
    },
    number: {
        type: Number,
        requiere: true
    }

})

module.exports = mongoose.model("PlayersRoster", playerRosterSchema)