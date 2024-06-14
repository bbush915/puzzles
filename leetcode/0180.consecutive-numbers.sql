WITH
    islands AS (
        SELECT
            *,
            (ROW_NUMBER() OVER ( ORDER BY id ) - ROW_NUMBER() OVER ( PARTITION BY num ORDER BY id )) AS island_id
        FROM
            Logs
    ),
    island_counts AS (
        SELECT
            num, 
            island_id, 
            count(*) as count
        FROM
            islands
        GROUP BY
            num,
            island_id
    )
SELECT DISTINCT
    num AS [ConsecutiveNums]
FROM
    island_counts
WHERE
    1 = 1
    AND (count >= 3);