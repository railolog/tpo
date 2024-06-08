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
import org.mockito.Spy;
import org.mockito.junit.jupiter.MockitoExtension;
import tatar.railolog.trig.Cos;
import tatar.railolog.trig.Sin;

import static java.math.MathContext.DECIMAL128;
import static java.math.RoundingMode.HALF_EVEN;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class CosTest {
    private static final MathContext mc = new MathContext(DECIMAL128.getPrecision(), HALF_EVEN);
    private static final BigDecimal DEFAULT_PRECISION = new BigDecimal("0.0001");
    private static final BigDecimal PI_2 = BigDecimalMath.pi(mc).divide(BigDecimal.valueOf(2), mc);
    private static final BigDecimal PI_3 = BigDecimalMath.pi(mc).divide(BigDecimal.valueOf(3), mc);
    private static final BigDecimal PI_4 = BigDecimalMath.pi(mc).divide(BigDecimal.valueOf(4), mc);
    private static final BigDecimal PI_6 = BigDecimalMath.pi(mc).divide(BigDecimal.valueOf(6), mc);
    private static final BigDecimal PI = BigDecimalMath.pi(mc);
    @Mock
    private Sin mockSin;
    @Spy
    private Sin spySin;

    @Test
    void checkCallSin() {
        Cos cos = new Cos(spySin);
        cos.calculate(BigDecimal.ONE, DEFAULT_PRECISION);

        verify(spySin, atLeastOnce()).calculate(any(BigDecimal.class), any(BigDecimal.class));
    }

    @ParameterizedTest
    @MethodSource("provideCosArguments")
    void checkWithMockSin(BigDecimal x, BigDecimal sinStub, BigDecimal expected) {
        BigDecimal correctedX = x.remainder(BigDecimalMath.pi(mc).multiply(new BigDecimal(2)));
        BigDecimal arg = BigDecimalMath.
                pi(mc)
                .divide(new BigDecimal(2), mc)
                .subtract(correctedX);

        when(mockSin.calculate(eq(arg), any(BigDecimal.class))).thenReturn(sinStub);

        Cos cos = new Cos(mockSin);
        assertEquals(expected, cos.calculate(x, DEFAULT_PRECISION));
    }

    @Test
    void checkWithZero() {
        Cos cos = new Cos(spySin);
        assertEquals(BigDecimal.ONE, cos.calculate(BigDecimal.ZERO, DEFAULT_PRECISION));
        verify(spySin, atMost(0)).calculate(any(BigDecimal.class), any(BigDecimal.class));
    }

    private static Stream<Arguments> provideCosArguments() {
        return Stream.of(
                Arguments.of(PI, new BigDecimal("-1.0000"), new BigDecimal("-1.0000")),
                Arguments.of(PI_2, new BigDecimal("0.0000"), new BigDecimal("0.0000")),
                Arguments.of(PI_2.multiply(BigDecimal.valueOf(3)), new BigDecimal("0.0000"), new BigDecimal("0.0000")),

                Arguments.of(PI_3, new BigDecimal("0.5000"), new BigDecimal("0.5000")),
                Arguments.of(PI_3.multiply(BigDecimal.valueOf(2)), new BigDecimal("-0.5000"), new BigDecimal("-0.5000")),
                Arguments.of(PI_4, new BigDecimal("0.7071"), new BigDecimal("0.7071")),
                Arguments.of(PI_4.multiply(BigDecimal.valueOf(3)), new BigDecimal("-0.7071"), new BigDecimal("-0.7071")),
                Arguments.of(PI_6, new BigDecimal("0.8660"), new BigDecimal("0.8660")),
                Arguments.of(PI_6.multiply(BigDecimal.valueOf(5)), new BigDecimal("0.8660"), new BigDecimal("0.8660"))
        );
    }
}
