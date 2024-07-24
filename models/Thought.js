const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: [true, 'Your input cannot be empty. Please type something.'],
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        username: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);



//function to format the date

//reactionCount virtual


const Thought = model('thought', thoughtSchema);


module.exports = Thought;