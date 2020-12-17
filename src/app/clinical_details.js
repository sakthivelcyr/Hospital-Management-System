var mySQLClinicalDetails = require('../db/sql_clinical_details');

function addClinicalTesting(req, res) {
    var test = req.body;
    mySQLClinicalDetails.addClinicalTesting(test, function(err, result) {
        if (err) {
            console.log(err)
        } else {
            res.send(result)

        }
    });
}

function deleteClinicalTesting(req, res) {
    var test = req.body;
    mySQLClinicalDetails.deleteClinicalTesting(test, function(err, result) {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    });
}

function updateClinicalTesting(req, res) {
    var test = req.body;
    mySQLClinicalDetails.updateClinicalTesting(test, function(err, result) {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    });
}

function getClinicalTesting(req, res) {
    mySQLClinicalDetails.getClinicalTesting(function(err, result) {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    });
}

module.exports = {
    getClinicalTesting: getClinicalTesting,
    updateClinicalTesting: updateClinicalTesting,
    deleteClinicalTesting: deleteClinicalTesting,
    addClinicalTesting: addClinicalTesting
}