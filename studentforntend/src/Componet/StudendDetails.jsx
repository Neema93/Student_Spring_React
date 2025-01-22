import { connect } from "react-redux";
import { useEffect } from "react";
import { getStudent } from "../Action/student";

const StudentDetails = (props) => {
  
  const { student, getStudent } = props; // Destructure props for better readability
  const flattenedStudents = student.flat();
  // Fetch students when the component is mounted
  useEffect(() => {
    getStudent();
  }, [getStudent]);

  // Render based on whether data is available or not
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
            <tr key={studentData.firstName + studentData.lastName}>
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

// mapStateToProps to get student data from the Redux store
const mapStateToProps = (state) => {
  console.log("state",state);  // This will show the Redux state structure for debugging purposes
  return {
    student: state.student,  // Assuming the state structure has a `student` key
  };
};

// mapDispatchToProps to dispatch the action to fetch students
const mapDispatchToProps = {
  getStudent,
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentDetails);
