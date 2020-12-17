var mySQLHealthcareWorkers = require('../db/sql_healthcare_workers');

function getHealthCareWorkers(req, res) {
    mySQLHealthcareWorkers.getHealthCareWorkers(function(err, result) {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    });

}

function addHealthCareWorkers(req, res) {
    var worker = req.body;
    mySQLHealthcareWorkers.addHealthCareWorkers(worker, function(err, result) {
        if (err) {
            console.log(err)
        } else {
            res.send(result)

        }
    });

}

function updateHealthCareWorkers(req, res) {
    var worker = req.body;
    mySQLHealthcareWorkers.updateHealthCareWorkers(worker, function(err, result) {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    });
}

function deleteHealthCareWorkers(req, res) {
    var worker = req.body;
    mySQLHealthcareWorkers.deleteHealthCareWorkers(worker, function(err, result) {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    });
}

module.exports = {
    getHealthCareWorkers: getHealthCareWorkers,
    addHealthCareWorkers: addHealthCareWorkers,
    updateHealthCareWorkers: updateHealthCareWorkers,
    deleteHealthCareWorkers: deleteHealthCareWorkers
}