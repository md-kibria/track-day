import { Box, Typography } from "@mui/material";
import PageTitle from "../components/PageTitle";

export default function Settings() {
    return (
        <>
      <PageTitle title="Settings" />
        <Box maxWidth={500} mx={'auto'} my={10}>
            <Typography variant="h3" py={1} align="center">⚠️</Typography>
            <Typography variant="h4" py={1} align="center">Constructing!</Typography>
            <Typography variant="subtitle1" align="center">Sorry, we are still working on this page. Until we finish our work, you will not be able to change settings from this page.</Typography>
        </Box> 
        </>
    )
}