var express = require('express');
var bodyParser = require('body-parser');

var appInPatients = require('./src/app/inpatients');
var appOutPatients = require('./src/app/outpatients');
var appPatients = require('./src/app/patients');
var appPatientFees = require('./src/app/patientfees');
var appFeeStructure = require('./src/app/fee_structure');
var appMedicineDetails = require('./src/app/medicine_details');
var appHealthcareWorkers = require('./src/app/healthcare_workers');
var appPayRoll = require('./src/app/payroll');
var appPaySlip = require('./src/app/payslip');
var appShifts = require('./src/app/shifts');
var appAllowance = require('./src/app/allowance');
var appLeaveAllowance = require('./src/app/leave_allowance');
var appAttendance = require('./src/app/attendance');
var appClinical = require('./src/app/clinical_details');
var appDepartment = require('./src/app/department');
var appDesignation = require('./src/app/designation');

const app = express()
app.use(bodyParser.json());

app.listen(9000, function(err, res) {
    if (err)
        console.log(err);
    else
        console.log("Server has beed started ....");
});

//Get InPatient Details
app.get('/inpatients', appInPatients.appGetInPatients);

// Post InPatient Details
app.post('/inpatients', appInPatients.addInPatients);

// Update InPatient Details
app.put('/inpatients', appInPatients.putInPatients);

// Delete InPatient Details
app.delete('/inpatients', appInPatients.deleteInPatients);

//Get OutPatient Details
app.get('/outpatients', appOutPatients.getOutPatients);

// Post OutPatient Details
app.post('/outpatients', appOutPatients.addOutPatients);

// Update OutPatient Details
app.put('/outpatients', appOutPatients.updateOutPatients);

// Delete OutPatient Details
app.delete('/outpatients', appOutPatients.deleteOutPatients);

//Get Patient Details
app.get('/patients', appPatients.getPatients);

// Post Patient Details
app.post('/patients', appPatients.addPatients);

// Update Patient Details
app.put('/patients', appPatients.updatePatients);

// Delete Patient Details
app.delete('/patients', appPatients.deletePatients);

//Get PatientFees Details
app.get('/patientfees', appPatientFees.getPatientFees);

// Post PatientFees Details
app.post('/patientfees', appPatientFees.addPatientFees);

// Update PatientFees Details
app.put('/patientfees', appPatientFees.updatePatientFees);

// Delete PatientFees Details
app.delete('/patientfees', appPatientFees.deletePatientFees);

//Get Fees Structure Details
app.get('/fee_structure', appFeeStructure.getFeeStructure);

// POST Fees Structure Details
app.post('/fee_structure', appFeeStructure.addFeeStructure);

// PUT Fees Structure Details
app.put('/fee_structure', appFeeStructure.updateFeeStructure);

// DELETE Fees Structure Details
app.delete('/fee_structure', appFeeStructure.deleteFeeStructure);

// GET Medicine Details
app.get('/medicine_details', appMedicineDetails.getMedicine);

// POST Fees Structure Details
app.post('/medicine_details', appMedicineDetails.addMedicine);

// PUT Medicine Details
app.put('/medicine_details', appMedicineDetails.updateMedicine);

// DELETE Medicine Details
app.delete('/medicine_details', appMedicineDetails.deleteMedicine);

// GET Healthcare Workers Details
app.get('/healthcare_workers', appHealthcareWorkers.getHealthCareWorkers);

// POST Healthcare Workers Details
app.post('/healthcare_workers', appHealthcareWorkers.addHealthCareWorkers);

// PUT Healthcare Workers Details
app.put('/healthcare_workers', appHealthcareWorkers.updateHealthCareWorkers);

// DELETE Healthcare Workers Details
app.delete('/healthcare_workers', appHealthcareWorkers.deleteHealthCareWorkers);

// GET Payroll Details
app.get('/payroll', appPayRoll.getPayRoll);

// POST Payroll Details
app.post('/payroll', appPayRoll.addPayRoll);

// PUT Payroll Details
app.put('/payroll', appPayRoll.updatePayRoll);

// DELETE Payroll Details
app.delete('/payroll', appPayRoll.deletePayRoll);

// POST Payroll Details
app.post('/payslip', appPaySlip.addPaySlip);

// DELETE Payroll Details
app.delete('/payslip', appPaySlip.deletePaySlip);

// PUT Payroll Details
app.put('/payslip', appPaySlip.updatePaySlip);

// GET Payroll Details
app.get('/payslip', appPaySlip.getPaySlip);

// GET Shift Details
app.get('/shift', appShifts.getShiftDetails);

// POST Shift Details
app.post('/shift', appShifts.addShiftDetails);

// PUT Shift Details
app.put('/shift', appShifts.updateShiftDetails);

// DELETE Shift Details
app.delete('/shift', appShifts.deleteShiftDetails);

// GET Allowances
app.get('/allowances', appAllowance.getAllowance);

// POST Allowances
app.post('/allowances', appAllowance.addAllowance);

// PUT Allowances
app.put('/allowances', appAllowance.updateAllowance);

// DELETE Allowances
app.delete('/allowances', appAllowance.deleteAllowance);

// POST Leave Allowances
app.post('/leave_allowance', appLeaveAllowance.addLeaveAllowance);

// DELETE Leave Allowances
app.delete('/leave_allowance', appLeaveAllowance.deleteLeaveAllowance);

// PUT Leave Allowances
app.put('/leave_allowance', appLeaveAllowance.updateLeaveAllowance);

// GET Leave Allowances
app.get('/leave_allowance', appLeaveAllowance.getLeaveAllowance);

// POST Attendance Details
app.post('/attendance_details', appAttendance.addAttendance);

// DELETE Attendance Details
app.delete('/attendance_details', appAttendance.deleteAttendance);

// PUT Attendance Details
app.put('/attendance_details', appAttendance.updateAttendance);

// GET Attendance Details
app.get('/attendance_details', appAttendance.getAttendance);

// POST Clinical Testing Details
app.post('/clinical_testing_details', appClinical.addClinicalTesting);

// DELETE Clinical Testing Details
app.delete('/clinical_testing_details', appClinical.deleteClinicalTesting);

// PUT Clinical Testing Details
app.put('/clinical_testing_details', appClinical.updateClinicalTesting);

// GET Clinical Testing Details
app.get('/clinical_testing_details', appClinical.getClinicalTesting);

// POST Department Details
app.post('/department_details', appDepartment.addDepartment);

// DELETE Department Details
app.delete('/department_details', appDepartment.deleteDepartment);

// PUT Department Details
app.put('/department_details', appDepartment.updateDepartment);

// GET Department Details
app.get('/department_details', appDepartment.getDepartment);

// POST Designation Details
app.post('/designation_details', appDesignation.addDesignation);

// DELETE Designation Details
app.delete('/designation_details', appDesignation.deleteDesignation);

// PUT Designation Details
app.put('/designation_details', appDesignation.updateDesignation);

// GET Designation Details
app.get('/designation_details', appDesignation.getDesignation);