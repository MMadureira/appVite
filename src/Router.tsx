import { createContext, useState, ReactNode } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home';
import { Menu } from './pages/menu/menu';
import { Pag1 } from './pages/pag1/pag1';
import { Pag2 } from './pages/pag2/pag2';
import { Pag3 } from './pages/pag3/pag3';

type UserType = {
    name: string;
    email: string;
    avatar: string;
}

export const userContext = createContext({} as any);

export function RouterApp() {
    const [userValue, setUserValue] = useState<UserType>()

    return (
        <BrowserRouter>
            <userContext.Provider value={{ userValue, setUserValue }}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/menu' element={<Menu />} />
                    <Route path='/menu/pag1' element={<Pag1 />} />
                    <Route path='/menu/pag2' element={<Pag2 />} />
                    <Route path='/menu/pag3' element={<Pag3 />} />
                </Routes>
            </userContext.Provider>
        </BrowserRouter >
    );

}

