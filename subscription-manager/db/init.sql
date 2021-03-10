DROP TABLE IF EXISTS users
DROP TABLE IF EXISTS subscriptions
DROP TABLE IF EXISTS my_subscriptions
DROP TABLE IF EXISTS sub_plan

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
    sub_price VARCHAR(50),
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
    ('Standard', '$8.99 per month', 1),
    ('Premium', '$17.99 per month', 1),   
    ('Standard', '$5.99 per month', 2),
    ('Premium', '11.99 per month', 2),   
    ('Standard', '$9.99 per month', 3),
    ('Premium', '$59.99 per year', 3)   
    ('Standard', '$7.99 per month', 4),
    ('Premium', '$12.99 per month', 4),
    ('Standard', '$12.99 per month', 5),
    ('Standard', '$9.99 per month', 6),
    ('Premium', '$19.99 per month', 6),
    ('Standard', '$45.00 per week', 7),
    ('Standard', '$4.00 per month', 8),
    ('Premium', '$10.00 per month', 8),
    ('Standard', '$40.00 per month', 9);
    
