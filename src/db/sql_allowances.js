var connection = require('./config.js');

function addAllowance(allowance, callback) {
    connection.query('Insert into allowances  SET ?', allowance, function(err, results) {
        if (err)
            callback(err, null);

        else
            callback(null, results);
    });
}

function deleteAllowance(allowance, callback) {
    var whereData = {}
    whereData.id = allowance.id
    if (allowance) {
        connection.query("Delete from allowances WHERE ?", whereData, function(error, results) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results);
            }
        });
    }
}

function updateAllowance(allowance, callback) {
    var whereData = {}
    whereData.id = allowance.id
    if (allowance) {
        connection.query("update allowances SET ? WHERE ?", [allowance, whereData], function(err, results) {
            if (err)
                callback(err, null);
            else
                callback(null, results);
        });
    }
}

function getAllowance(callback) {
    //var allowanceResults = [];
    connection.query('select a.*, hw.name as worker_name from allowances a, healthcare_workers hw WHERE hw.id = a.healthcare_id', function(err, results) {
        if (err) {
            console.log(err);
        }
        if (results) {
            /*results.forEach(all => {
                var detail = {}
                detail.id = all.id,
                    detail.healthcare_id = all.healthcare_id,
                    detail.allowance_name = all.allowance_name,
                    detail.total = all.total,
                    detail.monthly = all.monthly,
                    detail.remaining = all.remaining,
                    detail.status = all.status
                allowanceResults.push(detail);
            });*/
            callback(null, results)
        } else {
            console.log("Record not found");
        }
    });
}

module.exports = {
    getAllowance: getAllowance,
    updateAllowance: updateAllowance,
    deleteAllowance: deleteAllowance,
    addAllowance: addAllowance
}