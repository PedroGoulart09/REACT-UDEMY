const initialState = {
  list: [],
  email: "",
  password: "",
  redirect: false,
  description: "",
};

const Reducers = (state = initialState, action) => {
  switch (action.type) {
    case "LIST_TAREFAS":
      return {
        ...state,
        list: [...state.list, state.description],
      };

    case "REMOVE_TAREFAS":
      const auxRemove = state.list;
      auxRemove.splice(action.id, 1);
      return {
        ...state,
        list: [...auxRemove],
      };

    case "LOGUIN_INPUT":
      return {
        ...state,
        email: action.payload,
      };
    case "LOGUIN_INPUT2":
      return {
        ...state,
        password: action.payload,
      };
    case "REDIRECT":
      return {
        ...state,
        redirect: action.payload,
      };
    case "VALUE_INPUT_TAREFAS":
      return {
        ...state,
        description: action.payload,
      };

    case "EDIT_TAREFAS":
      const aux = state.list;
      aux[action.payload] = state.description;
      return {
        ...state,
        list: aux,
      };
    default:
      return state;
  }
};

export default Reducers;
