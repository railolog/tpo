package tatar.railolog.domain;

import java.math.BigDecimal;
import java.math.MathContext;

import ch.obermuhlner.math.big.BigDecimalMath;
import lombok.Setter;
import tatar.railolog.log.Ln;
import tatar.railolog.log.Log;
import tatar.railolog.trig.Csc;

import static java.math.MathContext.DECIMAL128;
import static java.math.RoundingMode.HALF_EVEN;
import static java.math.RoundingMode.HALF_UP;

@Setter
public class FunctionSystem implements SeriesFunction {
    private final Csc csc;
    private final Log log10;
    private final Ln ln;

    public FunctionSystem() {
        csc = new Csc();
        ln = new Ln();
        log10 = new Log(10);
    }

    public FunctionSystem(Csc csc) {
        this.csc = csc;
        ln = new Ln();
        log10 = new Log(10);
    }

    public FunctionSystem(Ln ln, Log log) {
        this.ln = ln;
        csc = new Csc();
        log10 = log;
    }

    public FunctionSystem(Log log) {
        this.ln = new Ln();
        csc = new Csc();
        log10 = log;
    }

    @Override
    public BigDecimal calculate(BigDecimal x, BigDecimal precision) {
        MathContext mc = new MathContext(DECIMAL128.getPrecision(), HALF_EVEN);

        if (x.compareTo(BigDecimal.ZERO) <= 0) {
            return csc.calculate(x, precision)
                    .setScale(precision.scale(), HALF_EVEN);
        } else {
            return log10.calculate(x, precision)
                    .divide(ln.calculate(x, precision), mc)
                    .pow(3, mc)
                    .subtract(log10.calculate(x, precision), mc)
                    .add(log10.calculate(x, precision), mc)
                    .pow(2, mc)
                    .setScale(precision.scale(), HALF_UP);
        }
    }
}
