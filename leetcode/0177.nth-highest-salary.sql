SELECT
    COALESCE(
        (
            SELECT TOP 1 
                RS.salary 
            FROM (
                SELECT
                    salary,
                    dense_rank() OVER ( ORDER BY salary DESC ) AS rank
                FROM
                    Employee
            ) AS RS                 
            WHERE 
                RS.rank = @N
        ),
        NULL
    )