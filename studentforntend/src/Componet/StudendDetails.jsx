import React, { useState, useEffect } from "react";
const StudentDetails = () => {
    const [student, setStudent] = useState([]);
    const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect( () => {
fetch('http://localhost:8080/students')
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

    return (
        <>
         <h1>Student Details</h1>
         <pre>{JSON.stringify(student, null, 2)}</pre>
         
        </>
    )
}
export default StudentDetails;