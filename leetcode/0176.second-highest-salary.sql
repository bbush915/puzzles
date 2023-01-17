WITH
    ranked_salaries AS (
        SELECT
            salary,
            dense_rank() OVER ( ORDER BY salary DESC ) AS rank
        FROM
            Employee
    )
SELECT
    COALESCE(
        (SELECT TOP 1 salary FROM ranked_salaries WHERE rank = 2),
        NULL
    ) AS SecondHighestSalary;