import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "./auth/LoginPage";
import { RegisterPage } from "./auth/RegisterPage";


export const App = () => {


  return ( 



    <Routes>

      
            <Route path="/register" element={<RegisterPage/> } /> 
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/*" element={< Navigate to='/login'/>} />
                 
                

        
        
        

    </Routes>

  )
}