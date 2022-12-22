import React, { useContext } from 'react';
import { UserContext } from '../Routing/Index';

const Blog = () => {
    const [user] = useContext(UserContext);
    console.log(user)
    return (


        <div className='Blog'>
           <h1>i am blog</h1>
        </div>
    );
};

export default Blog;