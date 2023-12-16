export const setRegStatus = (status) => ({
    type: "SET_REG_STATUS",
    payload: status,
});
  
export const setLoginStatus = (status) => ({
    type: "SET_LOGIN_STATUS",
    payload: status,
});

export const setAuthError = (status) => ({
    type : "SET_AUTH_ERRORS",
    payload: status
}) 