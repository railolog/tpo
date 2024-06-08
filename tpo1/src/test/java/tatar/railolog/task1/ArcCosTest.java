package tatar.railolog.task1;

import java.util.List;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvFileSource;
import org.junit.jupiter.params.provider.MethodSource;

import static org.junit.jupiter.api.Assertions.assertAll;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

public class ArcCosTest {
    static final double V3_2 = Math.sqrt(3.0) / 2;
    static final double V2_2 = Math.sqrt(2.0) / 2;

    @ParameterizedTest(name = "acos({0})")
    @DisplayName("Check PI dots")
    @MethodSource("provideBorderValues")
    void checkPiDots(double param) {
        assertAll(
                () -> assertEquals(Math.acos(param), ArcCos.compute(param, 100), 0.0001)
        );
    }

    @ParameterizedTest(name = "acos({0}) = {1}")
    @DisplayName("Check between dots [-1; +1]")
    @CsvFileSource(resources = "/table_values.csv", numLinesToSkip = 1, delimiter = ';')
    void checkNonBorderDots(double x, double y) {
        assertAll(
                () -> assertEquals(y, ArcCos.compute(x, 100), 0.0001)
        );
    }

    @Test
    void callWithIllegalXThenThrows() {
        assertThrows(ArithmeticException.class, () -> ArcCos.compute(-1.1, 1));
        assertThrows(ArithmeticException.class, () -> ArcCos.compute(30, 1));
    }

    static List<Double> provideBorderValues() {
        return List.of(
                -V3_2,
                -V2_2,
                -1.0 / 2,
                0.0,
                1.0 / 2,
                V2_2,
                V3_2
        );
    }
}
