package tatar.railolog.task3;

import lombok.NonNull;
import tatar.railolog.task3.exception.InvalidStateException;

public class Chair {
    private boolean isTaken;
    private Creature occupier;

    public void occupyWith(Creature creature) {
        if (isTaken) {
            throw new InvalidStateException("Chair is already occupied");
        }

        this.occupier = creature;
        isTaken = true;
    }

    public void release() {
        if (!isTaken) {
            throw new InvalidStateException("Chair is already free");
        }

        occupier = null;
        isTaken = false;
    }

    public boolean isTakenBy(@NonNull Creature creature) {
        return creature.equals(occupier);
    }
}
