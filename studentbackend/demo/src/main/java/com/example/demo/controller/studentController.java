package com.example.demo.controller;



import com.example.demo.model.Student;
import com.example.demo.repo.StudentRepo;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;


@RestController
public class studentController {
  private StudentRepo studentRepo;

public studentController(StudentRepo studentRepo) {
    this.studentRepo = studentRepo;
}

@GetMapping("/hello")
public String sayHello() {
    return "Hello, World!";
}
@GetMapping("/student")
public List<Student> getAllStudent() {
    List<Student> students = studentRepo.findAll();
    if (students.isEmpty()) {
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No students found");
    }
    return students;
}

}