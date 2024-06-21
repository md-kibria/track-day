import { Box, Grid, Paper, Typography } from "@mui/material";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import useTask from "../hooks/useTask";
import HomePi from "../components/HomePi";
import HomeBar from "../components/HomeBar";
import formatSecondsToHHMMSS from "../utils/second-to-time";
import { format } from "date-fns";
import { useParams } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import toCapitalize from "../utils/toCapitalize";


function createData(name, time) {
  return { name, time };
}



export default function HistoryItem({params}) {
  const {id} = useParams()

  const { addTask, getDay } = useTask();

  const today = getDay(id)

  const rows = [];
 

  const taskData = []

  today.tasks.forEach(task => {
    let isBel = false;

    taskData.forEach(d => {
      if(d.title.toLowerCase() === task.title.toLowerCase()) {
        isBel = true;
      }
    })

    if(!isBel) {
      const newd = {title: task.title, time: 0}
      today.tasks.forEach(t => {
        if(task.title.toLowerCase() === t.title.toLowerCase()) {
          newd.time = newd.time + t.time
        }
      })
      taskData.push(newd);
    }
    
  })

  let total = 0;
  const max = 86400;
  taskData.forEach(t => {
    total += t.time;
  })

  const piData = [...taskData];
  taskData.push({title: 'Uncount', time: max-total})

  taskData.forEach(task => {
    rows.push(createData(task.title, task.time),)
  });

  const handleAddTask = (title, color) => {
    addTask(title, color);
  }

  return (
    <>

      
      <PageTitle title={`Date: ${format(today.date, "dd MMM yyyy")}`} />

      <Box elevation={3} sx={{my: 2, height: 300 }}>
        <HomeBar day={today} />
      </Box>


      <Box sx={{ my: 3 }}>
        <Typography sx={{ my: 0.5 }} color="black">Summery Of Time</Typography>

        <Grid container spacing={2}>
          <Grid item sm={6} xs={12}>
            <TableContainer component={Paper}>
              <Table sx={{}} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Tasks</TableCell>
                    <TableCell align="right">Time</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {toCapitalize(row.name)}
                      </TableCell>
                      <TableCell align="right">{formatSecondsToHHMMSS(row.time, true)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item sm={6} xs={12} sx={{minHeight: 200}}>
            <HomePi data={piData} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}