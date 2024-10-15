import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; // Alterando para Routes

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
                <Routes> {/* Alterado de Switch para Routes */}
                    {/* Defina suas rotas */}
                    <Route path="/" element={<ListarTarefa />} /> {/* Mudança para a nova sintaxe */}
                    <Route path="/configuracoes" element={<SettingsModal open={openSettings} onClose={handleCloseSettings} setTheme={setTheme} />} /> {/* Mudança para a nova sintaxe */}
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
