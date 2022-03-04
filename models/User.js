const mongoose = require('mongoose');


const UserSchema = mongoose.Schema({
        id: Number,
        name: String,
        email: String,
        created_at: Date.now
})