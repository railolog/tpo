package tatar.railolog;

import java.math.BigDecimal;

import org.junit.jupiter.api.Test;
import tatar.railolog.log.Ln;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

public class LnTest {
    private static final BigDecimal DEFAULT_PRECISION = new BigDecimal("0.00001");

    @Test
    void shouldNotCalculateForZero() {
        Ln ln = new Ln();
        assertThrows(ArithmeticException.class, () -> ln.calculate(BigDecimal.ZERO, DEFAULT_PRECISION));
    }

    @Test
    void shouldCalculateForOne() {
        Ln ln = new Ln();
        assertEquals(BigDecimal.ZERO, ln.calculate(BigDecimal.ONE, DEFAULT_PRECISION));
    }

    @Test
    void shouldCalculateForPositive() {
        Ln ln = new Ln();
        BigDecimal expected = new BigDecimal("1.38629");
        assertEquals(expected, ln.calculate(new BigDecimal(4), DEFAULT_PRECISION));
    }
}
