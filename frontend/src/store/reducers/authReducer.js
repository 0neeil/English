

const initialState = {
    isReg: false,
    isLogined: false,
    isErrors: [],
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_REG_STATUS":
        return { ...state, isReg: action.payload };
      case "SET_LOGIN_STATUS":
        return { ...state, isLogined: action.payload };
      case "SET_AUTH_ERRORS":
        return {...state, isErrors: action.payload}
      default:
        return state;
    }
  };
  
  export default authReducer;