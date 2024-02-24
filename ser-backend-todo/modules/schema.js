const mongoose = require("mongoose")

const schemaStructur = new mongoose.Schema(
    {
        todo : String,
        isCompleate : Boolean
    }
)

const Task = mongoose.model('task',schemaStructur)

module.exports = Task