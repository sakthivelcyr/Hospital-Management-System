var mySQLPatientFees = require('../db/sql_patient_fees');

function getPatientFees(req, res) {
    mySQLPatientFees.getPatientFees(function(error, results) {
        if (error)
            console.log(error);
        else {
            res.send(results);
        }
    });
}

function addPatientFees(req, res) {
    var patientfee = req.body;
    mySQLPatientFees.addPatientFees(patientfee, function(error, results) {
        if (error) {
            console.log(error);
        } else {
            res.send(results);
        }
    });
}

function updatePatientFees(req, res) {
    var patientfee = req.body;
    mySQLPatientFees.updatePatientFees(patientfee, function(error, results) {
        if (error)
            console.log(error);
        else
            res.send(results);
    });
}

function deletePatientFees(req, res) {
    var patientfee = req.body;
    mySQLPatientFees.deletePatientFees(patientfee, function(error, results) {
        if (error)
            console.log(error);
        else
            res.send(results);
    });
}

module.exports = {
    getPatientFees: getPatientFees,
    addPatientFees: addPatientFees,
    updatePatientFees: updatePatientFees,
    deletePatientFees: deletePatientFees
}