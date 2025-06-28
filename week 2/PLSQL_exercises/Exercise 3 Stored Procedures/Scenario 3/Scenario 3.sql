SET SERVEROUTPUT ON;

DECLARE
    src_balance NUMBER;
    from_acc NUMBER := 201;  
    to_acc   NUMBER := 202;  
    transfer_amt NUMBER := 2000;
BEGIN
    SELECT Balance INTO src_balance
    FROM BankAccounts
    WHERE AccountID = from_acc;

    IF src_balance >= transfer_amt THEN
        UPDATE BankAccounts
        SET Balance = Balance - transfer_amt
        WHERE AccountID = from_acc;

        -- Add to destination
        UPDATE BankAccounts
        SET Balance = Balance + transfer_amt
        WHERE AccountID = to_acc;

        DBMS_OUTPUT.PUT_LINE('Transfer successful!');
    ELSE
        DBMS_OUTPUT.PUT_LINE('Transfer failed: Insufficient funds.');
    END IF;

    COMMIT;
END;
/

