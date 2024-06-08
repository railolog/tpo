package tatar.railolog.task3;

import lombok.Getter;
import tatar.railolog.task3.exception.InvalidStateException;

@Getter
public class Head {
    private boolean isSmiling;
    private boolean isBusy;

    public void smile() {
        if (isBusy) {
            throw new InvalidStateException("Head is already busy");
        }

        isSmiling = true;
        isBusy = true;
    }

    public void stopSmiling() {
        if (!isSmiling) {
            return;
        }

        isSmiling = false;
        isBusy = false;
    }

    public void setBusy(boolean busy) {
        if (isBusy) {
            throw new InvalidStateException("Head is already busy");
        }
        isBusy = busy;
    }
}
