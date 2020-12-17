var mySQLInPatients = require('../db/sql_inpatients');

function deleteInPatients(req, res) {
    var inpatient = req.body;
    mySQLInPatients.deleteInPatients(inpatient, function(error, results) {
        if (error)
            console.log(error);
        else
            res.send(results);
    });
}

function putInPatients(req, res) {
    var inpatient = req.body;
    mySQLInPatients.updateInPatients(inpatient, function(error, results) {
        if (error)
            console.log(error);
        else
            res.send(results);
    });
}

function addInPatients(req, res) {
    var inpatient = req.body;
    mySQLInPatients.addInPatients(inpatient, function(error, results) {
        if (error) {
            console.log(error);
        } else {
            res.send(results);
        }
    });
}

function appGetInPatients(req, res) {

    mySQLInPatients.getInPatients(function(error, results) {
        if (error)
            console.log(error);
        else {
            console.log(results);
            res.send(results);
        }
    });
}

module.exports = {
    deleteInPatients: deleteInPatients,
    putInPatients: putInPatients,
    appGetInPatients: appGetInPatients,
    addInPatients: addInPatients
}