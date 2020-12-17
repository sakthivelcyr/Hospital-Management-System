var mySQLDesignation = require('../db/sql_designation');

function getDesignation(req, res) {
    mySQLDesignation.getDesignation(function(err, result) {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    });

}

function updateDesignation(req, res) {
    var designation = req.body;
    mySQLDesignation.updateDesignation(designation, function(err, result) {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    });
}

function deleteDesignation(req, res) {
    var designation = req.body;
    mySQLDesignation.deleteDesignation(designation, function(err, result) {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    });

}

function addDesignation(req, res) {
    var designation = req.body;
    mySQLDesignation.addDesignation(designation, function(err, result) {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    });
}

module.exports = {
    addDesignation: addDesignation,
    deleteDesignation: deleteDesignation,
    updateDesignation: updateDesignation,
    getDesignation: getDesignation
}