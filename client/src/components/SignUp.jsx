import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Alert, Button, Typography } from "@mui/material";
import "../App.css";

const SignUp = () => {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    password: "",
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };
  const PostData = async (e) => {
    e.preventDefault();
    const { name, phone, email, address, password } = user;
    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        email,
        address,
        password,
      }),
    });
    const data = res.json();
    if (res.status === 422 || !data) {
      window.alert("Invalid registration");

      <Alert severity="success">This is a success message!</Alert>;
    } else {
      window.alert("Registered Successfully");
    }
  };

  return (
    <div className="signup">
      <form method="POST" className="inputSignUp">
        <div className="signUpBox">
          <Typography className="headingSignUp" fontSize="large">
            Sign Up
          </Typography>
          <Grid className="grid" item xs={12}>
            <TextField
              className="inputSignUp"
              required
              fullWidth
              name="name"
              label="name"
              type="name"
              id="name"
              autoComplete="new-password"
              value={user.name}
              onChange={handleInputs}
            />
          </Grid>
          <Grid className="grid" item xs={12}>
            <TextField
              className="inputSignUp"
              required
              fullWidth
              name="phone"
              label="phone"
              type="phone"
              id="phone"
              autoComplete="new-password"
              value={user.phone}
              onChange={handleInputs}
            />
          </Grid>
          <Grid className="grid" item xs={12}>
            <TextField
              required
              className="inputSignUp"
              fullWidth
              name="email"
              label="email"
              type="email"
              id="email"
              autoComplete="new-password"
              value={user.email}
              onChange={handleInputs}
            />
          </Grid>
          <Grid className="grid" item xs={12}>
            <TextField
              required
              className="inputSignUp"
              fullWidth
              name="address"
              label="address"
              type="address"
              id="address"
              autoComplete="new-password"
              value={user.address}
              onChange={handleInputs}
            />
          </Grid>
          <Grid className="grid" item xs={12}>
            <TextField
              required
              className="inputSignUp"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              value={user.password}
              onChange={handleInputs}
            />
          </Grid>
          <Grid className="grid" id="submit">
            <Button type="submit" sx={{ color: "inherit" }} onClick={PostData}>
              Submit
            </Button>
          </Grid>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
