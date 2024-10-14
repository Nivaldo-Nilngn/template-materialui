import React, { useState, useEffect } from 'react';
import {
  FormControl,
  InputLabel,
  FormHelperText,
  MenuItem,
  Select,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Button,
  TextField,
} from '@mui/material';

const EditarTarefa = ({ handleCloseEditar, idTarefaSelecionada, tarefas, tarefa, setTarefas }) => {
  const [idTarefa, setIdTarefa] = useState();
  const [tituloTarefa, setTituloTarefa] = useState('');
  const [descricaoTarefa, setDescricaoTarefa] = useState('');
  const [inicioTarefa, setInicioTarefa] = useState('');
  const [fimTarefa, setFimTarefa] = useState('');
  const [recursoTarefa, setRecursoTarefa] = useState('');
  const [statusTarefa, setStatusTarefa] = useState('');

  useEffect(() => {
    setIdTarefa(idTarefaSelecionada);
    setTituloTarefa(tarefa.tituloTarefa);
    setDescricaoTarefa(tarefa.descricaoTarefa);
    setInicioTarefa(tarefa.inicioTarefa);
    setFimTarefa(tarefa.fimTarefa);
    setRecursoTarefa(tarefa.recursoTarefa);
    setStatusTarefa(tarefa.statusTarefa);
  }, [idTarefaSelecionada, tarefa]);

  const handleRecurso = (event) => {
    setRecursoTarefa(event.target.value);
  };

  const handleStatus = (event) => {
    setStatusTarefa(event.target.value);
  };

  const handleEditar = () => {
    setTarefas((current) =>
      current.map((obj) => {
        if (obj.idTarefa === idTarefaSelecionada) {
          return {
            ...obj,
            idTarefa: idTarefaSelecionada,
            tituloTarefa,
            descricaoTarefa,
            inicioTarefa,
            fimTarefa,
            recursoTarefa,
            statusTarefa,
          };
        }
        return obj;
      })
    );
    handleCloseEditar();
  };

  return (
    <Grid container spacing={2}>
      <Card sx={style}>
        <CardHeader title="Edição de Tarefas" subheader="Atualize os detalhes da tarefa" />
        <CardContent>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Título"
              value={tituloTarefa}
              onChange={(e) => setTituloTarefa(e.target.value)}
              placeholder="Título da Tarefa"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Descrição"
              value={descricaoTarefa}
              onChange={(e) => setDescricaoTarefa(e.target.value)}
              placeholder="Descrição da Tarefa"
              margin="normal"
            />
          </Grid>
          <Grid container spacing={2} mt={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                variant="outlined"
                label="Início"
                type="date"
                value={inicioTarefa}
                onChange={(e) => setInicioTarefa(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                variant="outlined"
                label="Fim"
                type="date"
                value={fimTarefa}
                onChange={(e) => setFimTarefa(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} mt={2}>
            <Grid item xs={6}>
              <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel htmlFor="tarefa_recurso">Recurso</InputLabel>
                <Select
                  id="tarefa_recurso"
                  value={recursoTarefa}
                  onChange={handleRecurso}
                >
                  <MenuItem value={'Recurso 1'}>Recurso 1</MenuItem>
                  <MenuItem value={'Recurso 2'}>Recurso 2</MenuItem>
                  <MenuItem value={'Recurso 3'}>Recurso 3</MenuItem>
                </Select>
                <FormHelperText>Selecione um recurso</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel htmlFor="tarefa_status">Status</InputLabel>
                <Select
                  id="tarefa_status"
                  value={statusTarefa}
                  onChange={handleStatus}
                >
                  <MenuItem value={'Aguardando'}>Aguardando</MenuItem>
                  <MenuItem value={'Em Andamento'}>Em Andamento</MenuItem>
                  <MenuItem value={'Concluída'}>Concluída</MenuItem>
                </Select>
                <FormHelperText>Selecione o status</FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={2} mt={3}>
            <Grid item xs={6}>
              <Button
                size="large"
                variant="contained"
                onClick={handleEditar}
                sx={{ bgcolor: 'primary.main', color: 'dark', '&:hover': { bgcolor: 'primary.dark' } }}
              >
                Salvar
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                size="large"
                variant="outlined"
                onClick={handleCloseEditar}
                sx={{ borderColor: 'primary.main', color: 'primary.main', '&:hover': { borderColor: 'primary.dark', color: 'primary.dark' } }}
              >
                Cancelar
              </Button>
            </Grid>
          </Grid>
        </CardContent>
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
  borderRadius: '8px',
  p: 4,
};

export default EditarTarefa;
