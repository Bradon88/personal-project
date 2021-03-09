SELECT * FROM sub_plan p
JOIN subscriptions s ON p.sub_id = s.sub_id
WHERE s.sub_id = $1
ORDER BY s.sub_title;