function addemployee() {
    // acess values from employee from inputs
    empname = ename.value
    empid = eid.value
    desig = did.value
    salary = sid.value
    exper = exid.value


    // store data in local storage

    if (empid in localStorage) {
        alert("Employee already registered")
    }
    else {
        employee = { "employee_name": empname, "empid": empid, "desig": desig, "salary": salary, "exp": exper }
        // convert the java script to json
        localStorage.setItem(employee.empid, JSON.stringify(employee))

        alert("Employee added succesfully")

        window.location = 'homepage.html'
    }
}

function index() {
    window.location = 'index.html'
}

function displaydata() {
    eid = s1.value
    if (eid in localStorage) {
        emp = JSON.parse(localStorage.getItem(eid))
        result.innerHTML = `<p>
        Employee name :<strong class="text-info"> ${emp.employee_name}</strong>
        Employee id :<strong class="text-info"> ${emp.empid}</strong>
        Employee designatiion :<strong class="text-info"> ${emp.desig}</strong>
        Employee salary :<strong class="text-info"> ${emp.salary}</strong>
        Employee experiance :<strong class="text-info"> ${emp.exp}</strong>
        </p>`
    }
    else {
        alert("Employee not present in data base")
        result.innerHTML = ''
    }
}
