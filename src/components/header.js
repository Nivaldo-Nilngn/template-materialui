import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

function Header({ onOpenSettings }) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Gerenciamento de Projetos
                    </Typography>
                    <Button color="inherit" onClick={onOpenSettings}>Configurações</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;
