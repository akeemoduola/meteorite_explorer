import React, { Component } from 'react';
import { AppBar, Toolbar, Typography }  from '@material-ui/core';

class Header extends Component {
    render() {
        return (
            <div>
                <AppBar position="static" style={{ background: '#3748AC', alignItems: 'center' }}>
                    <Toolbar>
                        <Typography variant="h3">
                            Meteorite Explorer
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default Header;