import { connect } from "react-redux";
import { useEffect } from "react";
import { deleteStudent, getStudent } from "../Action/student";

const StudentDetails = (props) => {
  
  const { student, getStudent, deleteStudent } = props;
  const flattenedStudents = student.flat(Infinity);
 
  useEffect(() => {
    getStudent();
  }, [getStudent]);

  const handleDelete = (studentId) => {
   
    // Call the deleteStudent action to remove the student from the store
    deleteStudent(studentId);
    console.log(studentId)
  };

  if (!student || student.length === 0) {
    return <p>No students available</p>;
  }

  return (
    <>
      <h1>Student Details</h1>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Grade</th>
            <th>Actions</th> 
          </tr>
        </thead>
        <tbody>
          {flattenedStudents.map((studentData) => (
            <tr key={studentData.studentId}>
              <td>{studentData.firstName}</td>
              <td>{studentData.lastName}</td>
              <td>{studentData.age}</td>
              <td>{studentData.grade}</td>
              <td>
                <button onClick={() => handleDelete(studentData.studentId)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};


const mapStateToProps = (state) => {
  return {
    student: state.student, 
  };
};
const mapDispatchToProps = {
  getStudent,deleteStudent
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentDetails);
