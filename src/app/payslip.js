var mySQLPaySlip = require('../db/sql_payslip');

function addPaySlip(req, res) {
    var payslip = req.body;
    mySQLPaySlip.addPaySlip(payslip, function(err, result) {
        if (err) {
            console.log(err)
        } else {
            res.send(result);
        }
    });
}

function deletePaySlip(req, res) {
    var payslip = req.body;
    mySQLPaySlip.deletePaySlip(payslip, function(err, result) {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    });

}

function updatePaySlip(req, res) {
    var payslip = req.body;
    mySQLPaySlip.updatePaySlip(payslip, function(err, result) {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    });
}

function getPaySlip(req, res) {
    mySQLPaySlip.getPaySlip(function(err, result) {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    });
}

module.exports = {
    getPaySlip: getPaySlip,
    updatePaySlip: updatePaySlip,
    deletePaySlip: deletePaySlip,
    addPaySlip: addPaySlip
}