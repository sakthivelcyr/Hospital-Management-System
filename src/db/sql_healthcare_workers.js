var connection = require('./config.js');

function addHealthCareWorkers(worker, callback) {
    var data = getWorkerDBObject(worker);
    connection.query('Insert into healthcare_workers SET ?', data, function(err, results) {
        if (err)
            callback(err, null);
        else
            callback(null, results);
    });
}

function deleteHealthCareWorkers(worker, callback) {
    if (worker) {
        connection.query("Delete from healthcare_workers WHERE id = ?", worker.id, function(error, results) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results);
            }
        });
    }
}

function updateHealthCareWorkers(worker, callback) {
    var data = getWorkerDBObject(worker);
    console.log(data);
    if (worker) {
        connection.query("update healthcare_workers SET ? WHERE id = ?", [data, worker.id], function(err, results) {
            if (err)
                callback(err, null);
            else
                callback(null, results);
        });
    }
}

function getHealthCareWorkers(callback) {
    var allWorkers = []
    connection.query('select * from healthcare_workers', function(err, results) {
        if (err) {
            console.log(err);
        }
        if (results) {
            results.forEach(data => {
                var worker = getWorkerObject(data);
                allWorkers.push(worker);
            });
            callback(null, allWorkers);
        } else {
            console.log("Record not found");
        }
    });
}

// Translate db object into Patient object
function getWorkerObject(dbObj) {
    var worker = {};
    worker.id = dbObj.id;
    worker.name = dbObj.name;
    worker.address = dbObj.address;
    worker.mobile_number = dbObj.mobile;
    worker.email = dbObj.email;
    worker.bank_account_number = dbObj.bank_acc_no;
    worker.ifsc_code = dbObj.ifsc_code;
    worker.role_id = dbObj.role_id;
    worker.role = dbObj.role;
    worker.dept_id = dbObj.dept_id;
    worker.department_name = dbObj.department;
    worker.from_date = dbObj.from_date;
    worker.to_date = dbObj.to_date;
    return worker;
}

// Translate Patient object into db object
function getWorkerDBObject(worker) {
    var dbObj = {};
    if (worker.id != null) dbObj.id = worker.id;
    if (worker.name != null) dbObj.name = worker.name;
    if (worker.address != null) dbObj.address = worker.address;
    if (worker.mobile_number != null) dbObj.mobile = worker.mobile_number;
    if (worker.email != null) dbObj.email = worker.email;
    if (worker.bank_account_number != null) dbObj.bank_acc_no = worker.bank_account_number;
    if (worker.ifsc_code != null) dbObj.ifsc_code = worker.ifsc_code;
    if (worker.role_id != null) dbObj.role_id = worker.role_id;
    if (worker.dept_id != null) dbObj.dept_id = worker.dept_id;
    if (worker.from_date != null) dbObj.from_date = worker.from_date;
    if (worker.to_date != null) dbObj.to_date = worker.to_date;
    return dbObj;
}

module.exports = {
    getHealthCareWorkers: getHealthCareWorkers,
    addHealthCareWorkers: addHealthCareWorkers,
    updateHealthCareWorkers: updateHealthCareWorkers,
    deleteHealthCareWorkers: deleteHealthCareWorkers
}