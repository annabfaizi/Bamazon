-- Drops the favorite_db if it exists currently --
DROP DATABASE IF EXISTS bamazon_db;
-- Creates the "favorite_db" database --
CREATE DATABASE bamazon_db;

-- Make it so all of the following code will affect favorite_db --
use bamazon_db;
-- Creates the table "favorite_foods" within favorite_db --
CREATE TABLE products (
	item_id INT NOT NULL,
    product_name varchar(100) NULL,
    department_name varchar(100) NULL,
    price decimal(10, 2) NULL,
    stock_quantity INT NULL,
    primary key (item_id)
    );

alter table products add index department_name(department_name);

select * from products;
