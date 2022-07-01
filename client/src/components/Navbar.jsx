import { Box, AppBar, Toolbar, Typography, Container, Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
    const navigate = useNavigate()
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="static"
                color="transparent"
            >
                <Container>
                    <Toolbar disableGutters>
                        <Typography
                            variant='h1'
                            sx={{ flexGrow: 1, }}
                            align="center"
                        >
                            <Link to="/" style={{ textDecoration: 'none', color: '#000' }} >
                                Smart Money
                            </Link>
                        </Typography>
                        {/* <Button
                            variant='contained'
                            color='primary'
                            onClick={() => navigate("/operations")}
                        >
                            Operations
                        </Button> */}
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>

    )
}
