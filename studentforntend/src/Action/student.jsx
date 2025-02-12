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
export const deleteStudent = (studentId) => async(dispatch) => {
    try{
        const response = await axios.delete(`${API_URL}/${studentId}`);

        dispatch({type: 'DELETE_STUDENT',payload: studentId});
        dispatch(getStudent());
    }catch (error) {
        console.error("Error delete student:", error);
      }
}
