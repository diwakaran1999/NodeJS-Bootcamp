const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

//Define the candidate schema
const candidateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    party: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    votes: [                //creating array of  objects for each vote
        {
            user: {
                type: mongoose.Schema.Types.ObjectId, 
                ref: 'User',
                required: true,
            },
            votedAt: {
                type: Date,
                defualt: Date.now()
            }
        }
    ],
    voteCount: {
        type: Number,
        defualt: 0,
    },
});

const Candidate = mongoose.model('Candidate', candidateSchema);
module.exports = Candidate;