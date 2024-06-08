package tatar.railolog.task3;

import com.sun.jdi.request.InvalidRequestStateException;
import lombok.Getter;
import tatar.railolog.task3.exception.InvalidStateException;

@Getter
public class Person implements Creature {
    private EmotionState emotionState;
    private boolean jawDropped;
    private static final int UNBELIEVABLE_THINGS_THRESHOLD = 5;

    private String name;

    public Person(String name) {
        this.name = name;
        emotionState = EmotionState.NORMAL;
    }

    public void seeUnbelievable(int amount) {
        if (amount > UNBELIEVABLE_THINGS_THRESHOLD) {
            emotionState = EmotionState.AMAZED;
        } else {
            emotionState = EmotionState.NORMAL;
        }
    }

    public void dropJaw() {
        if (emotionState == EmotionState.AMAZED) {
            jawDropped = true;
        } else {
            throw new InvalidStateException("Person isn't amazed");
        }
    }

    public int getUnbelievableThingsThreshold() {
        return UNBELIEVABLE_THINGS_THRESHOLD;
    }
}
