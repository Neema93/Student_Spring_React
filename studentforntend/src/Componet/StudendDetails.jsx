import { connect } from "react-redux";
import { useEffect } from "react";
import { getStudent } from "../Action/student";

const StudentDetails = (props) => {
  
  const { student, getStudent } = props;
  const flattenedStudents = student.flat(Infinity);
 
  useEffect(() => {
    getStudent();
  }, [getStudent]);


  if (!student || student.length === 0) {
    return <p>No students available</p>;
  }
console.log(student)
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
          </tr>
        </thead>
        <tbody>
          {flattenedStudents.map((studentData) => (
            <tr key={studentData.studentId}>
              <td>{studentData.firstName}</td>
              <td>{studentData.lastName}</td>
              <td>{studentData.age}</td>
              <td>{studentData.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};


const mapStateToProps = (state) => {
  console.log("state",state);  
  return {
    student: state.student, 
  };
};
const mapDispatchToProps = {
  getStudent,
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentDetails);
