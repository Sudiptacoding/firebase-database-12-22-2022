import React, { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blog from '../Blog/Blog';
import Database from '../Database/Database';
import Document from '../Document/Document';
import Home from '../Home/Home';
import LogInPage from '../LogInPage/LogInPage';
import Navbar from '../Navbar/Navbar';
import PrivetRouter from '../PrivetRouter/PrivetRouter';

export const UserContext = createContext();
const Index = () => {    
    const [user , setUser] = useState(false);
    
    return (
        <UserContext.Provider value={[user , setUser]}>
            <BrowserRouter>
                <Navbar></Navbar>
                <Routes>
                    <Route path='/' element={<Home></Home>}></Route>
                    <Route path='/blog' element={<Blog></Blog>}></Route>
                    <Route path='/login' element={<LogInPage></LogInPage>}></Route>
                    <Route path='/database' element={<Database></Database>}></Route>
                    <Route path='/document' element={ <PrivetRouter user={user}><Document></Document></PrivetRouter> }></Route>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>

    );
};

export default Index;