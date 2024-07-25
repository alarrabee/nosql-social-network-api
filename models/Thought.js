const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');


const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: [true, 'Your input cannot be empty. Please type something.'],
            minlength: 1,
            maxlength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp),
        },
        username: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        reactions: [Reaction.schema],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);



//function that formats the date
function dateFormat(timestamp) {
    const date = new Date(timestamp);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
}



//retrieves the length of the thought's `reactions` array field on query
thoughtSchema
  .virtual('reactionCount')
  .get(function () {
    return this.reactions.length;
  });



const Thought = model('thought', thoughtSchema);

module.exports = Thought;