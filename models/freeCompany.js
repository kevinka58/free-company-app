const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema(
    {
        content: {
            type: String,
            required: true,
        },
        characterName: {
            type: String,
            required: true,
        },
        charLevel: {
            type: Number,
            required: true,
            min: 1,
            max: 80,
        },
        prefRole: {
            type: String,
            enum: [
                "Tank",
                "Healer",
                "Damage (DPS)",
            ],
            required: true,
        },
    },
    {
        timestamps: true,
    }
    )


const freeCompanySchema = new Schema(
    {
        companyName: {
            type: String,
            required: true,
        },
        companyTag: {
            type: String,
            required: true,
            maxLength: 5,
        },
        serverName: {
            type: String,
            enum: [
                "Adamantoise", "Cactuar", "Faerie", "Gilgamesh", "Jenova", "Midgardsormr", "Sargatanas", "Siren",
                "Balmung", "Brynhildr", "Coeurl", "Diabolos", "Goblin", "Malboro", "Mateus", "Zalera",
                "Behemoth", "Excalibur", "Exodus", "Famfrit", "Hyperion", "Lamia", "Leviathan", "Ultros",
            ]
        },
        grandCompany: {
            type: String,
            enum: [
             "The Immortal Flames",
             "The Maelstrom",
             "The Order of the Twin Adder"
            ]
        },
        rank: {
            type: Number,
            required: true,
        },
        companyPop: {
            type: Number,
            required: true
        },
        companyMotto: {
            type: String,
            maxLength: 200,
        },
        comments: [commentSchema],
    },
    {
        timestamps: true
    })


module.exports = mongoose.model('FreeCompany', freeCompanySchema);