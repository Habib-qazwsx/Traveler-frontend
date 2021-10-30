import React from 'react';

const Layout = ({children}) => {
    return (
        <div style={{minHeight:"1200px"}}>
            {children}
        </div>
    );
};

export default Layout;