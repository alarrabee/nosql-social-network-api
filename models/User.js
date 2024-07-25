const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: [true, 'This username is not available to use'],
            required: [true, 'A username is required'],
            trim: true,
        },
        email: {
            type: String,
            unique: [true, 'There is already an account with this email'],
            required: [true, 'An email address is required'],
            //must match a valid email address
            match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            }
        ]
    },
    {
      //indicates that we want virtuals to be included with our response
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);
  

//virtual that retrieves the length of the user's `friends` array field on query
userSchema.virtual('friendCount').get(function(){
    return this.friends.length;
});



  // Initialize our User model
const User = model('user', userSchema);


module.exports = User;