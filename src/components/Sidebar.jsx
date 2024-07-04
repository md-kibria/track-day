import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import { Hidden, Typography, useTheme } from '@mui/material';
import { BrowserUpdatedOutlined, Dashboard, FeedbackOutlined, HandymanOutlined, Info, InfoOutlined, SettingsOutlined, Splitscreen, SystemUpdateOutlined, TaskAlt } from '@mui/icons-material';
import useData from '../hooks/useData';
import { Link } from 'react-router-dom';
import { grey } from '@mui/material/colors';
import {Link as MuiLink} from "@mui/material";


export default function Sidebar({ open, toggleDrawer }) {

  const { isSmallScreen, drawerWidth } = useData()

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  }));

  return (

    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant={isSmallScreen ? 'temporary' : 'permanent'}
      anchor="left"
      open={open}
      onClose={toggleDrawer}

    >

      <Box sx={{ width: 240 }} onClick={toggleDrawer}>

        <DrawerHeader>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: 'block' }}
          >
            TrackDay!
          </Typography>
        </DrawerHeader>

        {/* <Divider /> */}
        <Typography sx={{ px: 2, pt: 4, textTransform: 'uppercase' }} color="gray" variant='subtitle2'>Navigations</Typography>
        <List>

          <Link to={'/'}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Dashboard />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>
          </Link>


          <Link to={'/manage'}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Splitscreen />
                </ListItemIcon>
                <ListItemText primary="Manage Quicks" />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link to={'/history'}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TaskAlt />
                </ListItemIcon>
                <ListItemText primary="Day History" />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link to={'/settings'}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SettingsOutlined />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>

          <Link to={'/guide'}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HandymanOutlined />
                </ListItemIcon>
                <ListItemText primary="How To Use" />
              </ListItemButton>
            </ListItem>
          </Link>
          
          <Link to={'/download'}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Hidden smUp>
                    <SystemUpdateOutlined />
                  </Hidden>
                  <Hidden smDown>
                    <BrowserUpdatedOutlined />
                  </Hidden>
                </ListItemIcon>
                <ListItemText primary="Download" />
              </ListItemButton>
            </ListItem>
          </Link>
          
          <Link to={'mailto:mdkibria.dev@gmail.com'}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <FeedbackOutlined />
                </ListItemIcon>
                <ListItemText primary="Feedback" />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link to={'/about'}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InfoOutlined />
                </ListItemIcon>
                <ListItemText primary="About" />
              </ListItemButton>
            </ListItem>
          </Link>

        </List>
        {/* <Divider /> */}
        <Box sx={{px: 1, py: 2}} color="gray">
          <Typography variant="caption">©2024 TrackDay - <MuiLink color="inherit" href="https://github.com/md-kibria" >@md-kibria</MuiLink></Typography>
        </Box>
      </Box>
    </Drawer>
  );
}