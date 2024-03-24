const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

//define user schema
const personSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
    },
    work: {
        type: String,
        enum: ['chef', 'owner', 'manager','waiter']
    },
    mobile: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    address: {
        type: String,
    },
    salary: {
        type: Number,
        required: true,
    },
    username: {
        required: true,
        type: String,
    },
    password: {
        required: true,
        type: String,
    }
});

personSchema.pre('save', async function (next) {
    const person = this;

    //hash the password only if it is not hashed already
    if (!person.isModified('password')) return next();
    try {
        //hash password generate
        const salt = await bcrypt.genSalt(10);

        //hash password
        const hashedPassword = await bcrypt.hash(person.password, salt);

        //override the plain password with the hashed password
        person.password = hashedPassword;
        next();
    } catch (error) {
        return next(error);
    }
});

personSchema.methods.comparePassword = async function (candidatePassword) {
    try {
        //use bcrypt to compare password with the hashed password
        const isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch;
    } catch (error) {
        throw error;
    }
}

//create person model

const Person = mongoose.model('Person', personSchema);

module.exports = Person;