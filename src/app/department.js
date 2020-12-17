var mySQLDepartment = require('../db/sql_department');

function addDepartment(req, res) {
    var detail = req.body;
    mySQLDepartment.addDepartment(detail, function(err, result) {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    });
}

function deleteDepartment(req, res) {
    var detail = req.body;
    mySQLDepartment.deleteDepartment(detail, function(err, result) {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    });
}

function updateDepartment(req, res) {
    var detail = req.body;
    mySQLDepartment.updateDepartment(detail, function(err, result) {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    });
}

function getDepartment(req, res) {
    mySQLDepartment.getDepartment(function(err, result) {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    });
}

module.exports = {
    getDepartment: getDepartment,
    updateDepartment: updateDepartment,
    deleteDepartment: deleteDepartment,
    addDepartment: addDepartment
}