DROP database if exists bamazon2_db

-- Create the database day_planner_db and specified it for use.
CREATE DATABASE bamazon2_db;
USE bamazon2_db;

-- Create the table plans.
CREATE TABLE products
(
id int NOT NULL AUTO_INCREMENT,
product varchar(140) NOT NULL,
department_name varchar (140) NOT NULL,
price int NOT NULL,
stock_quantity int not null,
PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO products (product, department_name, price, stock_quantity) VALUES ("27in iMac", "Electronics", 1700.00, 40 );
INSERT INTO products (product, department_name, price, stock_quantity) VALUES ("15in MacBook Pro", "Electronics", 1200.00, 35 );
INSERT INTO products (product, department_name, price, stock_quantity) VALUES ("21in iMac", "Electronics", 1300.00, 27 );
INSERT INTO products (product, department_name, price, stock_quantity) VALUES ("82in Samsung 4k TV", "Electronics", 3300.00, 17 );
INSERT INTO products (product, department_name, price, stock_quantity) VALUES ("85in Sony 4k TV", "Electronics", 6000.00, 23 );
INSERT INTO products (product, department_name, price, stock_quantity) VALUES ("Playstation 4", "Electronics", 300.00, 20 );
INSERT INTO products (product, department_name, price, stock_quantity) VALUES ("2017 Dilbert Desk Calendar", "Stationary", 12.00, 145 );
INSERT INTO products (product, department_name, price, stock_quantity) VALUES ("Cards Against Humanity", "Toys", 40.00, 53 );
INSERT INTO products (product, department_name, price, stock_quantity) VALUES ("Magnetic Phone Mount", "Electronics", 20.00, 90 );
INSERT INTO products (product, department_name, price, stock_quantity) VALUES ("Billet Exterior Door Handles", "Automotive", 325.00, 0 );