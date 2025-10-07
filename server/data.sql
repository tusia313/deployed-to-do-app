CREATE DATABASE todo_app;

CREATE TABLE todos (
    id varchar(36) PRIMARY KEY,
    user_email varchar(255),
    title varchar(255),
    progress int(50),
    date varchar(505)
);

CREATE TABLE users (
    email varchar(255) PRIMARY KEY,
    hashed_password varchar(255)
);
-- Data for example 
INSERT INTO todos (id, user_email, title, progress, date) VALUES
('0','loskotmarta@gmail.com','Learn to code',95,'01 Oct 2025');
