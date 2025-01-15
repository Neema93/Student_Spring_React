import React, { useState, useEffect } from "react";
const StudentDetails = () => {
  const [student, setStudent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/students")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setStudent(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const handleDelete = () => {
    
  }
  return (
    <>
      <h1>Student Details</h1>
      <table>
        <tr>
          <td>FirstName</td>
          <td>LastName</td>
          <td>Age</td>
          <td>Grade</td>
          <td>Delete</td>
        </tr>
        {student.map((student) => (
          <tr key={student.id}>
            <td>{student.firstName}</td>
            <td>{student.lastName}</td>
            <td>{student.age}</td>
            <td>{student.grade}</td>
            <td><button onClick={handleDelete}>Delete</button></td>
          </tr> 
        ))}
      </table>
    </>
  );
};
export default StudentDetails;
