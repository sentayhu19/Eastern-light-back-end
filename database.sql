CREATE DATABASE eastern-light;
-- USERS table
 
 CREATE  TABLE users (
    user_id  serial  primary key,
    username varchar(255),
    password varchar(255) not null,
    email varchar(255) UNIQUE not null,
    created_at date default CURRENT_DATE
 )

CREATE TABLE messages (
      id serial primary key,
      name varchar(255) not null,
      email varchar(255),
      phone varchar(255) not null,
      message varchar(255) not null,
      created_at timestamp default CURRENT_DATE
)

-- Category table
CREATE  TABLE category (
      id serial primary key,
      name varchar(255) not null,
      created_at date default CURRENT_DATE
)


 --Products 
 CREATE TABLE products (
      id serial primary key,
      name varchar(255) not null,
      description varchar(700) not null,
      brand varchar(255) not null,
      price varchar(255),
      image varchar(255) ,
      created_at date default CURRENT_DATE,
      priority INT ,
      unit_id INT, FOREIGN KEY (unit_id) REFERENCES unit(id),
      box int ,
      category_id INT, FOREIGN KEY (category_id) REFERENCES category(id)
)

 ALTER TABLE Products ADD COLUMN unit_id INT, ADD CONSTRAINT fk_unit FOREIGN KEY (unit_id) REFERENCES unit(id);


CREATE  TABLE unit (
      id serial primary key,
      name varchar(255) not null,
      created_at date default CURRENT_DATE
)

-- ALTER TABLE Products ADD COLUMN unit_id INT, ADD CONSTRAINT fk_unit FOREIGN KEY (unit_id) REFERENCES unit(id);
