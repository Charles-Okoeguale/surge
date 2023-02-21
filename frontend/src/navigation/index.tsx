import {BrowserRouter, Route, Routes, } from 'react-router-dom';
import Login from '../pages/Authflow/Login';
import Setup from '../pages/Authflow/Setup';
import Signup from '../pages/Authflow/Signup';
import Selectartiste from '../pages/Authflow/Setup/Selectartiste';
import Selectgenre from '../pages/Authflow/Setup/Selectgenre';

const Navigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/signup' element={<Signup/>}/>
                <Route index element={<Signup/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/setup' element={<Setup/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation