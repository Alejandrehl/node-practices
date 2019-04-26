let Employees = [{
    "id": 1,
    "name": "Alejandro"
}, {
    "id": 2,
    "name": "Silvana"
}, {
    "id": 3,
    "name": "Zeli"
}];

let Salaries = [{
    "employee_id": 1,
    "amount": 2000
}, {
    "employee_id": 2,
    "amount": 3000
}];

let getSalary = async(employee) => {
    let salary = Salaries.find(salary => salary.employee_id === employee.id);
    if (!salary) {
        throw new Error(`Salary of employee ${employee.name} not found.`);
    } else {
        return ({
            "name": employee.name,
            "salary": salary.amount,
            "id": employee.id
        });
    }
};

let getEmployee = async(id) => {
    let employee = Employees.find(employee => employee.id === id);
    if (!employee) {
        throw new Error(`Employee with id ${id} not found.`);
    } else {
        return employee;
    }
};

let getInfo = async(id) => {
    let employee = await getEmployee(id);
    let salary = await getSalary(employee);
    return `${salary.name} has a salary of ${salary.salary}`;
};

getInfo(1)
    .then(message => console.log(message))
    .catch(err => console.log("Error: ", err));