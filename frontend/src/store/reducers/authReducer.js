const initialState = {
    isReg: false,
    isLogined: false,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_REG_STATUS":
        return { ...state, isReg: action.payload };
      case "SET_LOGIN_STATUS":
        return { ...state, isLogined: action.payload };
      default:
        return state;
    }
  };
  
  export default authReducer;