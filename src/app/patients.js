var mySQLPatients = require('../db/sql_patients');

function getPatients(req, res) {
    mySQLPatients.getPatients(function(error, results) {
        if (error)
            console.log(error);
        else {
            res.send(results);
        }
    });
}

function addPatients(req, res) {
    var patient = req.body;
    mySQLPatients.addPatients(patient, function(error, results) {
        if (error) {
            console.log(error);
        } else {
            res.send(results);
        }
    });
}

function updatePatients(req, res) {
    var patient = req.body;
    mySQLPatients.updatePatients(patient, function(error, results) {
        if (error)
            console.log(error);
        else
            res.send(results);
    });
}

function deletePatients(req, res) {
    var patient = req.body;
    mySQLPatients.deletePatients(patient, function(error, results) {
        if (error)
            console.log(error);
        else
            res.send(results);
    });
}

module.exports = {
    getPatients: getPatients,
    addPatients: addPatients,
    updatePatients: updatePatients,
    deletePatients: deletePatients
}