// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
  const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  let userInput = [];
  let addEmployee = true;

  while(addEmployee){
    let firstName = window.prompt('Enter your First Name:');
    let lastName = window.prompt('Enter your Last Name:');
    let salary = Number(window.prompt('Enter salary:'));
    
    if (Number.isNaN(salary)){
    window.alert('Please enter a valid number character.');
    continue;
  }
  userInput.push({firstName, lastName, salary});
  addEmployee = window.confirm('Do you want to add a new user?');
  if (addEmployee === 'no'){ }
  } 
  return userInput;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  let totalSalary = 0; 
  for(let i = 0; i < employeesArray.length; i++){
    totalSalary += employeesArray[i].salary;
  }
  

  // TODO: Calculate and display the average salary
  const average = totalSalary / employeesArray.length;
  const avgDecimal = average.toFixed(2);
  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is $${avgDecimal}`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  const selectRandomEmployee = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[selectRandomEmployee];
  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
