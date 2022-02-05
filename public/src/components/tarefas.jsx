import React, { useState } from "react";
import { Container } from "@mui/material";
import { Button, TextField } from "@mui/material";
import { connect } from "react-redux";
import {
  handleListValues,
  renderListTarefas,
  EditTarefas,
  RemoveTarefas,
} from "../store/action/actions";

function Tarefas(props) {
  const list = props.list;

  const [editTarefa, setTarefas] = useState("");
  const [inputValue, setInput] = useState("");

  return (
    <Container>
      <TextField
        label="Insira Sua Tarefa"
        margin="normal"
        name="Tarefa"
        fullWidth
        value={inputValue}
        onChange={(event) => {
          props.handleChange(event);
          setInput(event.target.value);
        }}
      />

      <Button
        type="button"
        variant="contained"
        onClick={() => {
          if (editTarefa !== "") {
            props.editTarefas(editTarefa);
            setTarefas("");
          } else {
            props.addListValue();
          }
        }}
      >
        {editTarefa !== "" ? "Salvar Tarefa" : "Adicionar Tarefa"}
      </Button>
      {list.map((item, index) => (
        <div key={item}>
          <h3>{item}</h3>
          <Button
            type="button"
            variant="outlined"
            color="error"
            onClick={() => props.removeTarefas(index)}
          >
            Remover Tarefa
          </Button>
          <Button
            type="button"
            variant="contained"
            color="success"
            onClick={() => {
              setInput(item);
              setTarefas(index);
            }}
          >
            Editar Tarefa
          </Button>
        </div>
      ))}
    </Container>
  );
}

const mapStateToProps = (state) => ({
  list: state.loguin.list,
  description: state.loguin.description,
});

const mapDispatchToProps = (dispatch) => ({
  handleChange(e) {
    dispatch(handleListValues(e));
  },
  addListValue() {
    dispatch(renderListTarefas());
  },
  editTarefas(e) {
    dispatch(EditTarefas(e));
  },
  removeTarefas(e) {
    dispatch(RemoveTarefas(e));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Tarefas);
