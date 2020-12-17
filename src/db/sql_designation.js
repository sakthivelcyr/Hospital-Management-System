var connection = require('./config.js');

function addDesignation(status, callback) {
    connection.query('Insert into designation_details  SET ?', status, function(err, results) {
        if (err)
            callback(err, null);
        else
            callback(null, results);
    });
}

function deleteDesignation(status, callback) {
    var whereData = {}
    whereData.id = status.id
    if (status) {
        connection.query("Delete from designation_details WHERE ?", whereData, function(error, results) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results);
            }
        });
    }
}

function updateDesignation(status, callback) {
    var whereData = {}
    whereData.id = status.id
    if (status) {
        connection.query("update designation_details SET ? WHERE ?", [status, whereData], function(err, results) {
            if (err)
                callback(err, null);
            else
                callback(null, results);
        });
    }
}

function getDesignation(callback) {
    var designationResults = []
    connection.query('select * from designation_details ORDER BY id ASC', function(err, results) {
        if (err) {
            console.log(err);
        }
        if (results) {
            results.forEach(post => {
                var detail = {}
                detail.id = post.id,
                    detail.name = post.name
                designationResults.push(detail);
            });
            callback(null, designationResults)
        } else {
            console.log("Record not found");
        }
    });
}

module.exports = {
    getDesignation: getDesignation,
    updateDesignation: updateDesignation,
    deleteDesignation: deleteDesignation,
    addDesignation: addDesignation
}