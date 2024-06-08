package tatar.railolog.task3.exception;

public class InvalidStateException extends RuntimeException{
    public InvalidStateException() {
        super();
    }

    public InvalidStateException(String message) {
        super(message);
    }
}
