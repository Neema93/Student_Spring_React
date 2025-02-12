const studentDefualtState =[];

export const student = (state= studentDefualtState, action) => {
    switch (action.type) {
        case "GET_STUDENT":
          return [action.payload];
          case "ADD_STUDENT":
            return [...state, action.payload]
        case "DELETE_STUDENT":
            return state.filter((student) => student.studentId !== action.payload);
    
    default:
        return state;
        
    }
    
}