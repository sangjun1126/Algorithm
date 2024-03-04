-- 코드를 입력하세요
SELECT 
  HOUR_TB.HOUR, 
  COUNT(A.ANIMAL_ID) AS COUNT
FROM (
    SELECT 0 AS HOUR
    UNION ALL
    SELECT 1 AS HOUR
    UNION ALL
    SELECT 2 AS HOUR
    UNION ALL
    SELECT 3 AS HOUR
    UNION ALL
    SELECT 4 AS HOUR
    UNION ALL
    SELECT 5 AS HOUR
    UNION ALL
    SELECT 6 AS HOUR
    UNION ALL
    SELECT 7 AS HOUR
    UNION ALL
    SELECT 8 AS HOUR
    UNION ALL
    SELECT 9 AS HOUR
    UNION ALL
    SELECT 10 AS HOUR
    UNION ALL
    SELECT 11 AS HOUR
    UNION ALL
    SELECT 12 AS HOUR
    UNION ALL
    SELECT 13 AS HOUR
    UNION ALL
    SELECT 14 AS HOUR
    UNION ALL
    SELECT 15 AS HOUR
    UNION ALL
    SELECT 16 AS HOUR
    UNION ALL
    SELECT 17 AS HOUR
    UNION ALL
    SELECT 18 AS HOUR
    UNION ALL
    SELECT 19 AS HOUR
    UNION ALL
    SELECT 20 AS HOUR
    UNION ALL
    SELECT 21 AS HOUR
    UNION ALL
    SELECT 22 AS HOUR
    UNION ALL
    SELECT 23 AS HOUR
) AS HOUR_TB
LEFT JOIN ANIMAL_OUTS AS A ON HOUR(A.DATETIME) = HOUR_TB.HOUR
GROUP BY HOUR_TB.HOUR
ORDER BY HOUR_TB.HOUR