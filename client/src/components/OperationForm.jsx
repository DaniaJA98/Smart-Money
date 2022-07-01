import { Button, Stack, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { MenuItem } from '@mui/material'
import { createOperation } from '../api/operations'



const types = [
    {
        value: "Entry",
        label: "Entry"
    },
    {
        value: "Egres",
        label: "Egress"
    }
]
const categories = [
    {
        value: "Various expenses",
        label: "Various expenses"
    },
    {
        value: "Health",
        label: "Health"
    },
    {
        value: "Beauty",
        label: "Beauty"
    },
    {
        value: "Transport",
        label: "Transport"
    },
    {
        value: "Food",
        label: "Food"
    }
]

export default function OperationForm({ actualOperation, setActualOperation }) {

    const inputChange = (e) => {
        setActualOperation({ ...actualOperation, [e.target.name]: e.target.value })
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        const created = await createOperation(actualOperation)

        console.log(created);
    }

    return (
        <>
            <h2> Form</h2>
            <form onSubmit={handleSubmit}>
                <Stack spacing={2}>
                    <TextField
                        name='concept'
                        variant='outlined'
                        label='Concept'
                        value={actualOperation.concept}
                        onChange={inputChange}
                        sx={{ width: 300 }}

                    >
                    </TextField>

                    <TextField
                        name='amount'
                        variant='outlined'
                        label='Amount'
                        type='number'
                        value={actualOperation.amount}
                        onChange={inputChange}
                        sx={{ width: 300 }}
                    >
                    </TextField>

                    <TextField
                        name='date'
                        id="date"
                        label="Date"
                        type="date"
                        defaultValue={actualOperation.date}
                        onChange={inputChange}
                        sx={{ width: 300 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <TextField
                        name='type'
                        variant='outlined'
                        label='Type'
                        select
                        value={actualOperation.type}
                        onChange={inputChange}
                        sx={{ width: 300 }}
                    >
                        {types.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>

                    <TextField
                        name='categorie'
                        variant='outlined'
                        label='Categorie'
                        select
                        value={actualOperation.categorie}
                        onChange={inputChange}
                        sx={{ width: 300 }}
                    >
                        {categories.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <Button variant='contained' sx={{ width: 300 }} type='submit'>
                        ADD
                    </Button>

                </Stack>
            </form>
        </>
    )
}

