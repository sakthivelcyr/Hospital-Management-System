var connection = require('./config.js');

function addFeeStructure(structure, callback) {
    connection.query('Insert into fee_structure SET ?', structure, function(err, results) {
        if (err)
            callback(err, null);
        else
            callback(null, results);
    });
}

function deleteFeeStructure(structure, callback) {
    var whereData = {}
    whereData.id = structure.id
    if (structure) {
        connection.query("Delete from fee_structure WHERE ?", whereData, function(error, results) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results);
            }
        });
    }
}

function updateFeeStructure(structure, callback) {
    var whereData = {}
    whereData.id = structure.id
    if (structure) {
        connection.query("update fee_structure SET ? WHERE ?", [structure, whereData], function(err, results) {
            if (err)
                callback(err, null);
            else
                callback(null, results);
        });
    }
}

function getFeeStructure(callback) {
    connection.query('select * from fee_structure', function(err, results) {
        if (err) {
            console.log(err);
        }
        if (results) {
            callback(null, results)
        } else {
            console.log("Record not found");
        }
    });
}

module.exports = {
    addFeeStructure: addFeeStructure,
    deleteFeeStructure: deleteFeeStructure,
    getFeeStructure: getFeeStructure,
    updateFeeStructure: updateFeeStructure
}