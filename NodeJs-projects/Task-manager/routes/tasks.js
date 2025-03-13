const express = require('express')
const router = express.Router()
const {getAllTask,
    createTask,
    singleTask,
    updatingTask,
    deleteTask} = require('../controllers/task')

router.route('/').get(getAllTask).post(createTask)
router.route('/:id').get(singleTask).patch(updatingTask).delete(deleteTask)


module.exports = router

