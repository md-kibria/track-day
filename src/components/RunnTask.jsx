import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import useTask from '../hooks/useTask';

import { useContext, useEffect, useState } from 'react';
import { DataContext } from './Layout';
import getTimeDifference from '../utils/time-format';

export default function RunnTask() {

    const d = useContext(DataContext);
    const ct = d?.data;

    const [task, setTask] = useState(ct);
    const [runTime, setRunTime] = useState('00:00:00');

    const { endTask } = useTask();

    useEffect(() => {
        setTask(ct || task)
        setRunTime('00:00:00')
    }, [ct])


    useEffect(() => {
        let intervalId = null;
        if (task.isRun) {
            intervalId = setInterval(() => {
                setRunTime(getTimeDifference(new Date(task.startAt), new Date()));
            }, 1000);
        }
        
        return () => {
            clearInterval(intervalId)
        }
    }, [task])

    const handleEndTask = () => {
        d.handleData({ isRun: false });
        endTask(task);
    }

    if (!task?.isRun) {
        return;
    }

    return (
        <Paper
            sx={{
                py: 0,
                px: 0,
                background: '#81c784',
                color: '#ffffff',
                display: 'flex'
            }}
            color='primary' variant="outlined"
            >
            <Box
                sx={{
                    py: 2,
                    px: 2,
                    display: 'flex'
                }}
                flexGrow={1}
            >
                <Box sx={{ pr: 1 }}>
                    <InfoOutlinedIcon fontSize="small" />
                </Box>

                <Box>
                    <Typography sx={{ my: 0.5, color: '#e8f5e9', m: 0 }} color="success" variant="body2">Running Tasks</Typography>
                    <Typography sx={{ my: 0.5, m: 0 }} color="success" variant="h6" component="p">{task.title}</Typography>
                </Box>
            </Box>

            <Box
                sx={{
                    // py: 1,
                    px: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Paper sx={{
                    height: 65,
                    width: 65,
                    borderRadius: '50%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid white',
                    background: 'transparent',
                    color: '#e8f5e9',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <Typography sx={{ fontSize: 12 }}>{runTime}</Typography>
                    <Button sx={{ fontSize: 10, p: 1, height: 10, minWidth: 15 }} variant="contained" color="error" onClick={handleEndTask}>Stop</Button>
                </Paper>
            </Box>
        </Paper>
    )
}