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
              Student timmy = new Student ( "Tim Duncan", "timmy@gmail.com", LocalDate.of(2000, JANUARY, 2));
              Student jordan = new Student (  "Michael Jordan", "jordan@gmail.com", LocalDate.of(1999, JANUARY, 2));
              repository.saveAll(List.of(timmy, jordan));
        };
    }
}
