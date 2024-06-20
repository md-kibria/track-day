import PageTitle from "../components/PageTitle";
import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import { Computer, PhoneAndroid, PhoneIphone } from "@mui/icons-material";
import BrowserData from "../components/BrowserData";

const chrome = [
  { label: 'Visit the TrackDay website' },
  { label: 'Click on the "install" button on the search bar or Click the three vertical dots (menu) in the top right corner.' },
  { label: 'Select "Install app" (or similar wording).' },
  { label: 'An icon for the PWA will be added to your desktop or taskbar (depending on your settings).' },
];

const firefox = [
  { label: 'Visit the TrackDay website' },
  { label: 'Click the three horizontal lines (menu) in the top right corner.' },
  { label: 'Click the star icon (bookmark) next to the address bar.' },
  { label: 'Right-click the bookmark and choose "Manage Bookmark"' },
  { label: 'In the "Edit Bookmark" window, check the "Show in Toolbar" option for taskbar access.' },
];

const edge = [
    { label: 'Visit the TrackDay website' },
    { label: 'Click the three horizontal dots (menu) in the top right corner' },
    { label: 'Click "Install this site as an app."' },
    { label: 'An icon for the PWA will be added to your desktop or Start menu.' },
  ];

const chrome_andro = [
    { label: 'Visit the TrackDay website' },
    { label: 'Look for an install prompt at the bottom (might not appear for all PWAs). Tap it if available.' },
    { label: 'If no prompt, navigate to the website menu (usually three vertical dots) and look for options like "Install app," "Add to Home screen," or similar.' },
  ];

const firefox_andro = [
    { label: 'As of June 2024, Firefox for Android doesn\'t offer native PWA installation functionality. However, you can create a bookmark to the PWA website for easier access.' },
  ];

const other_andro = [
    {label: 'Functionality might vary depending on the browser. Some might offer options for adding shortcuts or "installing" PWAs, while others might not.'}
]

const safari_ip = [
    {label: 'Safari on iOS currently doesn\'t offer native PWA installation functionalities like adding them to the home screen. You can add the website as a bookmark to your home screen for quicker access.'}
]

const other_ip = [
    {label: 'Third-party browsers on iOS might have limited PWA support, but it\'s not a standard feature. Be cautious with third-party apps claiming PWA installation as they might not be secure or reliable.'}
]

const FireNav = styled(List)({
  '& .MuiListItemButton-root': {
    paddingLeft: 24,
    paddingRight: 24,
  },
  '& .MuiListItemIcon-root': {
    minWidth: 0,
    marginRight: 16,
  },
  '& .MuiSvgIcon-root': {
    fontSize: 20,
  },
});
export default function Download() {
    const [open, setOpen] = React.useState(true);
    return (
        <>
      <PageTitle title="Downloads" />
        <Box sx={{ display: 'flex', boxShadow: 2 }}>
            <Paper elevation={0} sx={{ width: '100%' }}>
            <FireNav component="nav" disablePadding>
                <ListItemButton>
                <ListItemIcon sx={{ fontSize: 20 }}><Computer/></ListItemIcon>
                <ListItemText
                    sx={{ my: 0 }}
                    primary="Computer"
                    primaryTypographyProps={{
                    fontSize: 20,
                    fontWeight: 'medium',
                    letterSpacing: 0,
                    }}
                />
                </ListItemButton>
            
                <Divider />
                
                <BrowserData title="Chrome" data={chrome} />
                <BrowserData title="FireFox" data={firefox} />
                <BrowserData title="Edge" data={edge} />

            </FireNav>
            </Paper>
        </Box>

        <Box sx={{ display: 'flex', boxShadow: 2, mt: 5 }}>
            <Paper elevation={0} sx={{ width: '100%' }}>
            <FireNav component="nav" disablePadding>
                <ListItemButton>
                <ListItemIcon sx={{ fontSize: 20 }}><PhoneAndroid/></ListItemIcon>
                <ListItemText
                    sx={{ my: 0 }}
                    primary="Android Phone"
                    primaryTypographyProps={{
                    fontSize: 20,
                    fontWeight: 'medium',
                    letterSpacing: 0,
                    }}
                />
                </ListItemButton>
            
                <Divider />
                
                <BrowserData title="Chrome" data={chrome_andro} />
                <BrowserData title="FireFox" data={firefox_andro} />
                <BrowserData title="Other" data={other_andro} />

            </FireNav>
            </Paper>
        </Box>
        
        
        
        <Box sx={{ display: 'flex', boxShadow: 2, mt: 5 }}>
            <Paper elevation={0} sx={{ width: '100%' }}>
            <FireNav component="nav" disablePadding>
                <ListItemButton>
                <ListItemIcon sx={{ fontSize: 20 }}><PhoneIphone/></ListItemIcon>
                <ListItemText
                    sx={{ my: 0 }}
                    primary="IPhone"
                    primaryTypographyProps={{
                    fontSize: 20,
                    fontWeight: 'medium',
                    letterSpacing: 0,
                    }}
                />
                </ListItemButton>
            
                <Divider />
                
                <BrowserData title="Safari" data={safari_ip} />
                <BrowserData title="Other" data={other_ip} />

            </FireNav>
            </Paper>
        </Box>
        </>
    )
}