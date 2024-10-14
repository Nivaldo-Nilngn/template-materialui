import React, { useEffect } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const SettingsModal = ({ open, onClose, setTheme }) => {
    const [localTheme, setLocalTheme] = React.useState('light');

    // Carregar configurações do localStorage ao abrir o modal
    useEffect(() => {
        if (open) {
            const savedSettings = localStorage.getItem('userSettings');
            if (savedSettings) {
                const settings = JSON.parse(savedSettings);
                setLocalTheme(settings.theme);
            } else {
                setLocalTheme('light'); // Defina um tema padrão se não houver configuração
            }
        }
    }, [open]);

    const handleSaveSettings = () => {
        localStorage.setItem('userSettings', JSON.stringify({ theme: localTheme }));
        setTheme(localTheme); // Atualiza o tema na aplicação
        onClose(); // Fecha o modal após salvar
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={style}>
                <Typography variant="h6" component="h2">
                    Configurações
                </Typography>
                <Select
                    value={localTheme}
                    onChange={(e) => setLocalTheme(e.target.value)}
                    fullWidth
                    sx={{ mt: 2 }}
                >
                    <MenuItem value="light">Claro</MenuItem>
                    <MenuItem value="dark">Escuro</MenuItem>
                </Select>
                <Button variant="contained" onClick={handleSaveSettings} sx={{ mt: 2 }}>
                    Salvar
                </Button>
            </Box>
        </Modal>
    );
};

export default SettingsModal;
