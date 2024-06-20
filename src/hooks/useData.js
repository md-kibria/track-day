import { useMediaQuery, useTheme } from '@mui/material';

export default function useData(args) {
    
    // Responsive brackpoint
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down(args?.brkp || 'md'));

    // Sidebar(Drawer)
    const drawerWidth = 245;


    return {
        isSmallScreen,
        drawerWidth
    }
}