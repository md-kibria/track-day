import {useState} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import useTask from '../hooks/useTask';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../components/PageTitle';


const columns = [
  // { id: 'id', label: 'Id', minWidth: 100 },
  { id: 'date', label: 'Date', minWidth: 100 },
  { id: 'tasks', label: 'Tasks', minWidth: 100, align: 'center' },
];

function createData(id, date, tasks) {
  return { id, date, tasks};
}

const rows = [];

export default function History() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const {days} = useTask();
  const navigate = useNavigate()

    days.reverse();
    if(rows.length === 0) {
        days.forEach(d => {
            rows.push(createData(d.id, format(d.date, 'dd MMM yyyy'), d.tasks.length))
        });
    }


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function nagigate(id) {
    navigate(`/history/${id}`)
  }

  return (
  <>
    <PageTitle title="History" />
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow role="checkbox" tabIndex={-1} key={row.id} onClick={() => nagigate(row.id)} hover sx={{ '&:hover': { cursor: 'pointer' } }}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        />
    </Paper>
    </>
  );
}