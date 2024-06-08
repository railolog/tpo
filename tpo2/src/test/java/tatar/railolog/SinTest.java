package tatar.railolog;

import java.math.BigDecimal;
import java.math.MathContext;
import java.util.stream.Stream;

import ch.obermuhlner.math.big.BigDecimalMath;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;
import tatar.railolog.trig.Sin;

import static java.math.MathContext.DECIMAL128;
import static java.math.RoundingMode.HALF_EVEN;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class SinTest {
    private static final MathContext mc = new MathContext(DECIMAL128.getPrecision(), HALF_EVEN);
    private static final BigDecimal DEFAULT_PRECISION = new BigDecimal("0.0001");
    private static final BigDecimal PI_2 = BigDecimalMath.pi(mc).divide(BigDecimal.valueOf(2), mc);
    private static final BigDecimal PI_3 = BigDecimalMath.pi(mc).divide(BigDecimal.valueOf(3), mc);
    private static final BigDecimal PI_4 = BigDecimalMath.pi(mc).divide(BigDecimal.valueOf(4), mc);
    private static final BigDecimal PI_6 = BigDecimalMath.pi(mc).divide(BigDecimal.valueOf(6), mc);
    private static final BigDecimal PI = BigDecimalMath.pi(mc);
    private static final Sin sin = new Sin();

    @ParameterizedTest
    @MethodSource("provideSinArguments")
    void sinTest(BigDecimal x, BigDecimal expected) {
        assertEquals(expected, sin.calculate(x, DEFAULT_PRECISION));
    }

    private static Stream<Arguments> provideSinArguments() {
        return Stream.of(
                Arguments.of(BigDecimal.ZERO, new BigDecimal("0.0000")),
                Arguments.of(PI, new BigDecimal("0.0000")),

                Arguments.of(PI_2, new BigDecimal("1.0000")),
                Arguments.of(PI_2.multiply(BigDecimal.valueOf(3)), new BigDecimal("-1.0000")),

                Arguments.of(PI_3, new BigDecimal("0.8660")),
                Arguments.of(PI_3.multiply(BigDecimal.valueOf(2)), new BigDecimal("0.8660")),
                Arguments.of(PI_4, new BigDecimal("0.7071")),
                Arguments.of(PI_4.multiply(BigDecimal.valueOf(3)), new BigDecimal("0.7071")),
                Arguments.of(PI_6, new BigDecimal("0.5000")),
                Arguments.of(PI_6.multiply(BigDecimal.valueOf(5)), new BigDecimal("0.5000")),

                Arguments.of(PI_3.multiply(BigDecimal.valueOf(5)), new BigDecimal("-0.8660")),
                Arguments.of(PI_4.multiply(BigDecimal.valueOf(7)), new BigDecimal("-0.7071")),
                Arguments.of(PI_6.multiply(BigDecimal.valueOf(11)), new BigDecimal("-0.5000"))
        );
    }
}
