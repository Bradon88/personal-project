DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS subscriptions;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(2500) NOT NULL
);

CREATE TABLE subscriptions (
    sub_id SERIAL PRIMARY KEY,
    sub_img TEXT,
    sub_title VARCHAR(50),
    sub_price INT,
    user_id INT REFERENCES, users(user_id)
);






INSERT INTO users
    (email, password)
VALUES
    ('test1@user.com', 'test1password'),
    ('test2@user.com', 'test2password');

INSERT INTO subscriptions
    (sub_id, sub-title, sub_price)
VALUES
    (1, 'NextFLix', 25)
    (2, 'Hula', 15)
    (3, 'Xbox Five', 50)