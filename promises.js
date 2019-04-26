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

let getSalary = (employee) => {
    return new Promise((resolve, reject) => {
        let salary = Salaries.find(salary => salary.employee_id === employee.id);
        if (!salary) {
            reject(`Salary of employee ${employee.name} not found.`);
        } else {
            resolve({
                "name": employee.name,
                "salary": salary.amount,
                "id": employee.id
            });
        }
    });
};

let getEmployee = (id) => {
    return new Promise((resolve, reject) => {
        let employee = Employees.find(employee => employee.id === id);
        if (!employee) {
            reject(`Employee with id ${id} not found.`);
        } else {
            resolve(employee);
        }
    });
};

getEmployee(1).then((employee) => {
    return getSalary(employee);
}).then((resp) => {
    console.log(`The salary of employee ${resp.name} is ${resp.salary}`);
}).catch((error) => console.log(error));