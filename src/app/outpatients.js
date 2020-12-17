var mySQLOutPatients = require('../db/sql_outpatients');

function getOutPatients(req, res) {
    mySQLOutPatients.getOutPatients(function(error, results) {
        if (error)
            console.log(error);
        else {
            res.send(results);
        }
    });
}

function addOutPatients(req, res) {
    var outpatient = req.body;
    mySQLOutPatients.addOutPatients(outpatient, function(error, results) {
        if (error) {
            console.log(error);
        } else {
            res.send(results);
        }
    });
}

function updateOutPatients(req, res) {
    var outpatient = req.body;
    mySQLOutPatients.updateOutPatients(outpatient, function(error, results) {
        if (error)
            console.log(error);
        else
            res.send(results);
    });
}

function deleteOutPatients(req, res) {
    var outpatient = req.body;
    mySQLOutPatients.deleteOutPatients(outpatient, function(error, results) {
        if (error)
            console.log(error);
        else
            res.send(results);
    });
}

module.exports = {
    getOutPatients: getOutPatients,
    addOutPatients: addOutPatients,
    updateOutPatients: updateOutPatients,
    deleteOutPatients: deleteOutPatients
}