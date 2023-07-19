import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useContext } from 'react'
import { UserContext } from '../../App'

function Table2() {
    const {users2} = useContext(UserContext);
  return (
    <Container>
    <TableContainer component={Paper} sx={{marginY: 10}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" >
        <TableHead>
          <TableRow>

            <TableCell>Ism va familiya</TableCell>
            <TableCell align="right">Jinsi</TableCell>
            <TableCell align="right">Yoshi</TableCell>
            <TableCell align="right">Ish tajribasi</TableCell>
            <TableCell align="right">Ish boshlash sanasi</TableCell>
            <TableCell align="right">Obuna bölish</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {users2.map((user) => (
            <TableRow
              key={user.fullName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell >{user.fullName}</TableCell>
              <TableCell align="right">{user.gender}</TableCell>
              <TableCell align="right">{user.age}</TableCell>
              <TableCell align="right">{user.experience}</TableCell>
              <TableCell align="right">{user.date}</TableCell>
              <TableCell align="right">{user.subscribe? 'obuna bölgan': 'obuna bölmagan'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  )
}

export default Table2