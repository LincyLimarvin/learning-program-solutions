VAR dept_name VARCHAR2(50)
VAR bonus_pct NUMBER

EXEC :dept_name := 'IT';
EXEC :bonus_pct := 10;

BEGIN
    UPDATE Employees
    SET Salary = Salary + (Salary * :bonus_pct / 100)
    WHERE Department = :dept_name;

    COMMIT;
END;
/

SELECT * FROM Employees;
