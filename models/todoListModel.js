'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var statusLst = Object.freeze({
    Done: 'done',
    Pending: 'pending',
});

var TaskSchema = new Schema({
    subject: {
        type: String,
        required: 'Kindly enter a subject of the task'
    },
    detail: {
        type: String,
        required: 'Kindly enter a subject of the task'
    },
    status: {
        type: [{
            type: String,
            enum: Object.values(statusLst)
        }],
        default: statusLst.Pending
    }
});

module.exports = mongoose.model('Tasks', TaskSchema);

