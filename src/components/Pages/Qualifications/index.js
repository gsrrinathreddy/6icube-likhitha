import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, Course, Universityname, YearofPassing, Percentage) {
  return { name, Course, Universityname, YearofPassing, Percentage };
}

const rows = [
  createData('10th', 'ssc', 'raghavaVidyaNilayam', 2017, 9.5),
  createData('Inter', 'BoardofIntermediate', 'viswaJr.college', 2019, 8.28),
  createData('Degree', 'B.sc', 'KrishnaUniversity', 2022, 8.79),
  
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>AcademiQualifications</TableCell>
            <TableCell align="right">Course</TableCell>
            <TableCell align="right">Universityname</TableCell>
            <TableCell align="right">YearofPassing</TableCell>
            <TableCell align="right">Percentage</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.Course}</TableCell>
              <TableCell align="right">{row.Universityname}</TableCell>
              <TableCell align="right">{row.YearofPassing}</TableCell>
              <TableCell align="right">{row.Percentage}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}