SELECT * FROM my_subscriptions m
JOIN subscriptions s ON m.sub_id = s.sub_id
JOIN sub_plan p ON m.sub_plan_id = p.sub_plan_id
WHERE m.user_id = $1;