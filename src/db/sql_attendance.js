var connection = require('./config.js');

function addAttendance(attendance, callback) {
    connection.query('Insert into attendance_details SET ?', attendance, function(err, results) {
        if (err)
            callback(err, null);
        else
            callback(null, results);
    });
}

function deleteAttendance(attendance, callback) {
    var whereData = {}
    whereData.id = attendance.id
    if (attendance) {
        connection.query("Delete from attendance_details WHERE ?", whereData, function(error, results) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results);
            }
        });
    }
}

function updateAttendance(attendance, callback) {
    var whereData = {}
    whereData.id = attendance.id
    if (attendance) {
        connection.query("update attendance_details SET ? WHERE ?", [attendance, whereData], function(err, results) {
            if (err)
                callback(err, null);
            else
                callback(null, results);
        });
    }
}

function getAttendance(callback) {
    //var attendanceResults = []
    connection.query('select a.*, hw.name as worker_name from attendance_details a, healthcare_workers hw WHERE hw.id = a.healthcare_id', function(err, results) {
        if (err) {
            console.log(err);
        }
        if (results) {
            /*results.forEach(att => {
                var detail = {}
                detail.id = att.id,
                    detail.healthcare_id = att.healthcare_id
                detail.in_time = att.in_time,
                    detail.out_time = att.out_time,
                    detail.date = att.date
                attendanceResults.push(detail);
            });*/
            callback(null, results)
        } else {
            console.log("Record not found");
        }
    });
}

module.exports = {
    getAttendance: getAttendance,
    updateAttendance: updateAttendance,
    deleteAttendance: deleteAttendance,
    addAttendance: addAttendance
}