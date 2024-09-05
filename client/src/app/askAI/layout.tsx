import React from 'react';
import Sidebar from './SideComponent';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            {/* <Sidebar /> */}
            <div className='flex'>
                {children}
            </div>
        </div>
    );
};

export default Layout;