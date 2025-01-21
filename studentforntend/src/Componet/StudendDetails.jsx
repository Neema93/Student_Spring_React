import { connect } from "react-redux";

const StudentDetails = (props) => {
  const students = props.student;
  console.log ("Props", props)
  const handleDelete = () => {

  }
  return (
    <>
      <h1>Student Details</h1>
      { students.length === 0 ? ( 
            <p>No student available</p>
        ) : (
      <table> 
        <tr>
          <td>FirstName</td>
          <td>LastName</td>
          <td>Age</td>
          <td>Grade</td>
          <td>Delete</td>
        </tr>
       
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.firstName}</td>
            <td>{student.lastName}</td>
            <td>{student.age}</td>
            <td>{student.grade}</td>
            <td><button onClick={handleDelete}>Delete</button></td>
          </tr> 
        ))}
      </table>
  )}
    </>
  );
};
const mapStateToProps = (state) => {
console.log(state)
  return {
    student:  state.student,
  };
};
export default connect(mapStateToProps)(StudentDetails);
