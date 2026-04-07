let employees = [];

        function addEmployee() {
            let name = document.getElementById("name").value.trim();
            let id = document.getElementById("id").value.trim();
            let salary = parseFloat(document.getElementById("salary").value);
            let dept = document.getElementById("dept").value.trim();

            if (!name || !id || !dept || isNaN(salary)) {
                alert("Please fill all fields correctly");
                return;
            }

            let emp = {
                name: name,
                id: id,
                salary: salary,
                department: dept
            };

            employees.push(emp);
            alert("Employee Added");

            // clear inputs
            document.getElementById("name").value = "";
            document.getElementById("id").value = "";
            document.getElementById("salary").value = "";
            document.getElementById("dept").value = "";
        }

        function displayEmployees() {
            if (employees.length === 0) {
                document.getElementById("result").innerHTML = "No employees found";
                return;
            }

            let output = "";
            for (let emp of employees) {
                output += `${emp.name} | ${emp.id} | ${emp.salary} | ${emp.department}<br>`;
            }
            document.getElementById("result").innerHTML = output;
        }

        function filterSalary() {
            let filtered = employees.filter(emp => emp.salary > 50000);

            if (filtered.length === 0) {
                document.getElementById("result").innerHTML = "No employees with salary > 50000";
                return;
            }

            let output = "";
            for (let emp of filtered) {
                output += `${emp.name} - ${emp.salary}<br>`;
            }
            document.getElementById("result").innerHTML = output;
        }

        function totalSalary() {
            if (employees.length === 0) {
                document.getElementById("result").innerHTML = "No employees available";
                return;
            }

            let total = 0;
            for (let emp of employees) {
                total += emp.salary;
            }

            document.getElementById("result").innerHTML = "Total Salary = " + total;
        }

        function averageSalary() {
            if (employees.length === 0) {
                document.getElementById("result").innerHTML = "No employees available";
                return;
            }

            let total = 0;
            for (let emp of employees) {
                total += emp.salary;
            }

            let avg = total / employees.length;
            document.getElementById("result").innerHTML = "Average Salary = " + avg.toFixed(2);
        }

        function countDepartment() {
            let dept = prompt("Enter department name");

            if (!dept) {
                alert("Please enter a department");
                return;
            }

            let count = 0;
            for (let emp of employees) {
                if (emp.department.toLowerCase() === dept.toLowerCase()) {
                    count++;
                }
            }

            document.getElementById("result").innerHTML = `Employees in ${dept} = ${count}`;
        }