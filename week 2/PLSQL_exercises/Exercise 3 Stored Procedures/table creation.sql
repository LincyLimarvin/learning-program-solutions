CREATE TABLE SavingsAccounts (
    AccountID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    Balance NUMBER
);

CREATE TABLE Employees (
    EmpID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    Department VARCHAR2(50),
    Salary NUMBER
);

CREATE TABLE BankAccounts (
    AccountID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    Balance NUMBER
);

INSERT ALL
    INTO SavingsAccounts VALUES (101, 1, 5000)
    INTO SavingsAccounts VALUES (102, 2, 8000)
    INTO SavingsAccounts VALUES (103, 3, 12000)
    INTO SavingsAccounts VALUES (104, 4, 1000)
SELECT * FROM dual;

INSERT ALL
    INTO Employees VALUES (1, 'Alice', 'HR', 30000)
    INTO Employees VALUES (2, 'Bob', 'IT', 45000)
    INTO Employees VALUES (3, 'Charlie', 'HR', 32000)
    INTO Employees VALUES (4, 'Diana', 'IT', 50000)
    INTO Employees VALUES (5, 'Eve', 'Finance', 40000)
SELECT * FROM dual;

INSERT ALL
    INTO BankAccounts VALUES (201, 1, 10000)
    INTO BankAccounts VALUES (202, 2, 5000)
    INTO BankAccounts VALUES (203, 3, 15000)
    INTO BankAccounts VALUES (204, 4, 2000)
SELECT * FROM dual;


