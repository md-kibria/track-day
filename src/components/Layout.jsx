import Navbar from './Navbar'
import { Box, Button, Grid } from '@mui/material';
import Sidebar from './Sidebar';
import { useEffect, useState } from 'react';
import { createContext } from 'react';
import useTask from '../hooks/useTask';
import Snackbar from './Snackbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';

export const DataContext = createContext({});

export default function Layout({ children }) {
	const { runningTask } = useTask()

	const [data, setData] = useState(runningTask);
	const [topen, setTopen] = useState(false);
	const [open, setOpen] = useState(false);
	const [msg, setMsg] = useState('');

	const theme = createTheme({
		zIndex: {
		  appBar: 1251,
		  drawer: 1200,
		}
	  });

	const handleClick = (msg, type) => {
		let m = msg

		if (type === 'w') {
			m = `⚠ ${msg}`;
		} else if (type === 'c') {
			m = `✔ ${msg}`;
		}

		setMsg(m);
		setTopen(true);
	};

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setTopen(false);
		setMsg('');
	};

	const handleData = (data) => {
		setData(data)
	}

	
	const toggleDrawer = () => {
		setOpen(!open);
	};


	useEffect(() => {
		setData(runningTask)
	}, []);


	return (
		<ThemeProvider theme={theme}>
		<DataContext.Provider value={{ data, handleData, handleClick }}>
			<Box sx={{ flexGrow: 1 }}>
				<Navbar toggleDrawer={toggleDrawer} />
				<Box sx={{ display: 'flex' }}>
					<Sidebar open={open} toggleDrawer={toggleDrawer} />
					<Box sx={{ flexGrow: 1 }}>
						{/* <Navbar toggleDrawer={toggleDrawer} /> */}
						<Box sx={{ p: 2 }}>
							<Grid container spacing={2} sx={{mt: 5}}>
								<Grid item lg={9} xs={12}>
									<Outlet />
								</Grid>
								<Grid item lg={3} xs={12}>
									{/* Right Sidebar */}
								</Grid>
							</Grid>
						</Box>
					</Box>
				</Box>
			</Box>
			<Snackbar open={topen} handleClose={handleClose} msg={msg} />
		</DataContext.Provider>
		</ThemeProvider>
	);
}
