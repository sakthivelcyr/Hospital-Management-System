var connection = require('./config.js');

// GET Patient Details
function getPatients(callback) {
    var allPatients = [];
    connection.query('SELECT * FROM `patient_details`', function(error, results) {
        if (error)
            console.log(error);
        if (results) {
            results.forEach(row => {
                var data = getPatientObject(row);
                allPatients.push(data);
            });
            callback(null, allPatients);
        } else {
            allPatients.push({ 'message': 'Record not found' });
            callback(null, allPatients);
        }
    });
}

// POST Patient Details
function addPatients(patient, callback) {
    var data = getPatientDBObject(patient);
    if (patient) {
        connection.query("INSERT INTO patient_details SET ?", data, function(error, results) {
            if (error)
                callback(error, null);
            else {
                callback(null, results);
            }
        });
    }
}

// PUT Patient Details
function updatePatients(patient, callback) {
    var data = getPatientDBObject(patient);
    if (patient) {
        connection.query("UPDATE patient_details SET ? WHERE id = ?", [data, patient.registration_number], function(error, results) {
            if (error)
                callback(error, null);
            else
                callback(null, results);
        });
    }
}

// DELETE Patient Details
function deletePatients(patient, callback) {
    if (patient) {
        connection.query("DELETE FROM patient_details WHERE id = ?", patient.registration_number, function(error, results) {
            if (error)
                callback(error, null);
            else
                callback(null, results);
        });
    }
}

// Translate db object into Patient object
function getPatientObject(dbObj) {
    var patient = {};
    patient.registration_number = dbObj.id;
    patient.name = dbObj.name;
    patient.age = dbObj.age;
    patient.address = dbObj.address;
    patient.adhaar_number = dbObj.adhaar;
    patient.mobile_number = dbObj.mobile;
    patient.email = dbObj.email;
    return patient;
}

// Translate Patient object into db object
function getPatientDBObject(patient) {
    var dbObj = {};
    if (patient.name != null) dbObj.name = patient.name;
    if (patient.age != null) dbObj.age = patient.age;
    if (patient.address != null) dbObj.address = patient.address;
    if (patient.adhaar_number != null) dbObj.adhaar = patient.adhaar_number;
    if (patient.mobile_number != null) dbObj.mobile = patient.mobile_number;
    if (patient.email != null) dbObj.email = patient.email;
    return dbObj;
}

module.exports = {
    getPatients: getPatients,
    addPatients: addPatients,
    updatePatients: updatePatients,
    deletePatients: deletePatients
}