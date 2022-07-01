import React, { useEffect, useState } from 'react'
import OperationForm from '../components/OperationForm'
import OperationList from '../components/OperationList'
import { Button, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { getAllOperations } from '../api/operations'


export default function Operations() {

    const [actualOperation, setActualOperation] = useState({
        concept: '',
        mount: '',
        date: '',
        type: '',
        categorie: ''
    })

    const [operation, setOperation] = useState([])

    useEffect(() => {
        const getOperation = async () => {
            const op = await getAllOperations()
            setOperation(op)
        }
        getOperation()
    }
        , [])

    return (
        <>

            <Grid container>
                <Grid item xs={10}>
                    <Typography style={{ color: "blueviolet" }} >Operation</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Button variant='contained' sx={{ mt: ".5rem" }} >
                        <Typography>
                            <Link to="/" style={{ textDecoration: 'none', color: "#eee" }} >
                                See balance
                            </Link>

                        </Typography>
                    </Button>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={6}>
                    <OperationForm actualOperation={actualOperation} setActualOperation={setActualOperation} />
                </Grid>
                <Grid item xs={6}>
                    <OperationList operation={operation} setOperation={setOperation} />

                </Grid>
            </Grid>
        </>

    )
}
