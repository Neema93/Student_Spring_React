// src/components/StudentForm.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // To dispatch actions
import { addStudent, getStudent } from './../Action/student'; // Action to add student

const StudentForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [grade, setGrade] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch(); // Dispatch function to send actions

  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handleAgeChange = (e) => setAge(e.target.value);
  const handleGradeChange = (e) => setGrade(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!firstName || !lastName || !age || !grade) {
      setError('All fields are required');
      return;
    }

    // Clear error if the form is valid
    setError('');

    // Create the student object
    const student = { firstName, lastName, age: parseInt(age), grade };

    // Dispatch the action to add the student to Redux store
    dispatch(addStudent(student));
  
    // Clear form after successful submission
    setFirstName('');
    setLastName('');
    setAge('');
    setGrade('');
    alert('Student added successfully!');
   
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={handleFirstNameChange}
          required
        />
        <label>Last Name</label>
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={handleLastNameChange}
          required
        />
        <label>Age</label>
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={handleAgeChange}
          required
        />
        <label>Grade</label>
        <input
          type="text"
          placeholder="Grade"
          value={grade}
          onChange={handleGradeChange}
          required
        />
        <button type="submit">Submit</button>
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </form>
    </>
  );
};

export default StudentForm;
