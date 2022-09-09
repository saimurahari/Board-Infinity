import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Albums from './Albums';

function Sapp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/albums" element={<Albums/>}/>
            </Routes>
        </BrowserRouter>
    );
}
export default Sapp;