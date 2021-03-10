INSERT INTO my_subscriptions
    (user_id, sub_id, sub_plan_id)
VALUES
    (${user_id}, ${sub_id}, ${sub_plan_id});

-- SELECT * FROM my_subscriptions m
-- JOIN subscriptions s ON m.sub_id = s.sub_id
-- WHERE m.user_id = $1;

SELECT * FROM my_subscriptions
WHERE user_id = ${user_id};