import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import SettingsModal from './components/SettingsModal'; // Importe o modal de configurações

function App() {
    const [theme, setTheme] = useState('light');
    const [openSettings, setOpenSettings] = useState(false);

    // Carregar configurações do localStorage ao iniciar o aplicativo
    useEffect(() => {
        const savedSettings = localStorage.getItem('userSettings');
        if (savedSettings) {
            const settings = JSON.parse(savedSettings);
            setTheme(settings.theme);
        }
    }, []);

    const handleOpenSettings = () => setOpenSettings(true);
    const handleCloseSettings = () => setOpenSettings(false);

    // UseEffect para aplicar o estilo ao body com base no tema
    useEffect(() => {
        document.body.style.background = theme === 'dark' ? '#1e1e1e' : '#ffffff'; // Ajuste a cor de fundo
    }, [theme]); // Use o estado 'theme' aqui

    const muiTheme = createTheme({
        palette: {
            mode: theme,
        },
    });

    return (
        <ThemeProvider theme={muiTheme}>
            <Header onOpenSettings={handleOpenSettings} />
            <ListarTarefa />
            <SettingsModal 
                open={openSettings} 
                onClose={handleCloseSettings} 
                setTheme={setTheme} // Passando a função setTheme corretamente
            />
        </ThemeProvider>
    );
}

export default App;
