package tatar.railolog.task1;

public class ArcCos {
    // https://forum.boolean.name/attachment.php?attachmentid=5039&d=1228513719
    public static double compute(double x, int n) {
        if (x < -1 || x > 1) {
            throw new ArithmeticException("x must be in [-1, 1]");
        }

        double res = Math.PI / 2 - x;

        double prevTerm = x;
        double x2 = x * x;
        for (int i = 1; i < n; i++) {
            prevTerm *= (2 * i - 1) * (2 * i - 1) * x2;
            prevTerm /= (2 * i) * (2 * i + 1);

            res -= prevTerm;
        }

        return res;
    }
}
