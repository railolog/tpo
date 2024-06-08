package tatar.railolog.task2;

import java.util.Arrays;
import java.util.Objects;
import java.util.stream.Stream;

public class HashTable {
    private Slot[] slots;
    private int size;
    private int used;

    public HashTable(int initialSize) {
        this.size = initialSize;
        this.slots = new Slot[this.size];
        this.used = 0;
    }

    public Integer find(int key) {
        Slot slot = slots[lookup(key)];
        if (slot == null) {
            return null;
        }

        return slot.isOccupied() ? slot.getValue() : null;
    }

    public boolean delete(int key) {
        Slot slot = slots[lookup(key)];

        if (slot == null) {
            return false;
        }

        slot.setOccupied(false);
        used--;
        return true;
    }

    public void set(int key, int value) {
        int hash = hash(key);

        while (slots[hash] != null && slots[hash].isOccupied()) {
            hash = hash(hash + 1);
        }

        slots[hash] = new Slot(key, value, true);
        used++;
        resize();
    }

    public int getSize() {
        return size;
    }

    private void resize() {
        if (size - used == 1) {
            size *= 2;

            Stream<Slot> slotsToRestore = Arrays.stream(slots)
                    .filter(Objects::nonNull)
                    .filter(Slot::isOccupied);

            slots = new Slot[size];

            slotsToRestore
                    .forEach(slot -> set(slot.getKey(), slot.getValue()));
        }
    }

    private int lookup(int key) {
        int hash = hash(key);

        while (slots[hash] != null && (!slots[hash].isOccupied() || slots[hash].getKey() != key)) {
            hash = hash(hash + 1);
        }

        return hash;
    }

    private int hash(int key) {
        return Math.abs(key) % size;
    }
}
