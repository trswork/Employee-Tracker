USE employee_trackerDB;

INSERT INTO department (department_name)
VALUES
('Sales'),
('Engineer'),
('Finance'),
('Legal');

INSERT INTO role (title)
VALUES
('Sales Lead'),
('Salesperson'),
('Lead Engineer'),
('Software Engineer'),
('Accountant'),
('Legal Team Lead'),
('Lawyer');

INSERT INTO employees (first_name, last_name, title, department_name, salary, manager_name)
VALUES
('John', 'Doe', 'Sales Lead', 'Sales', '100000', 'Ashley Rodriguez')
('Mike', 'Chan', 'Salesperson', 'Sales', '80000', 'John Doe')
('Ashley', 'Rodriguez', 'Lead Engineer', 'Engineer', '150000', 'null')
('Kevin', 'Tupik', 'Software Engineer', 'Engineer', '120000', 'Ashley Rodriguez')
('Malia', 'Brown', 'Accountant', 'Finance', '125000', 'null')
('Sarah', 'Lourd', 'Legal Team Lead', 'Legal', '250000', 'null')
('Tom', 'Allen', 'Lawyer', 'Legal', '190000', 'Sarah Lourd')
('Tammer', 'Galal', 'Software Engineer', 'Engineer', '120000', 'Kevin Tupik')