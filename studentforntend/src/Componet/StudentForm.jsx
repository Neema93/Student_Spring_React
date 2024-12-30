import React, { useState } from "react";
const StudentForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [grade, setGrade] = useState('');
    const [error, setError] = useState('');

  // Handle form input changes
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  }
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };
  const handleGradeChange = (e) => {
    setGrade(e.target.value);
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!firstName || !lastName || !age || !grade) {
      setError('all fields are required');
      return;
    }

    // Clear error if the form is valid
    setError('');

    // Create the student object
    const student = { firstName, lastName, age: parseInt(age), grade };

    // Post the data to the backend (Spring Boot API or another API)
    try {
      const response = await fetch('http://localhost:8080/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(student),
      });

      if (!response.ok) {
        throw new Error('Failed to add student');
      }

      // Clear form after successful submission
      setFirstName('');
      setLastName('');
      setAge('');
      setGrade('');
      alert('Student added successfully!');
    } catch (error) {
      console.error(error);
      setError('Error adding student');
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input type="text" placeholder="First Name" onChange={handleFirstNameChange} required/>
        <label>Last Name</label>
        <input type="text" placeholder="Last Name" onChange={handleLastNameChange} required/>
        <label>Age</label>
        <input type="text" placeholder="Age" onChange={handleAgeChange} required />
        <label>Grade</label>
        <input type="text" placeholder="Grade" onChange={handleGradeChange} required />
        <button type="submit">Submit</button>
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </form>
    </>
  );
};
export default StudentForm;