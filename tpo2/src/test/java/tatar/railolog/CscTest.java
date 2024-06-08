package tatar.railolog;

import java.math.BigDecimal;
import java.util.stream.Stream;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;
import org.mockito.Mock;
import org.mockito.Spy;
import org.mockito.junit.jupiter.MockitoExtension;
import tatar.railolog.trig.Csc;
import tatar.railolog.trig.Sin;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.any;
import static org.mockito.Mockito.atLeastOnce;
import static org.mockito.Mockito.eq;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class CscTest {
    private static final BigDecimal DEFAULT_PRECISION = new BigDecimal("0.0001");
    @Spy
    private Sin spySin;
    @Mock
    private Sin mockSin;

    @Test
    void checkCalls() {
        Csc csc = new Csc(spySin);
        csc.calculate(BigDecimal.ONE, DEFAULT_PRECISION);

        verify(spySin, atLeastOnce()).calculate(any(BigDecimal.class), any(BigDecimal.class));
    }

    @ParameterizedTest
    @MethodSource("provideCscArguments")
    void testCsc(BigDecimal x, BigDecimal sinStub, BigDecimal expected) {
        when(mockSin.calculate(eq(x), any(BigDecimal.class))).thenReturn(sinStub);

        Csc csc = new Csc(mockSin);
        assertEquals(expected, csc.calculate(x, DEFAULT_PRECISION));
    }

    @Test
    void testThrows() {
        when(mockSin.calculate(eq(BigDecimal.ZERO), any())).thenThrow(ArithmeticException.class);
        Csc csc = new Csc(mockSin);

        assertThrows(ArithmeticException.class, () -> csc.calculate(BigDecimal.ZERO, DEFAULT_PRECISION));
    }

    private static Stream<Arguments> provideCscArguments() {
        return Stream.of(
                Arguments.of(BigDecimal.valueOf(1), new BigDecimal("0.8414"), new BigDecimal("1.1885")),
                Arguments.of(BigDecimal.valueOf(2), new BigDecimal("0.9092"), new BigDecimal("1.0999")),
                Arguments.of(BigDecimal.valueOf(4), new BigDecimal("-0.7568"), new BigDecimal("-1.3214"))
        );
    }
}
