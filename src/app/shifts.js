var mySQLShift = require('../db/sql_shifts');

function getShiftDetails(req, res) {
    mySQLShift.getShiftDetails(function(err, result) {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    });
}

function addShiftDetails(req, res) {
    var shift = req.body;
    mySQLShift.addShiftDetails(shift, function(err, result) {
        if (err) {
            console.log(err)
        } else {
            res.send(result)

        }
    });
}

function updateShiftDetails(req, res) {
    var shift = req.body;
    mySQLShift.updateShiftDetails(shift, function(err, result) {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    });
}

function deleteShiftDetails(req, res) {
    var shift = req.body;
    mySQLShift.deleteShiftDetails(shift, function(err, result) {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    });
}

module.exports = {
    getShiftDetails: getShiftDetails,
    addShiftDetails: addShiftDetails,
    updateShiftDetails: updateShiftDetails,
    deleteShiftDetails: deleteShiftDetails
}