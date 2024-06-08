package tatar.railolog.trig;

import java.math.BigDecimal;
import java.math.MathContext;

import tatar.railolog.domain.LimitedIterationsFunction;

import static java.math.MathContext.DECIMAL128;
import static java.math.RoundingMode.HALF_EVEN;

public class Csc extends LimitedIterationsFunction {
    private final Sin sin;

    public Csc() {
        super();
        this.sin = new Sin();
    }

    public Csc(Sin sin) {
        super();
        this.sin = sin;
    }

    @Override
    public BigDecimal calculate(BigDecimal x, BigDecimal precision) {
        checkValidity(x, precision);

        MathContext mc = new MathContext(DECIMAL128.getPrecision(), HALF_EVEN);

        BigDecimal result = BigDecimal.valueOf(1)
                .divide(sin.calculate(x, precision), mc);

        return result.setScale(precision.scale(), HALF_EVEN);
    }
}
