import {
  Avatar,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  TextField
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import LockOpenTwoToneIcon from '@material-ui/icons/LockOpenTwoTone';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import React, { useState } from 'react';
import '../css/login.css';

async function loginUser(name, pass) {
  if (name === 'admin' && pass === 'admin') return true;
  return false;
}

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [token, setToken] = useState(false);
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setToken(await loginUser(username, password));
    console.log(token);
  };

  const avatarStyle = { backgroundColor: '#30aa8e' };
  const marTop = { marginTop: '20px' };
  const buttonSty = { marginTop: '20px', height: '50px' };
  const paperStyle = {
    padding: '20px',
    height: '70vh',
    width: '40vh',
    margin: '50px auto',
    background: 'rgba(127, 255, 212, 0.25)'
  };
  const divStyle = {
    margin: '50px 0'
  };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <div style={divStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOpenTwoToneIcon />
            </Avatar>
            <h2>Sign In</h2>
          </Grid>
          <form onSubmit={handleSubmit}>
            <TextField
              style={marTop}
              id="outlined-basic"
              placeholder="Enter username"
              onChange={(e) => setUserName(e.target.value)}
              label="Username"
              variant="outlined"
              fullWidth
              required
            />

            <TextField
              style={marTop}
              label="Password"
              variant="outlined"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? 'text' : 'password'}
              fullWidth
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <Button
              style={buttonSty}
              type="submit"
              variant="outlined"
              color="primary"
              fullWidth
              endIcon={<SendOutlinedIcon />}
            >
              Sign in
            </Button>
          </form>
        </div>
      </Paper>
    </Grid>
  );
};
export default Login;
