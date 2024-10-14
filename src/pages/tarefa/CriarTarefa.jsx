import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, Input, FormHelperText, Grid, Card, CardHeader, CardContent, CardActions, Button, MenuItem, Select, TextField } from '@mui/material';

// Componente CriarTarefa que recebe handleClose, tarefas e setTarefas como props
const CriarTarefa = ({ handleClose, tarefas, setTarefas }) => {
  const [idTarefa, setIdTarefa] = useState();
  const [tituloTarefa, setTituloTarefa] = useState('');
  const [descricaoTarefa, setDescricaoTarefa] = useState('');
  const [inicioTarefa, setInicioTarefa] = useState('');
  const [fimTarefa, setFimTarefa] = useState('');
  const [recursoTarefa, setRecursoTarefa] = useState('');
  const [statusTarefa, setStatusTarefa] = useState('');

  useEffect(() => {
    // Define o próximo ID da tarefa automaticamente
    const proximoId = Math.max(...tarefas.map(tarefa => tarefa.idTarefa)) + 1;
    setIdTarefa(proximoId);
  }, [tarefas]);

  const handleSalvar = () => {
    console.log(`id: ${idTarefa}, titulo: ${tituloTarefa}, descrição: ${descricaoTarefa}, inicio: ${inicioTarefa}, fim: ${fimTarefa}, recurso: ${recursoTarefa}, status: ${statusTarefa}`);

    setTarefas([...tarefas, {
      idTarefa,
      tituloTarefa,
      descricaoTarefa,
      inicioTarefa,
      fimTarefa,
      recursoTarefa,
      statusTarefa
    }]);
    handleClose();
  };

  return (
    <Grid container spacing={2}>
      <Card sx={style}>
        <CardHeader title="Cadastrar Tarefa" subheader="Preencha os detalhes da tarefa" />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="tarefa_titulo">Título</InputLabel>
                <Input
                  id="tarefa_titulo"
                  value={tituloTarefa}
                  onChange={e => setTituloTarefa(e.target.value)}
                />
                <FormHelperText>Título da tarefa</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="tarefa_descricao">Descrição</InputLabel>
                <Input
                  id="tarefa_descricao"
                  value={descricaoTarefa}
                  onChange={e => setDescricaoTarefa(e.target.value)}
                />
                <FormHelperText>Descrição da tarefa</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth variant="outlined">
                <TextField
                  id="tarefa_inicio"
                  label="Início"
                  type="date"
                  value={inicioTarefa}
                  onChange={e => setInicioTarefa(e.target.value)}
                  InputLabelProps={{
                    shrink: true, // Mantém o rótulo sempre acima do campo
                  }}
                  helperText="Data de início da tarefa"
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth variant="outlined">
                <TextField
                  id="tarefa_fim"
                  label="Fim"
                  type="date"
                  value={fimTarefa}
                  onChange={e => setFimTarefa(e.target.value)}
                  InputLabelProps={{
                    shrink: true, // Mantém o rótulo sempre acima do campo
                  }}
                  helperText="Data de finalização da tarefa"
                />
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="tarefa_recurso">Recurso</InputLabel>
                <Select
                  id="tarefa_recurso"
                  value={recursoTarefa}
                  onChange={e => setRecursoTarefa(e.target.value)}
                >
                  <MenuItem value={'Recurso 1'}>Recurso 1</MenuItem>
                  <MenuItem value={'Recurso 2'}>Recurso 2</MenuItem>
                  <MenuItem value={'Recurso 3'}>Recurso 3</MenuItem>
                </Select>
                <FormHelperText>Selecione um recurso</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="tarefa_status">Status</InputLabel>
                <Select
                  id="tarefa_status"
                  value={statusTarefa}
                  onChange={e => setStatusTarefa(e.target.value)}
                >
                  <MenuItem value={'Aguardando'}>Aguardando</MenuItem>
                  <MenuItem value={'Em Andamento'}>Em Andamento</MenuItem>
                  <MenuItem value={'Concluída'}>Concluída</MenuItem>
                </Select>
                <FormHelperText>Selecione o status da tarefa</FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained" color="primary" onClick={handleSalvar}>Salvar</Button>
          <Button size="small" variant="outlined" color="secondary" onClick={handleClose}>Cancelar</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
};

export default CriarTarefa;
