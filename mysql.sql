create database sneakerhub;
use sneakerhub;

create table users(uname varchar(20) primary key, email varchar(100), pass varchar(20));
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'mhada101';
select * from users;

create table cardDetails(name varchar(20), phone varchar(20), address varchar(100), card_number varchar(20));
select * from cardDetails
