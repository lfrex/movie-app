const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.movies.index);
router.get('/new', ctrl.movies.newMovie);
router.get('/:index', ctrl.movies.show);
router.post('/', ctrl.movies.create);
router.delete('/:index', ctrl.movies.deleteMovie);
router.get('/:index/edit', ctrl.movies.editMovie);
router.put('/:index', ctrl.movies.addMovie);

module.exports = router;