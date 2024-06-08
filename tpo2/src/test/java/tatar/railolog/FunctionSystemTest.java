package tatar.railolog;

import java.math.BigDecimal;
import java.math.MathContext;
import java.util.stream.Stream;

import ch.obermuhlner.math.big.BigDecimalMath;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import tatar.railolog.domain.FunctionSystem;
import tatar.railolog.log.Ln;
import tatar.railolog.log.Log;
import tatar.railolog.trig.Csc;

import static java.math.MathContext.DECIMAL128;
import static java.math.RoundingMode.HALF_EVEN;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class FunctionSystemTest {
    private static final MathContext mc = new MathContext(DECIMAL128.getPrecision(), HALF_EVEN);
    private static final BigDecimal DEFAULT_PRECISION = new BigDecimal("0.0000001");
    private static final BigDecimal MINUS_PI_DIV = BigDecimalMath
            .pi(mc)
            .divide(BigDecimal.valueOf(2), mc)
            .multiply(BigDecimal.valueOf(-1), mc);
    private static final BigDecimal MINUS_PI = BigDecimalMath.pi(mc).multiply(BigDecimal.valueOf(-1));
    private static final FunctionSystem functionSystem = new FunctionSystem();
    @Mock
    private Ln ln;
    @Mock
    private Log log10;
    @Mock
    private Csc csc;

    @Test
    void positiveValue() {
        BigDecimal expected = new BigDecimal("0.0067098");
        assertEquals(expected, functionSystem.calculate(BigDecimal.valueOf(3), DEFAULT_PRECISION));
    }

    @ParameterizedTest
    @MethodSource("provideCscArguments")
    void negativeValues(BigDecimal x, BigDecimal expected) {
        assertEquals(expected, functionSystem.calculate(x, DEFAULT_PRECISION));
    }

    @ParameterizedTest
    @MethodSource("providePiNArguments")
    void piNThrows(BigDecimal x) {
        assertThrows(ArithmeticException.class, () -> functionSystem.calculate(x, DEFAULT_PRECISION));
    }

    @Test
    void mockLnLog() {
        when(ln.calculate(eq(BigDecimal.valueOf(5)), any())).thenReturn(new BigDecimal("1.6094379"));
        when(log10.calculate(eq(BigDecimal.valueOf(5)), any())).thenReturn(new BigDecimal("0.69897"));

        FunctionSystem functionSystem1 = new FunctionSystem(ln, log10);

        assertEquals(new BigDecimal("0.0067097"), functionSystem1.calculate(BigDecimal.valueOf(5), DEFAULT_PRECISION));
    }

    @Test
    void mockLog() {
        when(log10.calculate(eq(BigDecimal.valueOf(5)), any())).thenReturn(new BigDecimal("0.69897"));

        FunctionSystem functionSystem1 = new FunctionSystem(log10);

        assertEquals(new BigDecimal("0.0067098"), functionSystem1.calculate(BigDecimal.valueOf(5), DEFAULT_PRECISION));
    }

    @Test
    void mockLn() {
        when(ln.calculate(eq(BigDecimal.valueOf(5)), any())).thenReturn(new BigDecimal("1.6094379"));
        when(ln.calculate(eq(BigDecimal.valueOf(10)), any())).thenReturn(new BigDecimal("2.30258509"));
        Log log = new Log(ln, 10);

        FunctionSystem functionSystem1 = new FunctionSystem(ln, log);

        assertEquals(new BigDecimal("0.0067097"), functionSystem1.calculate(BigDecimal.valueOf(5), DEFAULT_PRECISION));
    }

    @Test
    void mockCsc() {
        when(csc.calculate(eq(BigDecimal.valueOf(-5)), any())).thenReturn(new BigDecimal("1.042835"));

        FunctionSystem functionSystem1 = new FunctionSystem(csc);
        assertEquals(new BigDecimal("1.0428350"), functionSystem1.calculate(BigDecimal.valueOf(-5), DEFAULT_PRECISION));
    }

    @Test
    void assertThrowsFromOne() {
        assertThrows(ArithmeticException.class, () -> functionSystem.calculate(BigDecimal.ONE, DEFAULT_PRECISION));
    }

    private static Stream<Arguments> provideCscArguments() {
        return Stream.of(
                Arguments.of(MINUS_PI_DIV, new BigDecimal("-1.0000000")),
                Arguments.of(MINUS_PI_DIV.multiply(BigDecimal.valueOf(5)), new BigDecimal("-1.0000000")),
                Arguments.of(MINUS_PI_DIV.multiply(BigDecimal.valueOf(3)), new BigDecimal("1.0000000")),
                Arguments.of(MINUS_PI_DIV.multiply(BigDecimal.valueOf(7)), new BigDecimal("1.0000000")),

                Arguments.of(new BigDecimal("-4.2"), new BigDecimal("1.1473471")),
                Arguments.of(new BigDecimal("-3.5"), new BigDecimal("2.8507637")),
                Arguments.of(new BigDecimal("-3.12"), new BigDecimal("-46.3155945")),

                Arguments.of(new BigDecimal("-1"), new BigDecimal("-1.1883951")),
                Arguments.of(new BigDecimal("-0.5"), new BigDecimal("-2.0858298")),

                Arguments.of(new BigDecimal("-5"), new BigDecimal("1.0428352")),
                Arguments.of(new BigDecimal("-6"), new BigDecimal("3.5788995"))
        );
    }

    private static Stream<BigDecimal> providePiNArguments() {
        return Stream.of(
                MINUS_PI,
                MINUS_PI.multiply(BigDecimal.valueOf(2)),
                MINUS_PI.multiply(BigDecimal.valueOf(10))
        );
    }
}
