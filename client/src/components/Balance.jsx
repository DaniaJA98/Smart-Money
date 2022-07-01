import { List, ListItem, ListItemText, Typography} from '@mui/material'
import Divider from '@mui/material/Divider';

export default function Balance() {
    return (
        <>
        <Typography variant='h6'>Balance</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: ' #ff000020' ,marginTop: "16px" }} >
            <ListItem>
                <ListItemText primary="Entry" sx={{ marginRight:"1.5rem"}} ></ListItemText>
                <ListItemText  primary="$35.000" sx={{color:"green"}} ></ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText primary="Egress" sx={{ marginRight:"1rem"}} ></ListItemText>
                <ListItemText  primary="$25.000" sx={{color:"red" }} ></ListItemText>
            </ListItem>
            <Divider variant="middle"/>
            <ListItem>
                <ListItemText primary="Balance" sx={{ marginRight:".7rem"}} ></ListItemText>
                <ListItemText  primary="$10.000" sx={{color:"green"}} ></ListItemText>
            </ListItem>
        </List>
        </>
    )
}
