SELECT * FROM my_subscriptions m
JOIN subscriptions s ON m.sub_id = s.sub_id
WHERE m.user_id = $1;