package tatar.railolog.domain;

import java.math.BigDecimal;

public interface SeriesFunction {

    BigDecimal calculate(BigDecimal x, BigDecimal precision);

}
