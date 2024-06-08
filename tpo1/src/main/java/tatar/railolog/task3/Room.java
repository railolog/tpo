package tatar.railolog.task3;

import java.util.HashSet;
import java.util.Set;

import lombok.Getter;

@Getter
public class Room {
    private final Set<Creature> creatures = new HashSet<>();
    private final Chair chair = new Chair();
    private static final int CAPACITY = 2;

    public void enter(Creature creature) {
        if (creatures.size() >= CAPACITY) {
            throw new RuntimeException("Room is full of creatures");
        }

        creatures.add(creature);
    }

    public void leaveRoom(Creature creature) {
        if (chair.isTakenBy(creature)) {
            throw new RuntimeException("Creature is sitting on the chair. Leave chair first");
        }

        creatures.remove(creature);
    }

    public int getRemainingSpace() {
        return CAPACITY - creatures.size();
    }
}
