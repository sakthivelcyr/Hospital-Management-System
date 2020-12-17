var connection = require('./config.js');

// GET Inpatient Details
function getInPatients(callback) {
    var allInPatients = [];
    connection.query('SELECT inp.serial, inp.doctor_id, inp.dept_id, inp.patient_id, p.name as patient, d.department, hw.name as doctor, inp.joined_on, inp.releaved_on, inp.ward_number, inp.bed_number FROM `inpatient_details` inp, patient_details p, department_details d, healthcare_workers hw WHERE p.id = inp.patient_id AND d.id = inp.dept_id AND hw.id = inp.doctor_id', function(error, results) {
        if (error)
            console.log(error);
        if (results) {
            console.log(results);
            results.forEach(row => {
                var data = getInPatientObject(row);
                allInPatients.push(data);
            });
            callback(null, allInPatients);
        } else {
            allStudents.push({ 'message': 'Record not found' });
            callback(null, allInPatients);
        }
    });
}

// POST Inpatient Details
function addInPatients(inpatient, callback) {
    var data = getInPatientDBObject(inpatient);
    if (inpatient) {
        connection.query("INSERT INTO inpatient_details SET ?", data, function(error, results) {
            if (error)
                callback(error, null);
            else {
                connection.query("UPDATE inpatient_details SET serial = CONCAT('IP00',?) WHERE id = ?", [results.insertId, results.insertId]);
                callback(null, results);
            }
        });
    }
}

// PUT Inpatient Details
function updateInPatients(inpatient, callback) {
    var data = getInPatientDBObject(inpatient);
    data.serial = inpatient.registration_number;
    if (inpatient) {
        connection.query("UPDATE inpatient_details SET ? WHERE serial = ?", [data, data.serial], function(error, results) {
            if (error)
                callback(error, null);
            else
                callback(null, results);
        });
    }
}

// DELETE Inpatient Details
function deleteInPatients(inpatient, callback) {
    if (inpatient) {
        connection.query("DELETE FROM inpatient_details WHERE serial = ?", inpatient.registration_number, function(error, results) {
            if (error)
                callback(error, null);
            else
                callback(null, results);
        });
    }
}

// Translate db object into inpatient object
function getInPatientObject(dbObj) {
    var inpatient = {};
    inpatient.registration_number = dbObj.serial;
    inpatient.patient_name = dbObj.patient;
    inpatient.department_name = dbObj.department;
    inpatient.doctor_name = dbObj.doctor;
    inpatient.patient_id = dbObj.patient_id;
    inpatient.dept_id = dbObj.dept_id;
    inpatient.doctor_id = dbObj.doctor_id;
    inpatient.joining_date = dbObj.joined_on;
    inpatient.releaving_date = dbObj.releaved_on;
    inpatient.ward_number = dbObj.ward_number;
    inpatient.bed_number = dbObj.bed_number;
    return inpatient;
}

// Translate InPatient object into db object
function getInPatientDBObject(inpatient) {
    var dbObj = {};
    if (inpatient.releaving_date != null) dbObj.releaved_on = inpatient.releaving_date;
    if (inpatient.patient_id != null) dbObj.patient_id = inpatient.patient_id;
    if (inpatient.dept_id != null) dbObj.dept_id = inpatient.dept_id;
    if (inpatient.doctor_id != null) dbObj.doctor_id = inpatient.doctor_id;
    if (inpatient.ward_number != null) dbObj.ward_number = inpatient.ward_number;
    if (inpatient.bed_number != null) dbObj.bed_number = inpatient.bed_number;
    return dbObj;
}

module.exports = {
    getInPatients: getInPatients,
    addInPatients: addInPatients,
    updateInPatients: updateInPatients,
    deleteInPatients: deleteInPatients
}