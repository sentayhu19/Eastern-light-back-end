-- USERS table
 create table users (
    user_id  serial  primary key,
    username varchar(255) not null,
    password varchar(255) not null,
    email varchar(255) UNIQUE not null,
    created_at date default CURRENT_DATE
 )

 --Products 
 CREATE TABLE products (
      product_id serial primary key,
      product_name varchar(255) not null,
      product_description varchar(255) not null,
      product_brand varchar(255) not null,
      product_price varchar(255) not null,
      product_image varchar(255) not null,
      created_at date default CURRENT_DATE,
      product_priority INTEGER(255) not null,
      product_category varchar(255) not null
)
 
