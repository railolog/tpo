package tatar.railolog.log;

import java.math.BigDecimal;

import tatar.railolog.domain.LimitedIterationsFunction;

import static java.lang.String.format;
import static java.math.BigDecimal.ZERO;
import static java.math.MathContext.DECIMAL128;
import static java.math.RoundingMode.HALF_EVEN;

public class Log extends LimitedIterationsFunction {

    private final Ln ln;
    private final int base;

    public Log(int base) {
        super();
        this.ln = new Ln();
        this.base = base;
    }

    public Log(Ln ln, int base) {
        super();
        this.ln = ln;
        this.base = base;
    }

    @Override
    public BigDecimal calculate(BigDecimal x, BigDecimal precision)
            throws ArithmeticException {
        checkValidity(x, precision);

        if (x.compareTo(ZERO) <= 0) {
            throw new ArithmeticException(format("Function value for argument %s doesn't exist", x));
        }

        BigDecimal result = ln
                .calculate(x, precision)
                .divide(
                        ln.calculate(new BigDecimal(base), precision),
                        DECIMAL128.getPrecision(),
                        HALF_EVEN
                );

        return result.setScale(precision.scale(), HALF_EVEN);
    }
}
