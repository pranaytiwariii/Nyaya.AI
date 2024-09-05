import React from 'react';
import Sidebar from './sidebar';
import Chatspace from './chatspace';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            {/* <Sidebar /> */}
            <div className='flex'>
                {children}
                <Chatspace />
            </div>
        </div>
    );
};

export default Layout;