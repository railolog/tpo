package tatar.railolog.task2;

import java.util.List;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class HashTableTest {
    @Test
    void checkSimple() {
        HashTable table = new HashTable(2);

        table.set(0, 2);
        table.set(1, 3);

        assertIterableEquals(
                List.of(3, 2),
                List.of(table.find(1), table.find(0))
        );
    }

    @Test
    void checkKeysGreaterThanSize() {
        HashTable table = new HashTable(2);

        table.set(40, 2);
        table.set(17, 3);

        assertIterableEquals(
                List.of(2, 3),
                List.of(table.find(40), table.find(17))
        );
    }

    @Test
    void checkResize() {
        HashTable table = new HashTable(2);

        table.set(0, 2);
        table.set(1, 3);
        table.set(2, 3);

        assertTrue(table.getSize() >= 3);
        assertIterableEquals(
                List.of(3, 2, 3),
                List.of(table.find(1), table.find(0), table.find(2))
        );
    }

    @Test
    void checkFullFlowWithRepeatedKeys() {
        HashTable table = new HashTable(2);

        table.set(0, 2);
        table.set(1, 3);
        table.set(1, 5);

        assertEquals(3, table.find(1));
        table.delete(1);
        assertEquals(5, table.find(1));

        assertNull(table.find(3));
        assertFalse(table.delete(3));
        assertTrue(table.delete(1));
    }
}
