BEGIN
    FOR acc IN (SELECT AccountID, Balance FROM SavingsAccounts)
    LOOP
        UPDATE SavingsAccounts
        SET Balance = acc.Balance + (acc.Balance * 0.01)
        WHERE AccountID = acc.AccountID;
    END LOOP;

    COMMIT;
END;
/


SELECT * FROM SavingsAccounts;