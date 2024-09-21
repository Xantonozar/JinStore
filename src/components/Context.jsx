import { createContext, useContext } from "react";
import { useEffect, useState } from "react";
const context = createContext();
const Context = ({children}) => {
    const [userExist, setuserExist] = useState(true)
  return (
    <context.Provider value={{  userExist , setuserExist}}>
    {children}
</context.Provider>
  )
}
export const userState = () => {
    return useContext(context);
}


export default Context