import "./App.css";
import Form from "./components/form";
import Tarefas from "./components/tarefas";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Form} />
        <Route path="/tarefas" component={Tarefas} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
