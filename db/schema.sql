DROP DATABASE IF EXISTS class_db

CREATE DATABASE class_db;
USE class_db;

CREATE TABLE classes
(
    id INT NOT NULL AUTO_INCREMENT,
    course VARCHAR(255) NOT NULL,
    section INTEGER NOT NULL,
    title VARCHAR(255) NOT NULL,
    credit INTEGER NOT NULL,
    time TIME,
    days VARCHAR (10) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE students
(
    id int NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    PRIMARY KEY (id)

);

