DROP TABLE IF EXISTS users
DROP TABLE IF EXISTS subscriptions
DROP TABLE IF EXISTS my_subscriptions

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(2500) NOT NULL
);

CREATE TABLE subscriptions (
    sub_id SERIAL PRIMARY KEY,
    sub_title VARCHAR(50),
    sub_price INT
);

CREATE TABLE  my_subscriptions(
   my_subscriptions_id SERIAL PRIMARY KEY,
   sub_details VARCHAR(200),
   user_id INT REFERENCES users(user_id),
   sub_id INT REFERENCES subscriptions(sub_id)
);



INSERT INTO users
    (email, password)
VALUES
    ('test1@user.com', 'test1password'),
    ('test2@user.com', 'test2password');

INSERT INTO subscriptions
    (sub_title, sub_price)
VALUES
    ('Netflix', 18),
    ('Hulu', 15),
    ('Xbox Live', 50);

    INSERT INTO my_subscriptions
    (user_id, sub_id, sub_details)
    VALUES
    (1, 1, 'testnetflix'),
    (1, 2, 'testhulu'),
    (2, 3, 'testxbox');