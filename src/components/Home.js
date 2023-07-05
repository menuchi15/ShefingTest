import React from 'react';
import axios from 'axios'
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function Home() {

    const navigate = useNavigate()
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then((d) => {
            setData(d.data)
        })
    }, [])

    return (
        <Grid display="flex" flexDirection="column" alignItems="center" sx={{ mx: "50px", my: "15px" }}>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1, my: "16px" }}>
                <b>Users</b>
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }}>
                    <caption>
                        {data.length} users exists now
                    </caption>
                    <TableHead >
                        <TableRow>
                            <TableCell sx={{ fontSize: "medium", fontWeight: "bold" }}>
                                Name
                                <Button variant="text" fullWidth onClick={() => setData([...data].sort((a, b) => a.name.localeCompare(b.name)))} >
                                    <ExpandMoreIcon />
                                </Button>
                            </TableCell>
                            <TableCell sx={{ fontSize: "medium", fontWeight: "bold" }}>
                                Email
                                <Button fullWidth onClick={() => setData([...data].sort((a, b) => a.email.localeCompare(b.email)))}>
                                    <ExpandMoreIcon />
                                </Button>
                            </TableCell>
                            <TableCell sx={{ textAlign: "top", fontSize: "medium", fontWeight: "bold" }}>
                                <b>Company name</b>
                                <div style={{ height: "5vh" }}></div></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((u, index) =>
                            <TableRow hover onClick={() => navigate(`/posts/${u.id}`)}
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">{u.name}</TableCell>
                                <TableCell>{u.email}</TableCell>
                                <TableCell>{u.company.name}</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    );
}