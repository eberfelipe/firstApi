const express = require('express');
const router = express.Router();

const studentsController = require('./controllers/studentsController');

router.get('/', studentsController.listAll);
router.get('/:id', studentsController.findById);
router.post('/', studentsController.create);
router.delete('/:id', studentsController.remove);

module.exports = router;
