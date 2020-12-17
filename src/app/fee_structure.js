var mySQLFeestructure = require('../db/sql_fee_structures');

function getFeeStructure(req, res) {
    mySQLFeestructure.getFeeStructure(function(error, results) {
        if (error)
            console.log(error);
        else {
            res.send(results);
        }
    });
}

function addFeeStructure(req, res) {
    var fee = req.body;
    mySQLFeestructure.addFeeStructure(fee, function(err, result) {
        if (err) {
            console.log(err)
        } else {
            res.send(result)

        }
    });

}

function updateFeeStructure(req, res) {
    var fee = req.body;
    mySQLFeestructure.updateFeeStructure(fee, function(err, result) {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    });
}

function deleteFeeStructure(req, res) {
    var fee = req.body;
    mySQLFeestructure.deleteFeeStructure(fee, function(err, result) {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    });

}

module.exports = {
    deleteFeeStructure: deleteFeeStructure,
    updateFeeStructure: updateFeeStructure,
    addFeeStructure: addFeeStructure,
    getFeeStructure: getFeeStructure
}