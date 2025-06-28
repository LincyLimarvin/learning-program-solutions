package com.example.calculator;

import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorFixtureTest {

    private Calculator calc;

    // 🔧 Setup — runs before every test
    @Before
    public void setUp() {
        System.out.println("Setting up Calculator...");
        calc = new Calculator();  // Arrange
    }

    // 🧹 Teardown — runs after every test
    @After
    public void tearDown() {
        System.out.println("Cleaning up Calculator...");
        calc = null;
    }

    @Test
    public void testAddition() {
        // Act
        int result = calc.add(10, 5);
        
        // Assert
        assertEquals(15, result);
    }

    @Test
    public void testAdditionNegative() {
        // Act
        int result = calc.add(-3, -7);
        
        // Assert
        assertEquals(-10, result);
    }
}
