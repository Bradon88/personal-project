INSERT INTO my_subscriptions
    (user_id, sub_id, sub_details)
VALUES
    ($1, $2, $3);

SELECT * FROM my_subscriptions m
JOIN subscriptions s ON m.sub_id = s.sub_id
WHERE m.user_id = $1;