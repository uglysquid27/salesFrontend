const getToken = () => {
    return localStorage.getItem("token");
  }
  
  const removeLogged = () => {
    localStorage.removeItem("token");
    
  }
  
  const userLogged = () => {
    const token = getToken();
    const user = localStorage.getItem("user");
    const level = localStorage.getItem("level");
    return { token, user: JSON.parse(user), level}
  }

  export { getToken, removeLogged, userLogged };