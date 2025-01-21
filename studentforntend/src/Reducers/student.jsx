const studentDefualtState =[];

export const student = (state= studentDefualtState, action) => {
    switch (action.type) {
        case "GET_EXPENSES":
          return [action.payload];
    
    default:
        return state;
    }
}