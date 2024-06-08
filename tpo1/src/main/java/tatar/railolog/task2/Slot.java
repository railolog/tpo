package tatar.railolog.task2;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class Slot {
    private int key;
    private int value;
    private boolean occupied;
}
