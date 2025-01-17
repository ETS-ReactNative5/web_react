import "./Footer.css";
import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const axios = require("axios");

export const FormData = () => {
  return <h1>FORM DATA</h1>;
};

export const Copyright = (props) => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Arawinz Soft Solutions</h4>
            <h1 className="list-unstyled">
              <li>+91 91234 56789 </li>
              <li>Gachibowli,Hyderabad</li>
              <li>Telangana</li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Demo</h4>
            <ui className="list-unstyled">
              <li>SAMPLE 01</li>
              <li>SAMPLE 02</li>
              <li>SAMPLE 03</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>WELL ANOTHER COLUMN</h4>
            <ui className="list-unstyled">
              <li>Demo 01</li>
              <li>Demo 02</li>
              <li>Demo 03</li>
            </ui>
          </div>
        </div>
        <hr />
        <center>
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} Arawinz Soft Solutions | All
              rights reserved | Terms Of Service | Privacy
            </p>
          </div>
        </center>
      </div>
    </div>

    // <Typography className="footerMain"
    //   backgroundColor="#063970"
    //   variant="body2"
    //   color="grey.A100"
    //   align="center"
    //   {...props}
    // >
    //   {"Copyright © "}
    //   <Link color="inherit" href="https://www.arawinz.com/">
    //     Arawinz Soft Solutions
    //   </Link>{" "}
    //   {"2018 - 2022"}
    //   {"."}
    // </Typography>
  );
};

export const SignUp = () => {
  const theme = createTheme();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [err, setErr] = useState(0);

  // const { userprofile, setUserProfile } = useContext(UserContext);

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    await axios.post("/register").then(function(response) {
      if (response.data.status === true) {
        setName(response.data.usedata.name);
        setMobile(response.data.usedata.mobile);
        setEmail(response.data.usedata.gmail);
      }
      console.log(response.data);
    });
  };

  const validateForm = (e) => {
    e.preventDefault();
    setErr(0);
    if (name === "") {
      setErr(1);
      alert("Please Enter Name");
    } else if (!email.includes("@")) {
      setErr(3);
      alert("Please Enter a valid email address");
    } else if (mobile.length !== 10) {
      setErr(2);
      alert("Please Enter a valid 10 Digit Mobile Number");
    } else if (password.length < 6) {
      setErr(4);
      alert("Please Enter Password");
    } else if (cpassword.length < 6) {
      setErr(5);
      alert("Please Enter Confirm Password");
    } else if (password !== cpassword) {
      setErr(5);
      alert("Password Mismatch");
    } else {
      alert("USER ADDED");
      // const formdata = new FormData();
      // formdata.append("name", name);
      // formdata.append("mobile", mobile);
      // formdata.append("email", email);
      // formdata.append("password", password);

      // axios.post("/register", formdata).then(function(response) {
      //   if (response.data.status === true) {
      //     alert("axios call");
      //   } else {
      //     alert(response.data.msg);
      //   }
      //   console.log(response.data);
      // });
      // history("/form");
    }
  };
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container
          component="main"
          maxWidth="xs"
          direction="row"
          justifyContent="flex-start"
          alignItems="stretch"
        >
          <Box
            className="pandu"
            sx={{
              borderRadius: "20px",
              // backgroundColor: "rgb(174, 212, 255,0.70)",
              p: [3, 3, 3, 3],
              marginTop: 8,
              opacity: 0.95,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#063970" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              onSubmit={validateForm}
              component="form"
              noValidate
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    size="small"
                    name="name"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    autoFocus
                    value={name}
                    error={err === 1 && true}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </Grid>{" "}
                <Grid item xs={12}>
                  <TextField
                    size="small"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    value={email}
                    error={err === 3 && true}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    size="small"
                    name="mobile"
                    required
                    fullWidth
                    id="mobile"
                    label="Mobile"
                    value={mobile}
                    error={err === 2 && true}
                    onChange={(e) => {
                      setMobile(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    size="small"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    value={password}
                    error={err === 4 && true}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    size="small"
                    required
                    fullWidth
                    name="password"
                    label="Confirm Password"
                    type="password"
                    id="cpassword"
                    value={cpassword}
                    error={err === 5 && true}
                    onChange={(e) => {
                      setcPassword(e.target.value);
                    }}
                  />
                </Grid>
              </Grid>
              <Button
                // onClick={validateForm}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: "#063970" }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  {/* <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link> */}
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
      <br />      <br />      <br />
    </div>
  );
};
