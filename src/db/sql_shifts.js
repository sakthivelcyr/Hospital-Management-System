var connection = require('./config.js');

function addShiftDetails(time, callback) {
    connection.query('Insert into shift  SET ?', time, function(err, results) {
        if (err)
            callback(err, null);
        else
            callback(null, results);
    });
}

function deleteShiftDetails(time, callback) {
    var whereData = {}
    whereData.id = time.id
    if (time) {
        connection.query("Delete from shift WHERE ?", whereData, function(error, results) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results);
            }
        });
    }
}

function updateShiftDetails(time, callback) {
    var whereData = {}
    whereData.id = time.id
    if (time) {
        connection.query("update shift SET ? WHERE ?", [time, whereData], function(err, results) {
            if (err)
                callback(err, null);
            else
                callback(null, results);
        });
    }
}

function getShiftDetails(callback) {
    var shiftResults = []
    connection.query('select s.*, hw.name as worker_name from shift s, healthcare_workers hw WHERE hw.id = s.healthcare_id', function(err, results) {
        if (err) {
            console.log(err);
        }
        if (results) {
            results.forEach(schedule => {
                var detail = {}
                detail.id = schedule.id,
                    detail.healthcare_id = schedule.healthcare_id
                detail.duty = schedule.duty,
                    detail.from_time = schedule.from_time,
                    detail.to_time = schedule.to_time
                shiftResults.push(detail);
            });
            callback(null, shiftResults)
        } else {
            console.log("Record not found");
        }
    });
}

module.exports = {
    getShiftDetails: getShiftDetails,
    updateShiftDetails: updateShiftDetails,
    deleteShiftDetails: deleteShiftDetails,
    addShiftDetails: addShiftDetails
}