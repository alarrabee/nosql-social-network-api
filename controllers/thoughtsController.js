const { Thought, User } = require('../models');


module.exports = {
    //---THOUGHTS---//
    //GET all thoughts
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //GET a single thought by its id
    async getSingleThought(req, res) {
        try {
            // console.log('req.params.thoughtId', req.params.thoughtId); //degugging
            const thought = await Thought.findOne({ _id: req.params.thoughtId }).select('-__v');

            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID!' });
            }
            
            res.json(thought);

        } catch (err) {
            res.status(500).json(err);
        }
    },

    //POST to create a new thought
    async createThought(req, res) {
        try {
            // Extract username and thoughtText from request body
            const { username, thoughtText } = req.body;

            // Find the user by username
            const user = await User.findOne({ username });

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            // Create the new thought with the username
            const thought = await Thought.create({ thoughtText, username: user._id });

            // Update the user's thoughts array with the new thought's ID
            user.thoughts.push(thoughtText);
            await user.save();

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //PUT to update a thought by its id
    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body},
                { runValidators: true, new: true },
            );

            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID!' });
            }

            res.json(thought);

        } catch (err) {
            res.status(500).json(err);
        }
    },

    //DELETE to remove a thought by its id
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID!' });
            }

            res.json({ message: 'Thought successfully deleted!' });
            
        } catch (err) {
            res.status(500).json(err);
        }
    },


    //---REACTIONS---//
    //POST to create a reaction



    //DELETE to remove a reaction
};
