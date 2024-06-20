import { Box, Typography } from "@mui/material";
import PageTitle from "../components/PageTitle";

export default function Guide() {
    return (
        <>
      <PageTitle title="How To Use" />
        <Box my={2}>
            <Typography my={2} variant="subtitle1" ><strong>1. Dashboard:</strong> Start a Quick Start task or enter your new task name and click "START" to start a new task. Click the red stop button on the running task banner on top of the dashboard to end a task. You will see all the task details for the present day on the dashboard. </Typography>
            <Typography my={2} variant="subtitle1" ><strong>2. Manage Quicks:</strong> Add a new tag with color (optional) or select a previously used task to add a new quick start task for the dashboard.</Typography>
            <Typography my={2} variant="subtitle1" ><strong>3. Day History:</strong> You will see all the history on this page.</Typography>
        </Box>
        </>
    )
}