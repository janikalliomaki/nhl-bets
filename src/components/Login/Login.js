import React from "react";
import Input from "@material-ui/core/Input";
import { Box } from "../Theme";

const Login = () => {
  return (
    <Box component="form">
      <Input placeholder="E-mail" />
      <Input placeholder="Password" />
    </Box>
  );
};

export default Login;
