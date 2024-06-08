package tatar.railolog.task3;

import java.util.Set;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import tatar.railolog.task3.exception.InvalidStateException;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class DomainTest {
    @Nested
    class ArthurTest {
        @Test
        void checkNormalThenThrows() {
            Person arthur = new Person("Arthur");
            Throwable exception = assertThrows(InvalidStateException.class, arthur::dropJaw);
            assertEquals("Person isn't amazed", exception.getMessage());
        }

        @Test
        void checkUnbelievableThenOk() {
            Person arthur = new Person("Arthur");
            arthur.seeUnbelievable(arthur.getUnbelievableThingsThreshold() + 1);
            arthur.dropJaw();
            assertTrue(arthur.isJawDropped());
        }
    }

    @Nested
    class HeadTest {
        private Head head;

        @BeforeEach
        void setUp() {
            head = new Head();
        }

        @Test
        void checkSmile() {
            head.smile();
            assertTrue(head.isSmiling());
            assertTrue(head.isBusy());
        }

        @Test
        void busyThenSmileThenThrows() {
            head.setBusy(true);
            assertThrows(InvalidStateException.class, head::smile);
        }

        @Test
        void checkStopSmiling() {
            head.smile();
            head.stopSmiling();

            assertFalse(head.isSmiling());
            assertFalse(head.isBusy());
        }

        @Test
        void busyThenStopSmilingThenNothing() {
            head.setBusy(true);
            head.stopSmiling();

            assertTrue(head.isBusy());
        }
    }

    @Nested
    class PersonTest {
        private MultiHeadPerson person;

        @BeforeEach
        void setUp() {
            person = new MultiHeadPerson();
        }

        @Test
        void checkSmileAndPick() {
            person.pickRightHeadTeeth();
            person.smileWithLeftHead();

            assertTrue(person.getLeftHead().isBusy());
            assertTrue(person.getRightHead().isBusy());
            assertTrue(person.getLeftHead().isSmiling());
        }

        @Test
        void pickLeftHeadThenSmileLeftHeadThenThrows() {
            person.pickLeftHeadTeeth();
            assertThrows(InvalidStateException.class, person::smileWithLeftHead);
        }
    }

    @Nested
    class ChairTest {
        private Chair chair;
        private MultiHeadPerson person;
        private MultiHeadPerson extraPerson;

        @BeforeEach
        void setUp() {
            chair = new Chair();
            person = new MultiHeadPerson();
            extraPerson = new MultiHeadPerson();
        }

        @Test
        void checkOccupy() {
            assertFalse(chair.isTakenBy(person));
            chair.occupyWith(person);
            assertTrue(chair.isTakenBy(person));
        }

        @Test
        void checkRelease() {
            chair.occupyWith(person);
            chair.release();
            chair.occupyWith(extraPerson);
            assertTrue(chair.isTakenBy(extraPerson));
        }

        @Test
        void releaseEmptyThenThrows() {
            assertThrows(InvalidStateException.class, chair::release);
        }

        @Test
        void occupyTakenThenThrows() {
            chair.occupyWith(person);
            assertThrows(InvalidStateException.class, () -> chair.occupyWith(extraPerson));
        }
    }


    @Nested
    class RoomTest {
        private Person arthur;
        private MultiHeadPerson person;
        private MultiHeadPerson extraPerson;
        private Room room;

        @BeforeEach
        void setUp() {
            arthur = new Person("Arthur");
            person = new MultiHeadPerson();
            extraPerson = new MultiHeadPerson();
            room = new Room();

            room.enter(person);
            room.enter(arthur);
        }

        @Test
        @DisplayName("Entering the room and getting chair by person")
        void checkOk() {
            room.getChair().occupyWith(person);

            assertEquals(0, room.getRemainingSpace());
            assertTrue(Set.of(arthur, person).containsAll(room.getCreatures()));
            assertTrue(room.getChair().isTakenBy(person));
        }

        @Test
        void enterFullRoomThenThrows() {
            assertThrows(Exception.class, () -> room.enter(extraPerson));
        }

        @Test
        void checkLeaveRoom() {
            room.leaveRoom(person);
            assertEquals(1, room.getRemainingSpace());
            room.enter(person);
            assertEquals(0, room.getRemainingSpace());
        }

        @Test
        void leaveRoomBeingInCHairThenThrows() {
            room.getChair().occupyWith(arthur);
            assertThrows(InvalidStateException.class, () -> room.leaveRoom(arthur));
        }
    }
}
