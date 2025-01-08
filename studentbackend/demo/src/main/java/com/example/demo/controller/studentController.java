package com.example.demo.controller;



import com.example.demo.model.Student;
import com.example.demo.repo.StudentRepo;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;




@RestController
@CrossOrigin(origins = "http://localhost:3000") 
public class studentController {
  private StudentRepo studentRepo;

public studentController(StudentRepo studentRepo) {
    this.studentRepo = studentRepo;
}

@GetMapping("/hello")
public String sayHello() {
    return "Hello, World!";
}
@GetMapping("/students")
public List<Student> getAllStudent() {
    List<Student> students = studentRepo.findAll();
    if (students.isEmpty()) {
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No students found");
    }
    return students;
}
@PostMapping("/students")
public Student createStudent(@RequestBody Student student) {
    return studentRepo.save(student);
}
@DeleteMapping("/students")
public void delStudent(){
     studentRepo.deleteAll();
}
}