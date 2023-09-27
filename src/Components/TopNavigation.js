import { useEffect, useState } from 'react';
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
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import AccountCircle from '@mui/icons-material/AccountCircle';
import roseShapeLogo from "../Images/rose-shape.png";
import {NavLink, useNavigate, useLocation } from 'react-router-dom';





const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const navItems = ["News", "Artists", "Catalog", "Our Story"]
const buttonLinkStyle = {color: "black", ":hover": {color: "red"}, "&.active": {color: "red"}};






export default function TopNavigation(props) {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    // Check Authorization 
    // const { route, signOut } = useAuthenticator((context) => [context.route]);
    const navigate = useNavigate();
    const { pathname } = useLocation();


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = (page) => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = (page) => {
        setAnchorElUser(null);
        
    };
    const { window } = props;


    const [mobileOpen, setMobileOpen] = useState(false);


    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    }

    const RoseLabelIcon = (
        <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} >
            <img style={{ height: "45px", width: "45px" }} src={roseShapeLogo} alt={"logo"} />

        </Box>
    )



    function getLink(linkTitle) {
        let link =  "/" + linkTitle.replace(" ", "").toLowerCase();
        console.log(link);
        return link;
    }

    function logOut() {
     //   signOut();
    }




    // Navigation Drawer Content
    const drawer = (
        <Box onClick={handleDrawerToggle}>
            <Typography variant="h6" sx={{ my: 2, textAlign: "center" }}>
                Black Rose Records
            </Typography>
            <Divider />
            <List>
                {navItems.map((page) => (
                    <ListItem key={page} disablePadding>
                        <ListItemButton component={NavLink} to={getLink(page)}  sx={{...buttonLinkStyle, textAlign: 'center' }}>
                            <ListItemText primary={page} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )

    const drawerWidth = 240;
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <AppBar position='sticky' component='nav' elevation={0} sx={{ backgroundColor: "white", color: "black" }}>
            <Container maxWidth="xl">
                <Toolbar  >
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }} >
                        <img style={{ height: "45px", width: "45px" }} src={roseShapeLogo} alt={"logo"} />
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component={NavLink}
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
                        Black Rose Records
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { md: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} >
                        <img style={{ margin: "2px 8px", textAlign: "center", height: "36px", width: "36px" }} src={roseShapeLogo} alt={"logo"} />
               
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
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
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {navItems.map((page) => (
                            <Button
                                key={page}
                                component= {NavLink}
                                to = {getLink(page)}
                                sx={{...buttonLinkStyle, my: 2, display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                    {/* TODO show Icon button when logged in */}
                    <Box sx={{ flexGrow: 0, display: "inline-flex" }}>
                        {/* <IconButton
                            size="large"
                            color="inherit"
                            href="http://www.google.com"

                        >   
                    
                        <AccountCircle sx={{ fontSize: "36px" }} />
                        </IconButton> */}
                        {/* {route === "authenticated" ? <Button variant="text" onClick={logOut} sx={buttonLinkStyle}>Logout</Button>: 
                        <Button variant="text" component={NavLink} to="/login" sx={buttonLinkStyle}>Login</Button> } */}

                    </Box>
                </Toolbar>
                <nav>
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </nav>
            </Container>
        </AppBar>
    );
}

