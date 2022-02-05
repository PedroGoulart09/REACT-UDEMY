export const renderListTarefas = () => ({
  type: "LIST_TAREFAS",
});

export const RemoveTarefas = (id) => ({
  type: "REMOVE_TAREFAS",
  id,
});

export const EditTarefas = (index) => ({
  type: "EDIT_TAREFAS",
  payload: index,
});

export const handleListValues = (event) => ({
  type: "VALUE_INPUT_TAREFAS",
  payload: event.target.value,
});

export const handleListValues2 = (event) => ({
  type: "VALUE_INPUT_TAREFAS2",
  payload: event.target.value,
});

export const loguinEmail = (event) => ({
  type: "LOGUIN_INPUT",
  payload: event.target.value,
});

export const loguinPassword = (event) => ({
  type: "LOGUIN_INPUT2",
  payload: event.target.value,
});

export const redirect = () => ({
  type: "REDIRECT",
  payload: true,
});
