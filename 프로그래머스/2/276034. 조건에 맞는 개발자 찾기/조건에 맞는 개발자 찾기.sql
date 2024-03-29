SELECT ID, EMAIL, FIRST_NAME, LAST_NAME
FROM DEVELOPERS D
WHERE 1=1
AND EXISTS(SELECT 1 
       FROM SKILLCODES S
       WHERE NAME IN ('Python','C#')
       AND S.CODE & D.SKILL_CODE = S.CODE)
ORDER BY ID;