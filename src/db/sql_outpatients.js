var connection = require('./config.js');

// GET Outpatient Details
function getOutPatients(callback) {
    var allOutPatients = [];
    connection.query('SELECT o.serial, o.doctor_id, o.dept_id, o.patient_id, p.name as patient, d.department, hw.name as doctor, o.appointment, o.description, o.fee FROM outpatient_details o, patient_details p, department_details d, healthcare_workers hw WHERE p.id = o.patient_id AND d.id = o.dept_id AND hw.id = o.doctor_id', function(error, results) {
        if (error)
            console.log(error);
        if (results) {
            results.forEach(row => {
                var data = getOutPatientObject(row);
                allOutPatients.push(data);
            });
            callback(null, allOutPatients);
        } else {
            allOutPatients.push({ 'message': 'Record not found' });
            callback(null, allOutPatients);
        }
    });
}

// POST Outpatient Details
function addOutPatients(outpatient, callback) {
    var data = getOutPatientDBObject(outpatient);
    if (outpatient) {
        connection.query("INSERT INTO outpatient_details SET ?", data, function(error, results) {
            if (error)
                callback(error, null);
            else {
                connection.query("UPDATE outpatient_details SET serial = CONCAT('OP00',?) WHERE id = ?", [results.insertId, results.insertId]);
                callback(null, results);
            }
        });
    }
}

// PUT Outpatient Details
function updateOutPatients(outpatient, callback) {
    var data = getOutPatientDBObject(outpatient);
    data.serial = outpatient.registration_number;
    if (outpatient) {
        connection.query("UPDATE outpatient_details SET ? WHERE serial = ?", [data, data.serial], function(error, results) {
            if (error)
                callback(error, null);
            else
                callback(null, results);
        });
    }
}

// DELETE Outpatient Details
function deleteOutPatients(outpatient, callback) {
    if (outpatient) {
        connection.query("DELETE FROM outpatient_details WHERE serial = ?", outpatient.registration_number, function(error, results) {
            if (error)
                callback(error, null);
            else
                callback(null, results);
        });
    }
}

// Translate db object into outpatient object
function getOutPatientObject(dbObj) {
    var outpatient = {};
    outpatient.registration_number = dbObj.serial;
    outpatient.patient_name = dbObj.patient;
    outpatient.department_name = dbObj.department;
    outpatient.doctor_name = dbObj.doctor;
    outpatient.patient_id = dbObj.patient_id;
    outpatient.dept_id = dbObj.dept_id;
    outpatient.doctor_id = dbObj.doctor_id;
    outpatient.appointment = dbObj.appointment;
    outpatient.description = dbObj.description;
    outpatient.fee = dbObj.fee;
    return outpatient;
}

// Translate Outpatient object into db object
function getOutPatientDBObject(outpatient) {
    var dbObj = {};
    if (outpatient.patient_id != null) dbObj.patient_id = outpatient.patient_id;
    if (outpatient.dept_id != null) dbObj.dept_id = outpatient.dept_id;
    if (outpatient.doctor_id != null) dbObj.doctor_id = outpatient.doctor_id;
    if (outpatient.description != null) dbObj.description = outpatient.description;
    if (outpatient.fee != null) dbObj.fee = outpatient.fee;
    return dbObj;
}

module.exports = {
    getOutPatients: getOutPatients,
    addOutPatients: addOutPatients,
    updateOutPatients: updateOutPatients,
    deleteOutPatients: deleteOutPatients
}