package com.example.demo.student;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import java.time.LocalDate;
import java.util.List;
import static java.time.Month.JANUARY;

@Configuration
public class StudentConfig {
    @Bean
    CommandLineRunner commandLineRunner(StudentRepository repository) {
        return args -> {
            if (repository.count() == 0) {
                Student timmy = new Student ( "Tim Duncan", "timmy@gmail.com", LocalDate.of(2000, JANUARY, 2));
                Student jordan = new Student (  "Michael Jordan", "jordan@gmail.com", LocalDate.of(1999, JANUARY, 2));
                Student abc = new Student (  "abc", "abc@gmail.com", LocalDate.of(1999, JANUARY, 2));
                repository.saveAll(List.of(timmy, jordan, abc));
                System.out.println("3 sample students inserted in DB because DB was empty");
            } else {
                System.out.println("DB has stuff, so we're not gonna add sample data");
            }
        };
    }
}
