import {BrowserRouter, Route, Routes, } from 'react-router-dom';
import Signup from '../pages/Authflow/Signup';

const Navigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/signup' element={<Signup/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation