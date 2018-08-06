'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const statuslst = Object.freeze({
    Doing: 'doing',
    Done: 'done',
    Pending: 'pending',
});

var TaskSchema = new Schema({
    name: {
        type: String,
        required: 'Kindly enter the name of the task'
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: Object.values(statuslst)
        }],
        default: ['pending']
    }
});

module.exports = mongoose.model('Tasks', TaskSchema);

