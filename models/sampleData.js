'use strict';


var mongoose = require('mongoose'),
Task = mongoose.model('Tasks');


Task new_task_A = new Task(name: 'Design UX/UI', status: 'done');
new_task_A.save(function (err, task) {
    if (err)
        console.log('error')
    else
        console.log('success')
});

Task new_task_B = new Task( name: 'Design database', status: 'doing' );
new_task_B.save(function (err, task) {
    if (err)
        console.log('error')
    else
        console.log('success')
});

Task new_task_C = new Task( name: 'Design Web API', status: 'done' );
new_task_C.save(function (err, task) {
    if (err)
        console.log('error')
    else
        console.log('success')
});

Task new_task_D = new Task( name: 'Create Web API', status: 'done' );
new_task_D.save(function (err, task) {
    if (err)
        console.log('error')
    else
        console.log('success')
});