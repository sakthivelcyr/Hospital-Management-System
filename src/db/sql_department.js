var connection = require('./config.js');

function addDepartment(section, callback) {
    connection.query('Insert into department_details  SET ?', section, function(err, results) {
        if (err)
            callback(err, null);
        else
            callback(null, results);
    });
}

function deleteDepartment(section, callback) {
    var whereData = {}
    whereData.id = section.id
    if (section) {
        connection.query("Delete from department_details WHERE ?", whereData, function(error, results) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results);
            }
        });
    }
}

function updateDepartment(section, callback) {
    var whereData = {}
    whereData.id = section.id
    if (section) {
        connection.query("update department_details SET ? WHERE ?", [section, whereData], function(err, results) {
            if (err)
                callback(err, null);
            else
                callback(null, results);
        });
    }
}

function getDepartment(callback) {
    var departmentResults = []
    connection.query('select * from department_details ORDER BY id ASC', function(err, results) {
        if (err) {
            console.log(err);
        }
        if (results) {
            /*results.forEach(dept => {
                var detail = {}
                detail.id = dept.id,
                    detail.department = dept.department
                departmentResults.push(detail);
            });*/
            callback(null, results)
        } else {
            console.log("Record not found");
        }
    });
}

module.exports = {
    getDepartment: getDepartment,
    updateDepartment: updateDepartment,
    deleteDepartment: deleteDepartment,
    addDepartment: addDepartment
}