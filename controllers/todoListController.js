'use strict';


var mongoose = require('mongoose'),
    Task = mongoose.model('Tasks');


exports.sample_tasks = function (req, res) {
    var arr = [{ name: 'Design UX/UI', status: 'done' },
    { name: 'Design database', status: 'doing' },
    { name: 'Design Web API' },
    { name: 'Create Web API' }
    ];
    Task.insertMany(arr, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

exports.list_all_tasks = function (req, res) {
    Task.find({}, function (err, task) {
        if (err)
            res.status(400).send(err);
        res.json(task);
    });
};




exports.create_a_task = function (req, res) {
    var new_task = new Task(req.body);
    new_task.save(function (err, task) {
        if (err)
            res.status(400).send(err);
        res.json(task);
    });
};


exports.read_a_task = function (req, res) {
    Task.findById(req.params.taskId, function (err, task) {
        if (err)
            res.status(400).send(err);
        res.json(task);
    });
};


exports.update_a_task = function (req, res) {
    Task.findOneAndUpdate({ _id: req.params.taskId }, req.body, { new: true }, function (err, task) {
        if (err)
            res.status(400).send(err);
        res.json(task);
    });
};

exports.update_status_a_task = function (req, res) {

    Task.findOne({ _id: req.params.taskId }, function (err, task) {
        task.status = req.body.status
        task.save(function (err, t) {
            if (err)
                res.status(400).send(err);
            res.json(t);
        })
    });
};


exports.delete_a_task = function (req, res) {
    Task.remove({
        _id: req.params.taskId
    }, function (err, task) {
        if (err)
            res.status(400).send(err);
        res.json({ message: 'Task successfully deleted' });
    });
};