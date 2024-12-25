package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.student;

public interface studentRepo extends JpaRepository <student,Long> {

}
