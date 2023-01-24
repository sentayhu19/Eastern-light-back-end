-- USERS table
 create table users (
    user_id  serial  primary key,
    username varchar(255) not null,
    password varchar(255) not null,
    email varchar(255) UNIQUE not null,
    created_at date default CURRENT_DATE
 )
