var connection = require('./config.js');

function addPaySlip(pay, callback) {
    connection.query('Insert into payslip  SET ?', pay, function(err, results) {
        if (err)
            callback(err, null);

        else
            callback(null, results);
    });
}

function deletePaySlip(pay, callback) {
    if (pay) {
        connection.query("Delete from payslip WHERE id = ?", pay.id, function(error, results) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results);
            }
        });
    }
}

function updatePaySlip(pay, callback) {
    var whereData = {}
    whereData.id = pay.id
    if (pay) {
        connection.query("update payslip SET ? WHERE ?", [pay, whereData], function(err, results) {
            if (err)
                callback(err, null);
            else
                callback(null, results);
        });
    }
}

function getPaySlip(callback) {
    var payResults = []
    connection.query('select pay.*, hw.name as worker_name from payslip pay, healthcare_workers hw WHERE hw.id = pay.healthcare_id', function(err, results) {
        if (err) {
            console.log(err);
        }
        if (results) {
            /*results.forEach(pays => {
                var detail = {}
                detail.id = pays.id,
                detail.healthcare_id = pays.healthcare_id,
                detail.payroll_id = pays.payroll_id,
                detail.month_year = pays.month_year,
                detail.deductions = pays.deductions,
                detail.working_days = pays.working_days,
                detail.net_salary = pays.net_salary,
                detail.paid_status = pays.paid_status
                payResults.push(detail);
            });*/
            callback(null, results);
        } else {
            console.log("Record not found");
        }
    });
}

module.exports = {
    getPaySlip: getPaySlip,
    updatePaySlip: updatePaySlip,
    deletePaySlip: deletePaySlip,
    addPaySlip: addPaySlip
}