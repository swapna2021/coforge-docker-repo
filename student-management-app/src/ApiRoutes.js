import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { StudentList } from "./components/StudentList";
import { StudentDetails } from "./components/StudentDetails";
import { AddStudent } from "./components/AddStudent";

export function ApiRoutes(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/students" element={<StudentList/>}></Route>
            <Route path="/students/:id" element={<StudentDetails/>}></Route>
            <Route path="/add" element={<AddStudent/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}