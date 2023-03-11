const employee = {
    name: "Alicia", 
    streetAddress: "Cripple Creek",
}


function updateEmployeeWithKeyAndValue (employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value) {
    employee [key] = value;
    return employee;
}


function deleteFromEmployeeByKey(employee,key) {
    const newEmployee = {employee};
    employee[key] = `Sam`;
    return newEmployee;
}


function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    delete employee[key]
    return employee
}

