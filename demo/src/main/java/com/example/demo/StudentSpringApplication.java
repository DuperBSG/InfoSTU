package com.example.demo;

import com.example.demo.student.Student;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@SpringBootApplication
@RestController
public class StudentSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(StudentSpringApplication.class, args);
	}

	@GetMapping
	public List<Student> hello() {
		return List.of(new Student(1L, "Tim Duncan", "timmy@gmail.com", LocalDate.of(2020, Month.FEBRUARY, 5), 21));
	}

}
