var mySQLLeaveAllowance = require('../db/sql_leave_allowance');

function addLeaveAllowance(req, res) {
    var leaveAllowance = req.body;
    mySQLLeaveAllowance.addLeaveAllowance(leaveAllowance, function(err, result) {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    });
}

function deleteLeaveAllowance(req, res) {
    var leaveAllowance = req.body;
    mySQLLeaveAllowance.deleteLeaveAllowance(leaveAllowance, function(err, result) {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    });

}

function updateLeaveAllowance(req, res) {
    var leaveAllowance = req.body;
    mySQLLeaveAllowance.updateLeaveAllowance(leaveAllowance, function(err, result) {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    });
}

function getLeaveAllowance(req, res) {
    mySQLLeaveAllowance.getLeaveAllowance(function(err, result) {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    });
}

module.exports = {
    getLeaveAllowance: getLeaveAllowance,
    updateLeaveAllowance: updateLeaveAllowance,
    deleteLeaveAllowance: deleteLeaveAllowance,
    addLeaveAllowance: addLeaveAllowance
}