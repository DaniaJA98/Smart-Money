import { List, ListItem, ListItemText, IconButton, Typography, Divider } from '@mui/material'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from 'react';
import { getAllOperations } from '../api/operations'
import { Box } from '@mui/system';


export default function OperationList({operation,setOperation}) {
   

    return (
        <>
            <Typography variant="h6" > OperationList</Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: '#ff000020', marginTop: "16px" }} >
                {
                    operation.map(
                        (op) => (

                            <Box key={operation.id}>
                                <ListItem >
                                    <ListItemText primary={op.concept} secondary={"$" + op.amount} ></ListItemText>
                                    <IconButton edge="end" aria-label="edit">
                                        <ModeEditIcon />
                                    </IconButton>
                                    <IconButton edge="end" aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItem>
                                <Divider variant="middle" />
                            </Box>

                        )
                    )
                }
            </List>

        </>
    )
}
