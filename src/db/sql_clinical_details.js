var connection = require('./config.js');

function addClinicalTesting(clinical, callback) {
    connection.query('Insert into clinical_testing_details  SET ?', clinical, function(err, results) {
        if (err)
            callback(err, null);

        else
            callback(null, results);
    });
}

function deleteClinicalTesting(clinical, callback) {
    var whereData = {}
    whereData.id = clinical.id
    if (clinical) {
        connection.query("Delete from clinical_testing_details WHERE ?", whereData, function(error, results) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results);
            }
        });
    }
}

function updateClinicalTesting(clinical, callback) {
    var whereData = {}
    whereData.id = clinical.id
    if (clinical) {
        connection.query("update clinical_testing_details SET ? WHERE ?", [clinical, whereData], function(err, results) {
            if (err)
                callback(err, null);
            else
                callback(null, results);
        });
    }
}

function getClinicalTesting(callback) {
    var testingResults = []
    connection.query('select c.*, p.name as patient_name from clinical_testing_details c, patient_details p WHERE p.id = c.patient_id', function(err, results) {
        if (err) {
            console.log(err);
        }
        if (results) {
            /*results.forEach(test => {
                var detail = {}
                detail.id = test.id,
                    detail.patient_id = test.patient_id,
                    detail.serial = test.serial,
                    detail.time = test.time,
                    detail.result = test.result
                testingResults.push(detail);
            });*/
            callback(null, results)
        } else {
            console.log("Record not found");
        }
    });
}


module.exports = {
    getClinicalTesting: getClinicalTesting,
    deleteClinicalTesting: deleteClinicalTesting,
    updateClinicalTesting: updateClinicalTesting,
    addClinicalTesting: addClinicalTesting
}