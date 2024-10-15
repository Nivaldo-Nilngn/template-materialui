import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import SettingsModal from './components/SettingsModal';

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
        document.body.style.background = theme === 'dark' ? '#1e1e1e' : '#ffffff';
    }, [theme]);

    const muiTheme = createTheme({
        palette: {
            mode: theme,
        },
    });

    return (
        <ThemeProvider theme={muiTheme}>
            <Router>
                <Header onOpenSettings={handleOpenSettings} />
                <Routes>
                    <Route path="/" element={<ListarTarefa />} />
                    <Route path="/configuracoes" element={
                        <SettingsModal 
                            open={openSettings} 
                            onClose={handleCloseSettings} 
                            setTheme={setTheme}
                        />
                    } />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
