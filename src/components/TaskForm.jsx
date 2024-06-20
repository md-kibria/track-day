import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import useData from "../hooks/useData";
import { useState } from "react";
import useTask from "../hooks/useTask";

export default function TaskForm() {
    const {isSmallScreen} = useData({brkp: 'sm'});
    const {addTask} = useTask();

    const [data, setData] = useState('');
    const handleData = (e) => {
        setData(e.target.value)
    }
    const handleSubmit = () => {
        addTask(data, null);
        setData('')
    }


    return (
        <Box sx={{ display: 'flex', my: 3 }}>
            <FormControl fullWidth sx={{ mr: 1 }} variant="filled">
                <TextField autoComplete="off" label="Custom Task" variant="outlined" value={data} onChange={handleData} />
            </FormControl>

            <Button variant="contained" sx={{ minWidth: 'fit-content', px: 3 }} onClick={handleSubmit}>
                {!isSmallScreen ? (
                    <Typography>Start New</Typography>
                ) : (
                    <Typography>Start</Typography>
                )}
            </Button>
        </Box>
    )
}