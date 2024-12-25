package com.example.demo.model;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class student {
     @Id
    @GeneratedValue
    private String studentId;
    private String firstName;
    private String lastName;
    private int age;
    private double grade;
}
