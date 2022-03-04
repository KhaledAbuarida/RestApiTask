const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');

const PostSchema = mongoose.Schema({
        id: Number,
        text: String,
        image: {
            text: String,
            imagedata: Image
        },
        user: String,
        create_at: Date.now
   
})