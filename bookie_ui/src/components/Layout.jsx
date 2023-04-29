import React from 'react';
import Navbar from './Navbar';
import Footer from "./Footer"
import CssBaseline from '@material-ui/core/CssBaseline';


function Layout(props) {
    return (
        <React.Fragment>
            <CssBaseline />
            <Navbar {...props} />
            <div>
                {props.children}
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Layout