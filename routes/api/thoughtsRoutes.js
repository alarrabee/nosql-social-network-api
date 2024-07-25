const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought
} = require('../../controllers/thoughtsController');


// api/thoughts
router.route('/').get(getThoughts).post(createThought);


// /api/thoughts/:thoughtsId
router.route('/:thoughtsId').get(getSingleThought).put(updateThought).delete(deleteThought);


module.exports = router;