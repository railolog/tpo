package tatar.railolog;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.math.BigDecimal;
import java.nio.file.Path;
import java.nio.file.Paths;

import tatar.railolog.domain.SeriesFunction;

public class CsvWriter {
    public static void write(
            String filename,
            SeriesFunction function,
            BigDecimal from,
            BigDecimal to,
            BigDecimal step,
            BigDecimal precision
    ) throws IOException {

        Path path = Paths.get(filename);
        File file = new File(path.toUri());
        if (file.exists()) {
            file.delete();
        }
        file.createNewFile();
        PrintWriter printWriter = new PrintWriter(file);
        for (BigDecimal current = from; current.compareTo(to) <= 0; current = current.add(step)) {
            printWriter.println(current.toString().replace(".", ",") + "\t" + function.calculate(current, precision).toString().replace(".", ","));
        }
        printWriter.close();
    }
}
