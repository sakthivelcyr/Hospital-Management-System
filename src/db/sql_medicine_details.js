var connection = require('./config.js');

function addMedicine(medicine, callback) {
    connection.query('Insert into medicine_details SET ?', medicine, function(err, results) {
        if (err)
            callback(err, null);
        else
            callback(null, results);
    });
}

function deleteMedicine(medicine, callback) {
    if (medicine) {
        connection.query("Delete from medicine_details WHERE id = ?", medicine.id, function(error, results) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results);
            }
        });
    }
}

function updateMedicine(medicine, callback) {
    if (medicine) {
        connection.query("update medicine_details SET ? WHERE id = ?", [medicine, medicine.id], function(err, results) {
            if (err)
                callback(err, null);
            else
                callback(null, results);
        });
    }
}

function getMedicine(callback) {
    connection.query('select * from medicine_details', function(err, results) {
        if (err) {
            console.log(err);
        }
        if (results) {
            callback(null, results)
        } else {
            console.log("Record not found");
        }
    });
    connection.end();
}

module.exports = {
    addMedicine: addMedicine,
    deleteMedicine: deleteMedicine,
    getMedicine: getMedicine,
    updateMedicine: updateMedicine
}