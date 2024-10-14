import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Modal,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CriarTarefa from './CriarTarefa';
import EditarTarefa from './EditarTarefa';

// Função para criar dados iniciais da listagem de tarefas
function createData(
  idTarefa: number,
  tituloTarefa: string,
  descricaoTarefa: string,
  inicioTarefa: string,
  fimTarefa: string,
  statusTarefa: string,
  recursoTarefa: string,
) {
  return { idTarefa, tituloTarefa, descricaoTarefa, inicioTarefa, fimTarefa, statusTarefa, recursoTarefa };
}

// Dados iniciais da listagem de tarefas
const initialRows = [
  createData(1, 'Tarefa 1', 'Descrição da Tarefa 1', '2024-10-01', '2024-10-02', 'Concluída', 'Recurso 1'),
  createData(2, 'Tarefa 2', 'Descrição da Tarefa 2', '2024-10-03', '2024-10-04', 'Em Andamento', 'Recurso 2'),
  createData(3, 'Tarefa 3', 'Descrição da Tarefa 3', '2024-10-04', '2024-10-05', 'Em Andamento', 'Recurso 3'),
  createData(4, 'Tarefa 4', 'Descrição da Tarefa 4', '2024-10-05', '2024-10-06', 'Em Andamento', 'Recurso 4'),
  createData(5, 'Tarefa 5', 'Descrição da Tarefa 5', '2024-10-06', '2024-10-07', 'Em Andamento', 'Recurso 5'),
  createData(6, 'Tarefa 6', 'Descrição da Tarefa 6', '2024-10-07', '2024-10-08', 'Aguardando', 'Recurso 6'),
];

// Componente ListarTarefa
const ListarTarefa = () => {
  const [open, setOpen] = useState(false);
  const [openEditar, setOpenEditar] = useState(false);
  const [tarefas, setTarefas] = useState([]);
  const [tarefa, setTarefa] = useState();
  const [idTarefaSelecionada, setIdTarefaSelecionada] = useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenEditar = () => setOpenEditar(true);
  const handleCloseEditar = () => setOpenEditar(false);

  // Define o conteúdo inicial do estado Tarefas
  useEffect(() => {
    setTarefas(initialRows);
  }, []);

  const handleEditar = (id) => {
    setIdTarefaSelecionada(id);
    const tarefaParaEditar = tarefas.find(obj => obj.idTarefa === id);
    setTarefa(tarefaParaEditar);
    setOpenEditar(true);
  };

  const handleDeletar = (id) => {
    setTarefas(current => current.filter(tarefa => tarefa.idTarefa !== id));
  };

  // Função para formatar a data no estilo brasileiro
  const formatarData = (data) => {
    const [ano, mes, dia] = data.split('-');
    return `${dia}/${mes}/${ano}`;
  };

  return (
    <Card>
      <CardHeader title="Tarefas" subheader="Listagem de Tarefas" />
      <CardContent>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Título</TableCell>
                <TableCell align="right">Descrição</TableCell>
                <TableCell align="right">Data de Início</TableCell>
                <TableCell align="right">Data de Finalização</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Recurso</TableCell>
                <TableCell align="center" colSpan={2}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tarefas.map((row) => (
                <TableRow key={row.idTarefa} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">{row.idTarefa}</TableCell>
                  <TableCell component="th" scope="row">{row.tituloTarefa}</TableCell>
                  <TableCell align="right">{row.descricaoTarefa}</TableCell>
                  <TableCell align="right">{formatarData(row.inicioTarefa)}</TableCell>
                  <TableCell align="right">{formatarData(row.fimTarefa)}</TableCell>
                  <TableCell align="right">{row.statusTarefa}</TableCell>
                  <TableCell align="right">{row.recursoTarefa}</TableCell>
                  <TableCell align="center">
                    <Button variant="contained" color="success" onClick={() => handleEditar(row.idTarefa)}>
                      <EditIcon fontSize="small" />
                    </Button>
                  </TableCell>
                  <TableCell align="center">
                    <Button variant="contained" color="error" onClick={() => handleDeletar(row.idTarefa)}>
                      <DeleteIcon fontSize="small" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" onClick={handleOpen}>Criar Tarefa</Button>
        <Button size="small" variant="outlined">Cancelar</Button>
      </CardActions>
      <Modal open={open} onClose={handleClose}>
        <div>
          <CriarTarefa handleClose={handleClose} tarefas={tarefas} setTarefas={setTarefas} />
        </div>
      </Modal>
      <Modal open={openEditar} onClose={handleCloseEditar}>
        <div>
          <EditarTarefa handleCloseEditar={handleCloseEditar} idTarefaSelecionada={idTarefaSelecionada} tarefas={tarefas} tarefa={tarefa} setTarefas={setTarefas} />
        </div>
      </Modal>
    </Card>
  );
};

export default ListarTarefa;
