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
import React from 'react';
import '../css/login.css';

const Login = () => {
  // const [values, setValues] = React.useState({
  //   password: '',
  //   showPassword: false
  // });

  const [showPassword, setShowPassword] = React.useState(false);
  // const [password, setPassword] = React.useState('');
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();

  // const handleChange = (event) => {
  //   setPassword(event.target.value);
  // };

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
          <TextField
            style={marTop}
            id="outlined-basic"
            placeholder="Enter username"
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
            type={showPassword ? 'text' : 'password'} // <-- This is where the magic happens
            fullWidth
            required
            // onChange={handleChange}
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
        </div>
      </Paper>
    </Grid>
  );
};
export default Login;
