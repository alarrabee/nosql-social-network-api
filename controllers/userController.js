const { User, Thought } = require('../models');


module.exports = {
    //GET all users
    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //GET single user by id
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId }).select('-__v');

            if (!user) {
                return res.status(404).json({ message: 'No user with that ID!' });
            }
            
            res.json(user);

        } catch (err) {
            res.status(500).json(err);
        }
    },

    //POST to create a new user
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);

        } catch (err) {
            res.status(500).json(err);
        }
    },

    //PUT to update a user by its id
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body},
                { runValidators: true, new: true },
            );

            if (!user) {
                return res.status(404).json({ message: 'No user with that ID!' });
            }

            res.json(user);

        } catch (err) {
            res.status(500).json(err);
        }
    },

    //DELETE to remove a user by id and any associated thoughts with it
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.userId });

            if (!user) {
                return res.status(404).json({ message: 'No user with that ID!' });
            }

            await Thought.deleteMany({ _id: { $in: user.thoughts } });
            res.json({ message: 'User and associated thoughts deleted!' })

        } catch (err) {
            res.status(500).json(err);
        }
    },


    //POST to add a new friend to a user's friend list



    //DELETE to remove a friend from a user's friend list

};



