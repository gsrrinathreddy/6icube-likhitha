import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Home from '../../pages/Home';



const pages = [ 'About','Events', 'Blog','Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  
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
 
  const onLogin = (e) => {
    e.preventDefault();
    navigate('/login')
  
  };
  const onSignup = (e) => {
    e.preventDefault();
    navigate('/Signup')

  }
  const onHome=(e)=>{
    e.preventDefault();
    navigate('/Home')
  }
  return (
    <AppBar position="fixed" sx={{backgroundColor:"white"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
         
          <Typography
            variant="h2"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.20rem',
              
              textDecoration: 'none',
            }}
          >
            <img alt="kk" src="http://events2go.com.au/assets/front/images/logo-black.png " width="120" height="70" onClick={onHome}/>

          </Typography>
          <Box sx={{flexGrow:1}}/>
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
              {pages.map((page) => (
                
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
                
              ))}
            </Menu>
          </Box>
    
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
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
                <Link to={page} style={{textDecoration:"none"}}>
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'magenta', display: 'block' }}
              >
                {page}
              </Button>
              </Link>
            ))}
          </Box>
          <Box sx={{flexGrow:0}}/>
          <Box sx={{ flexGrow: 0 }} >
            
             
              <Button variant="contained" onClick={onLogin}  color="success" sx={{backgroundColor:"magenta", marginRight:'10px'}} >
          LOGIN
        </Button> 
   
     
        <Button variant="contained" onClick={onSignup} color="success" sx={{backgroundColor:"magenta"}} >
          SIGNUP
        </Button>
      
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;