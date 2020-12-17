var mySQLMedicineDetails = require('../db/sql_medicine_details');

function getMedicine(req, res) {
    mySQLMedicineDetails.getMedicine(function(err, result) {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    });
}

function addMedicine(req, res) {
    var medicine = req.body;
    mySQLMedicineDetails.addMedicine(medicine, function(err, result) {
        if (err) {
            console.log(err)
        } else {
            res.send(result)

        }
    });

}

function updateMedicine(req, res) {
    var medicine = req.body;
    mySQLMedicineDetails.updateMedicine(medicine, function(err, result) {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    });
}

function deleteMedicine(req, res) {
    var medicine = req.body;
    mySQLMedicineDetails.deleteMedicine(medicine, function(err, result) {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    });
}

module.exports = {
    getMedicine: getMedicine,
    addMedicine: addMedicine,
    updateMedicine: updateMedicine,
    deleteMedicine: deleteMedicine
}