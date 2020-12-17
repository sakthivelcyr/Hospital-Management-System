var mySQLPayroll = require('../db/sql_payroll');

function getPayRoll(req, res) {
    mySQLPayroll.getPayRoll(function(err, result) {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    });

}

function addPayRoll(req, res) {
    var payroll = req.body;
    mySQLPayroll.addPayRoll(payroll, function(err, result) {
        if (err) {
            console.log(err)
        } else {
            res.send(result)

        }
    });

}

function updatePayRoll(req, res) {
    var payroll = req.body;
    mySQLPayroll.updatePayRoll(payroll, function(err, result) {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    });
}

function deletePayRoll(req, res) {
    var payroll = req.body;
    mySQLPayroll.deletePayRoll(payroll, function(err, result) {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    });

}

module.exports = {
    getPayRoll: getPayRoll,
    addPayRoll: addPayRoll,
    updatePayRoll: updatePayRoll,
    deletePayRoll: deletePayRoll
}