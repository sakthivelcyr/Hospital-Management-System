var mySQLAttendance = require('../db/sql_attendance');

function addAttendance(req, res) {
    var attendacne = req.body;
    mySQLAttendance.addAttendance(attendacne, function(err, result) {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    });
}

function deleteAttendance(req, res) {
    var attendacne = req.body;
    mySQLAttendance.deleteAttendance(attendacne, function(err, result) {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    });
}

function updateAttendance(req, res) {
    var attendacne = req.body;
    mySQLAttendance.updateAttendance(attendacne, function(err, result) {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    });
}

function getAttendance(req, res) {
    mySQLAttendance.getAttendance(function(err, result) {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    });
}

module.exports = {
    getAttendance: getAttendance,
    updateAttendance: updateAttendance,
    deleteAttendance: deleteAttendance,
    addAttendance: addAttendance
}