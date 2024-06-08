package tatar.railolog.trig;

import java.math.BigDecimal;
import java.math.MathContext;

import ch.obermuhlner.math.big.BigDecimalMath;
import tatar.railolog.domain.LimitedIterationsFunction;

import static java.math.BigDecimal.ONE;
import static java.math.BigDecimal.ZERO;
import static java.math.MathContext.DECIMAL128;
import static java.math.RoundingMode.HALF_EVEN;

public class Cos extends LimitedIterationsFunction {

    private final Sin sin;

    public Cos() {
        super();
        this.sin = new Sin();
    }

    public Cos(Sin sin) {
        super();
        this.sin = sin;
    }

    @Override
    public BigDecimal calculate(
            BigDecimal x,
            BigDecimal precision) throws ArithmeticException {

        checkValidity(x, precision);

        MathContext mc = new MathContext(DECIMAL128.getPrecision(), HALF_EVEN);
        BigDecimal correctedX = x.remainder(BigDecimalMath.pi(mc).multiply(new BigDecimal(2)));

        if (correctedX.compareTo(ZERO) == 0) {
            return ONE;
        }

        BigDecimal result = sin.calculate(
                BigDecimalMath.
                        pi(mc)
                        .divide(new BigDecimal(2), mc)
                        .subtract(correctedX),
                precision
        );

        return result.setScale(precision.scale(), HALF_EVEN);
    }
}
