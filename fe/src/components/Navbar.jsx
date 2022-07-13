import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import AdbIcon from '@mui/icons-material/Adb';
import { Stack } from '@mui/material';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import "../App.css"
=======
>>>>>>> 76db1d4729f15c0fedb9c68e756c67887f214d8e


const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
<<<<<<< HEAD
    <AppBar position='static' sx={{color :'white', top: 0, margin: 0,}}>
=======
    <AppBar sx={{color :'white', overflow: 'hidden', top: 0, margin: 0}}>
>>>>>>> 76db1d4729f15c0fedb9c68e756c67887f214d8e
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
<<<<<<< HEAD
                <Stack onClick={handleCloseNavMenu} direction='column'>
                <Button ><Link className='navButtonn' to="/">Home</Link></Button>
            <Button > <Link className='navButtonn' to="/aboutme">About me</Link></Button>
            <Button ><Link className='navButtonn' to="/chat">Chat</Link></Button> 
=======
                <Stack direction='column'>
            <Button Link to='home'>Home</Button>
            <Button href='aboutme' color='inherit'>About Me</Button>
            <Button href='chat' color='inherit'>Chat</Button> 
>>>>>>> 76db1d4729f15c0fedb9c68e756c67887f214d8e
            </Stack>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
<<<<<<< HEAD
          <Box onClick={handleCloseNavMenu} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          
            <Button  onClick={handleCloseNavMenu}><Link className='navButton' to="/">Home</Link></Button>
            <Button > <Link className='navButton' to="/aboutme">About me</Link></Button>
            <Button ><Link className='navButton' to="/chat">Chat</Link></Button> 
=======
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          
            <Button href='/home' color='inherit'>Home</Button>
            <Button href='/aboutme' color='inherit'>About Me</Button>
            <Button href='/chat' color='inherit'>Chat</Button> 
>>>>>>> 76db1d4729f15c0fedb9c68e756c67887f214d8e
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
<<<<<<< HEAD
            
=======
>>>>>>> 76db1d4729f15c0fedb9c68e756c67887f214d8e
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
<<<<<<< HEAD
             
              <Stack onClick={handleCloseUserMenu} direction='column'>
              <Button ><Link className='navButtonn' to="/login">Login</Link></Button>
            <Button><Link className='navButtonn' to="/profile">profile</Link></Button>
            <Button ><Link className='navButtonn' to="/account">account</Link></Button>
            <Button ><Link className='navButtonn' to="/dashboard">dashboard</Link></Button> 
           
            <Button ><Link className='navButtonn' to="/logout">logout</Link></Button>
            <Button ><Link className='registerButton' to="/register">Register</Link></Button>
           
=======
              <Stack direction='column'>
            <Button href='/profile' color='inherit'>profile</Button>
            <Button href='/account' color='inherit'>account</Button>
            <Button href='/dashboard' color='inherit'>dashboard</Button> 
            <Button href='/logout' color='inherit'>logout</Button>
>>>>>>> 76db1d4729f15c0fedb9c68e756c67887f214d8e
            </Stack>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
