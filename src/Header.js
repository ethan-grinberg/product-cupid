import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

class Header extends React.Component {
    render() {
        return (
              <AppBar position="static" style={{ background: '#303030' }}>      
                <Toolbar>
                    <Box
                        component="img"
                        sx={{objectFit: "contain", height: "65px", padding: ".4em 0 0 0"}}
                        alt="Product Cupid Logo"
                        src="logo512.png"
                    />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Find The Products You Love
                    </Typography>
                    <Button href="https://sites.google.com/illinois.edu/productcupid/home" color="inherit" size="large">
                        About
                    </Button>
                </Toolbar>
              </AppBar>
          );
    }
}

export default Header;
