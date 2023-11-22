import { Route, Routes } from "react-router-dom";
import Textbox from "./textBox";
import Myrender from "./myComponent";

const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<Textbox />}></Route>
      <Route path="/getData" element={<Myrender />}></Route>
       </Routes>
       )
       
      }

export default AppRoutes;
