var connection = require('./config.js');

function addLeaveAllowance(lallowance, callback) {
    connection.query('Insert into leave_allowance  SET ?', lallowance, function(err, results) {
        if (err)
            callback(err, null);

        else
            callback(null, results);
    });
}

function deleteLeaveAllowance(lallowance, callback) {
    var whereData = {}
    whereData.id = lallowance.id
    if (lallowance) {
        connection.query("Delete from leave_allowance WHERE ?", whereData, function(error, results) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results);
            }
        });
    }
}

function updateLeaveAllowance(lallowance, callback) {
    var whereData = {}
    whereData.id = lallowance.id
    if (lallowance) {
        connection.query("update leave_allowance SET ? WHERE ?", [lallowance, whereData], function(err, results) {
            if (err)
                callback(err, null);
            else
                callback(null, results);
        });
    }
}

function getLeaveAllowance(callback) {
    var leaveResults = []
    connection.query('select la.*, d.name as designation from leave_allowance la, designation_details d WHERE d.id = la.role_id', function(err, results) {
        if (err) {
            console.log(err);
        }
        if (results) {
            /*results.forEach(lall => {
                var detail = {}
                detail.id = lall.id,
                    detail.role_id = lall.role_id,
                    detail.leave_count = lall.leave_count
                leaveResults.push(detail);
            });*/
            callback(null, results)
        } else {
            console.log("Record not found");
        }
    });
}

module.exports = {
    getLeaveAllowance: getLeaveAllowance,
    updateLeaveAllowance: updateLeaveAllowance,
    deleteLeaveAllowance: deleteLeaveAllowance,
    addLeaveAllowance: addLeaveAllowance
}