import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import Balance from '../components/Balance'
import OperationList from '../components/OperationList'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <Grid container>
                <Grid item xs={10}>
                    <Typography sx={{ color: "magenta" }} >Home</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Button variant='contained' sx={{ mt: ".5rem" }} >
                        <Typography>
                            <Link to="/operations" style={{ textDecoration: 'none', color: "#eee" }} >
                                Add a new register
                            </Link>
                        </Typography>
                    </Button>
                </Grid>
            </Grid>

            <Grid container>
                <Grid item xs={6}>
                    <Balance />
                </Grid>
                <Grid item xs={6}>
                    <OperationList />
                </Grid>
            </Grid>



        </>
    )
}
