var connection = require('./config.js');

// GET Patient Fees Details
function getPatientFees(callback) {
    var allPatientFees = [];
    connection.query('SELECT pf.serial, pf.patient_id, p.name as patient, pf.fee_category, pf.quantity, fs.name as fee_structure_name, fs.price FROM patient_fees pf, patient_details p, fee_structure fs WHERE p.id = pf.patient_id AND fs.id = pf.fee_category', function(error, results) {
        if (error)
            console.log(error);
        if (results) {
            results.forEach(row => {
                var data = getPatientFeeObject(row);
                allPatientFees.push(data);
            });
            callback(null, allPatientFees);
        } else {
            allPatientFees.push({ 'message': 'Record not found' });
            callback(null, allPatientFees);
        }
    });
}

// POST Patient Fees Details
function addPatientFees(patientfee, callback) {
    var data = getPatientFeeDBObject(patientfee);
    if (patientfee) {
        connection.query("INSERT INTO patient_fees SET ?", data, function(error, results) {
            if (error)
                callback(error, null);
            else {
                callback(null, results);
            }
        });
    }
}

// PUT Patient Fees Details
function updatePatientFees(patientfee, callback) {
    var data = getPatientFeeDBObject(patientfee);
    if (patientfee) {
        connection.query("UPDATE patient_fees SET ? WHERE serial = ?", [data, patientfee.serial], function(error, results) {
            if (error)
                callback(error, null);
            else
                callback(null, results);
        });
    }
}

// DELETE Patient Fees Details
function deletePatientFees(patientfee, callback) {
    if (patientfee) {
        connection.query("DELETE FROM patient_fees WHERE serial = ?", patientfee.serial, function(error, results) {
            if (error)
                callback(error, null);
            else
                callback(null, results);
        });
    }
}

// Translate db object into Patient Fees object
function getPatientFeeObject(dbObj) {
    var patient = {};
    patient.serial = dbObj.serial;
    patient.patient_id = dbObj.patient_id;
    patient.patient_name = dbObj.patient;
    patient.fee_category = dbObj.fee_category;
    patient.fee_structure_name = dbObj.fee_structure_name;
    patient.quantity = dbObj.quantity;
    patient.price = dbObj.price;
    patient.total_amount = dbObj.quantity * dbObj.price;
    return patient;
}

// Translate Patient Fees object into db object
function getPatientFeeDBObject(patient) {
    var dbObj = {};
    if (patient.fee_category != null) dbObj.fee_category = patient.fee_category;
    if (patient.quantity != null) dbObj.quantity = patient.quantity;
    return dbObj;
}

module.exports = {
    getPatientFees: getPatientFees,
    addPatientFees: addPatientFees,
    updatePatientFees: updatePatientFees,
    deletePatientFees: deletePatientFees
}