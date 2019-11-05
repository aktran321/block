DROP DATABASE IF EXISTS class_db

CREATE DATABASE class_db;
USE class_db;

CREATE TABLE classes
(
    id int NOT NULL AUTO_INCREMENT,
    subject-name VARCHAR(255) NOT NULL,
    section INTEGER NOT NULL,
    start_at TIME,
    end_at TIME,
    week_day VARCHAR(10) NOT NULL,
    credit_hours INT NOT NULL,
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

