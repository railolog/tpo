package tatar.railolog;

import java.io.IOException;
import java.util.Scanner;
import java.util.concurrent.ThreadPoolExecutor;

import reactor.core.publisher.Mono;
import reactor.core.scheduler.Schedulers;

public class App {
    public static void main(String[] args) throws InterruptedException {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Starting: " + Thread.currentThread().getName());

        Mono.just("some string")
                .publishOn(Schedulers.single())
                .flatMap(
                        s -> {
                            try {
                                Thread.sleep(2000);
                            } catch (InterruptedException e) {
                                throw new RuntimeException(e);
                            }

                            return Mono.just(s + "1");
                        }
                )
                .subscribe(System.out::println);

        Mono.just("some string")
                .publishOn(Schedulers.single())
                .flatMap(
                        s -> {
                            System.out.println("I am using same thread");

                            return Mono.just(s + "2");
                        }
                )
                .subscribe(System.out::println);


        Thread.sleep(3000);
        System.out.println("I finished before reactor");
    }
}
