import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import './Navbar.css';
const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 58,
    height: 29,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#101630',
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: '#cccccc',
          ...theme.applyStyles('dark', {
            backgroundColor: '#8796A5',
          }),
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: '#69b8f0',
      width: 28,
      height: 28,
      '&::before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#101630',
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
      ...theme.applyStyles('dark', {
        backgroundColor: '#000000',
      }),
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: '#cccccc',
      borderRadius: 20 / 2,
      ...theme.applyStyles('dark', {
        backgroundColor: '#8796A5',
      }),
    },
  }));

  
const pages = ["Home", "About Me", "Projects","Skills","Experience"];
const label = { inputProps: { 'aria-label': 'Switch demo' } };
function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
   
    const handleOpenNavMenu = (event) => {
        console.log("hello");
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
       console.log("bye");
        setAnchorElNav(null);
    };
    
    const [darkMode, setDarkMode] = React.useState(true);

  // Toggle function
  const toggleDarkMode = () => {
    setDarkMode(!darkMode); // Toggle between light and dark mode
    if (!darkMode) {
      console.log("dark mode");
      document.body.classList.add('dark'); // Apply dark mode class
      let imgdiv=document.querySelector(".imgDiv");
      imgdiv.style.boxShadow="0px 0px 80px rgb(125 211 252)";
      
    } else {
      console.log("light mode");
      document.body.classList.remove('dark'); 
      let imgdiv=document.querySelector(".imgDiv");
      imgdiv.style.boxShadow="10px 0px 80px black";// Remove dark mode class
    }
  };
    
    return (
        <AppBar position="static" sx={{backgroundColor:"transparent", boxShadow:"1px 0px 2px #aaa"}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                                     
                   
                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: "block", md: "none" } }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                   
                                      
                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" ,justifyContent:"center"} }}>
                        {pages.map((page) => (
                            <Button
                                 className="navbtn balsamiq-sans-regular"
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ m: 2, display: "block", color:darkMode==true?"rgb(241 245 241)":"rgb(40 40 40)" ,fontWeight:"600" }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                    <FormControlLabel
                     control={<MaterialUISwitch sx={{ m: 0 }} defaultChecked onChange={toggleDarkMode}/>}/>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="GitHub account!" >
                            <IconButton >
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;
