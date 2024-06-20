import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { Home } from '@mui/icons-material';
import { Link } from 'react-router-dom';


export default function Navbar({ toggleDrawer }) {

  return (
   
      <AppBar position="fixed" color='primary'>
        <Toolbar sx={{ display: 'flex', justifyContent: 'end' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, display: { xs: 'block', md: 'none' } }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            // sx={{ flexGrow: 1, display: { xs: 'block', md: 'none' } }}
            sx={{ flexGrow: 1 }}
          >
            TrackDay
          </Typography>

          <Link to="/">
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => { }}
              color="inherit"
            >
              <Home />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
  );
}