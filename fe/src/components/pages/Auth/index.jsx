import React, { useEffect, useState } from "react";

import {
  Alert,
  Box,
  Button,
  Link,
  Paper,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { useLocation } from "react-router-dom";
import { register } from "../../../services/auth.service";
import { toastError, toastSuccess } from "../../../utils/toast";

const CustomPaper = styled(Paper)`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`;

const Page = styled(Box)`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Auth = () => {
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    register(email, password)
      .then((res) => {
        toastSuccess(`Welcome ${res.data.email}!`);
      })
      .catch((e) => {
        toastError(e.response.data.message);
      });
  };

  return (
    <Page>
      <CustomPaper elevation={24}>
        <Typography variant={"h5"} mb={5}>
          {location.pathname === "/login" ? "Sign in" : "Register"}
        </Typography>

        <form
          onSubmit={handleOnSubmit}
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            sx={{ width: "100%", mb: 2 }}
            type={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            sx={{ width: "100%", mb: 2 }}
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button variant="contained" type={"submit"} sx={{ margin: "auto" }}>
            Submit
          </Button>
        </form>

        {location.pathname === "/login" ? (
          <Link
            href="/register"
            underline="always"
            sx={{ fontSize: 18, mt: 4 }}
          >
            Register
          </Link>
        ) : (
          <Link href="/login" underline="always" sx={{ fontSize: 18, mt: 4 }}>
            Sign in
          </Link>
        )}
      </CustomPaper>
    </Page>
  );
};

export default Auth;
