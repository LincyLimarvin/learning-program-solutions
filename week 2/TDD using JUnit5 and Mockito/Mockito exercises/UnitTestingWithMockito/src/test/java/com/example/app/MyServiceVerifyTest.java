package com.example.app;

import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;

public class MyServiceVerifyTest {

    @Test
    public void testMethodCalled() {
        // Arrange
        ExternalApi mockApi = mock(ExternalApi.class);
        MyService service = new MyService(mockApi);

        // Act
        service.processData(); // this should trigger getData()

        // Assert
        verify(mockApi, times(1)).getData(); // verify interaction
    }
}
