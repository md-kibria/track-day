import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import useData from "../hooks/useData";
import { useState } from "react";

export default function TaskForm({ handleAddTag }) {
    const [title, setTitle] = useState('');
    const [color, setColor] = useState('');
    const { isSmallScreen } = useData({ brkp: 'sm' });

    const handletitle = (e) => {
        setTitle(e.target.value)
    }

    const handleSubmit = () => {
        if (title) {
    
            handleAddTag(title, color);

            setTitle('');
            setColor('');
        }
    }


    const handleChangeColor = (event) => {
        setColor(event.target.value);
    };

    return (
        <Box sx={{ display: 'flex', my: 3, gap: 1 }}>
            <FormControl fullWidth variant="filled">
                <TextField
                    autoComplete="off"
                    label="Add A Quick Task"
                    variant="outlined"
                    value={title}
                    onChange={handletitle}
                />
            </FormControl>

            <FormControl sx={{ width: 150 }}>
                <InputLabel id="demo-simple-select-label">Color</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={color}
                    label="Age"
                    onChange={handleChangeColor}
                >
                    <MenuItem value="primary">Blue</MenuItem>
                    <MenuItem value="success">Green</MenuItem>
                    <MenuItem value="error">Red</MenuItem>
                </Select>
            </FormControl>

            <Button variant="contained" sx={{ minWidth: 'fit-content', px: 3 }} onClick={handleSubmit}>
                {!isSmallScreen ? (
                    <Typography>Add Tag</Typography>
                ) : (
                    <Typography>Add</Typography>
                )}
            </Button>
        </Box>
    )
}