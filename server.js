const express = require('express');
const inquirer = require("inquirer");
const mysql = require('mysql2/promise');
const db = require('./db/connection');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use apiRoutes
app.use('/api', apiRoutes);

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "New#Start2022",
  database: "employee_trackerDB"
});

db.connect(err => {
  if (err) throw err;
  app.listen(PORT, () => {});
});

function runPrompt() {
  inquirer.prompt({
    type: 'list',
    name: 'menu',
    message: 'What would you like to do?',
    choices: [
      'View All Employees',
      'View All Departments',
      'View All Roles',
      'Add Employee',
      'Add Department',
      'Add Role',
      'Remove Employee',
      'Update Employee Role',
      "Exit"
    ]
  }).then( answer => {
    switch (answer.action) {
      case "View All Employees":
          allEmployees();
          break;
      case "View All Departments":
          viewAllDepartments();
          break;
      case "View All Roles":
          viewAllRoles();
          break;
      case "Add Employee":
          addEmployee();
          break;
      case "Add Department":
          addDepartment();
          break;
      case "Add Role":
          addRole();
          break;
      case "Remove Employee":
          deleteEmployee();
          break;
      case "Update Employee Role":
          updateEmployeeRole();
          break;
      case "Exit":
          connection.end();
          break;
  }
});
}

