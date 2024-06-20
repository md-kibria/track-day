import { Typography } from "@mui/material";

export default function PageTitle({title}) {
    return(
        <Typography variant="h4" my={2} color="#333">{title}</Typography>
    )
}