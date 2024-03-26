const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    id: Number,
body: String,
postId: Number,
user: {
id: Number,
username: String
}
});

module.exports = mongoose.model('Comment', commentSchema);