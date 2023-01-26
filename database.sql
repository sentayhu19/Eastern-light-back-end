CREATE DATABASE eastern-light;



-- USERS table
 
 create table users (
    user_id  serial  primary key,
    username varchar(255) not null,
    password varchar(255) not null,
    email varchar(255) UNIQUE not null,
    created_at date default CURRENT_DATE
 )


-- Category table
CREATE TABLE category (
      id serial primary key,
      name varchar(255) not null,
      description varchar(255) not null,
      created_at date default CURRENT_DATE
)


 --Products 
 CREATE TABLE products (
      id serial primary key,
      name varchar(255) not null,
      description varchar(255) not null,
      brand varchar(255) not null,
      price varchar(255),
      image varchar(255) ,
      created_at date default CURRENT_DATE,
      priority INT ,
      category_id INT, FOREIGN KEY (category_id) REFERENCES category(id)
)

 
