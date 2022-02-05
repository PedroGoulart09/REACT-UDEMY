import React from "react";
import { Button, TextField } from "@mui/material";
import { Container } from "@mui/material";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loguinEmail, loguinPassword, redirect } from "../store/action/actions";

function Form(props) {
  return (
    <div>
      <Container component={"article"} max-width="small">
        <h1>Login</h1>
        <TextField
          label="email"
          value={props.email}
          margin="normal"
          name="email"
          fullWidth
          onChange={props.handleChange}
        />

        <TextField
          label="Password"
          type="password"
          onChange={props.handleChange2}
          value={props.password}
          name="password"
          margin="normal"
          fullWidth
        />

        <Button type="button" variant="contained" onClick={props.Redirect}>
          Sign-in
        </Button>
        {props.redirect && <Redirect to="/tarefas" />}
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => ({
  email: state.loguin.email,
  password: state.loguin.password,
  redirect: state.loguin.redirect,
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (e) => {
    dispatch(loguinEmail(e));
  },
  handleChange2: (e) => {
    dispatch(loguinPassword(e));
  },
  Redirect: () => {
    dispatch(redirect());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
