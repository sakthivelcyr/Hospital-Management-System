var mySQLAllowance = require('../db/sql_allowances');

function addAllowance(req, res) {
    var allowance = req.body;
    mySQLAllowance.addAllowance(allowance, function(err, result) {
        if (err) {
            console.log(err)
        } else {
            res.send(result)

        }
    });

}

function deleteAllowance(req, res) {
    var allowance = req.body;
    mySQLAllowance.deleteAllowance(allowance, function(err, result) {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    });

}

function updateAllowance(req, res) {
    var allowance = req.body;
    mySQLAllowance.updateAllowance(allowance, function(err, result) {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    });
}


function getAllowance(req, res) {
    mySQLAllowance.getAllowance(function(err, result) {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    });
}

module.exports = {
    getAllowance: getAllowance,
    updateAllowance: updateAllowance,
    deleteAllowance: deleteAllowance,
    addAllowance: addAllowance
}