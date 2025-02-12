import axios from "axios";
const API_URL = "http://localhost:8080/students";
export const getStudent = () => async(dispatch) => {
    try{
       const response = await axios.get(API_URL);
    
       dispatch({ type: "GET_STUDENT", payload: response.data });
    }
    catch(error){
        console.error("Error fetching student :", error);
    
    }
    
}
export const addStudent = (student) => async(dispatch) => {
    try{
        const response = await axios.post(API_URL,student);
        dispatch({ type: "ADD_STUDENT", payload: response.data });
        dispatch(getStudent());
    }catch (error) {
        console.error("Error add student:", error);
      }
}
export const deleteStudent = (studentId) => async (dispatch) => {
    try {
        console.log(`Student with ID ${studentId}`);
      // Send the DELETE request to the server with studentId
      const response = await axios.delete(`${API_URL}/${studentId}`);
      
      // Optionally, check the response to ensure the deletion was successful
      if (response.status === 200) {
        console.log(`Student with ID ${studentId} deleted successfully`);
      } else {
        console.error(`Failed to delete student with ID ${studentId}`);
      }
  
      // Dispatch action to update Redux state
      dispatch({
        type: 'DELETE_STUDENT',
        payload: studentId,
      });
  
      // Optionally, fetch the updated list of students after deletion
      dispatch(getStudent());
      
    } catch (error) {
      // Log the error if something goes wrong
      console.error("Error deleting student:", error);
    }
  };
