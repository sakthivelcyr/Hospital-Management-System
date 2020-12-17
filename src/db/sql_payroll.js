var connection = require('./config.js');

function addPayRoll(pay, callback) {
    connection.query('Insert into payroll  SET ?', pay, function(err, results) {
        if (err)
            callback(err, null);

        else
            callback(null, results);
    });
}

function deletePayRoll(pay, callback) {
    var whereData = {}
    whereData.id = pay.id
    if (pay) {
        connection.query("Delete from payroll WHERE ?", whereData, function(error, results) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results);
            }
        });
    }
}

function updatePayRoll(pay, callback) {
    var whereData = {}
    whereData.id = pay.id
    if (pay) {
        connection.query("update payroll SET ? WHERE ?", [pay, whereData], function(err, results) {
            if (err)
                callback(err, null);
            else
                callback(null, results);
        });
    }
}

function getPayRoll(callback) {
    //var payResults = [];
    connection.query('select pay.id, pay.healthcare_id, hw.name as worker_name, pay.net_salary, pay.gross_salary from payroll pay, healthcare_workers hw WHERE hw.id = pay.healthcare_id', function(err, results) {
        if (err) {
            console.log(err);
        }
        if (results) {
            /*results.forEach(payr => {
                var pay = {}
                payResults.push(detail);
            });*/
            callback(null, results)
        } else {
            console.log("Record not found");
        }
    });
}

// Translate db object into payroll object
function getPayRollObject(dbObj) {
    var payroll = {};
    payroll.id = dbObj.id;
    payroll.healthcare_id = dbObj.healthcare_id;
    payroll.worker_name = dbObj.worker_name;
    payroll.net_salary = dbObj.net_salary;
    payroll.gross_salary = dbObj.gross_salary;
    return payroll;
}

// Translate payroll object into db object
function getPayRollDBObject(outpatient) {
    var dbObj = {};
    if (outpatient.patient_id != null) dbObj.patient_id = outpatient.patient_id;
    if (outpatient.dept_id != null) dbObj.dept_id = outpatient.dept_id;
    if (outpatient.doctor_id != null) dbObj.doctor_id = outpatient.doctor_id;
    if (outpatient.description != null) dbObj.description = outpatient.description;
    if (outpatient.fee != null) dbObj.fee = outpatient.fee;
    return dbObj;
}

module.exports = {
    getPayRoll: getPayRoll,
    updatePayRoll: updatePayRoll,
    deletePayRoll: deletePayRoll,
    addPayRoll: addPayRoll
}