CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    Age NUMBER,
    Balance NUMBER,
    IsVIP CHAR(1) DEFAULT 'N'
);

CREATE TABLE Loans (
    LoanID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    InterestRate NUMBER(5,2),
    DueDate DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

INSERT ALL
    INTO Customers VALUES (1, 'Alice', 65, 12000, 'N')
    INTO Customers VALUES (2, 'Bob', 45, 9000, 'N')
    INTO Customers VALUES (3, 'Charlie', 70, 8000, 'N')
    INTO Customers VALUES (4, 'Diana', 30, 15000, 'N')
SELECT * FROM dual;

INSERT ALL
    INTO Loans VALUES (101, 1, 10.5, SYSDATE + 10)
    INTO Loans VALUES (102, 2, 11.0, SYSDATE + 40)
    INTO Loans VALUES (103, 3, 12.5, SYSDATE + 20)
    INTO Loans VALUES (104, 4, 9.5,  SYSDATE + 5)
SELECT * FROM dual;


