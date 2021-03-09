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
    sub_title VARCHAR(50)
);

CREATE TABLE sub_plan(
    sub_plan_id SERIAL PRIMARY KEY,
    sub_plan_title VARCHAR(50),
    sub_price INT,
    sub_id INT REFERENCES subscriptions(sub_id)
);

CREATE TABLE  my_subscriptions(
   my_subscriptions_id SERIAL PRIMARY KEY,
   sub_length INT,
   user_id INT REFERENCES users(user_id),
   sub_id INT REFERENCES subscriptions(sub_id),
   sub_plan_id INT REFERENCES sub_plan(sub_plan_id)
);



INSERT INTO users
    (email, password)
VALUES
    ('test1@user.com', 'test1password'),
    ('test2@user.com', 'test2password'),
    ('test@test.com', 'test1')


INSERT INTO subscriptions
    (sub_title)
VALUES
    ('Netflix'),
    ('Hulu'),
    ('Xbox Live'),
    ('DisneyPlus'),
    ('Amazon Prime'),
    ('Planet Fitness'),
    ('Freshly'),
    ('Dollar Shave Club'),
    ('Sock Panda');

    
    INSERT INTO my_subscriptions
    (user_id, sub_id, sub_length, sub_plan_id)
    VALUES
    (1, 1, 1, 1),
    (1, 2, 1, 3),
    (2, 3, 12, 5),
    (3, 3, 12, 5);

    INSERT INTO sub_plan
    (sub_plan_title, sub_price, sub_id)
    VALUES
    ('Premium', 25, 1),
    ('Base', 18, 1),
    ('Premium', 20, 2),
    ('Base', 15, 2),
    ('Base', 50, 3);
