package tatar.railolog.task3;

import lombok.Getter;

@Getter
public class MultiHeadPerson implements Creature {
    private final Head leftHead;
    private final Head rightHead;

    public MultiHeadPerson() {
        leftHead = new Head();
        rightHead = new Head();
    }

    public void pickRightHeadTeeth() {
        rightHead.setBusy(true);
    }

    public void pickLeftHeadTeeth() {
        leftHead.setBusy(true);
    }

    public void smileWithLeftHead() {
        leftHead.smile();
    }
}
