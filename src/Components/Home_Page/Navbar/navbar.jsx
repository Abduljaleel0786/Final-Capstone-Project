import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LanguageIcon from '@mui/icons-material/Language';
import { Icon } from '@iconify/react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Headerimg from '../../../Images/headericon.png';
import Logo from '../../../Images/Logo.jpeg';
import { Link, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Badge } from '@mui/material';
import LanguageModal from '../../Resturant/LeanguageModal/LanguageModal';

// Import Modals
import SignUpModal from '../../SignUpPage/SignUpModal';
import LoginModal from '../../Resturant/LoginModal/LoginModal';
import CartDrawer from '../../Resturant/CartList/CartList';

function Navbar() {
    const [openLanguage, setOpenLanguage] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);

    // State for SignUp and Login modals
    const [openSignUp, setOpenSignUp] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const count = useSelector((state) => state.counter);

    const handleLanguageOpen = () => setOpenLanguage(true);
    const handleLanguageClose = () => setOpenLanguage(false);

    const handleDrawerOpen = () => setDrawerOpen(true);
    const handleDrawerClose = () => setDrawerOpen(false);

    return (
        <Box>
            {/* Top Bar */}
            <AppBar className="d-none d-lg-block" position="sticky" sx={{ backgroundColor: '#c21760' }}>
                <Box className="container">
                    <Grid container alignItems="center" justifyContent="center" sx={{ height: 64, px: 2 }}>
                        <Grid item>
                            <img style={{ width: '40px' }} src={Headerimg} alt="Header Icon" />
                        </Grid>
                        <Grid item>
                            <Typography
                                variant="h6"
                                component="div"
                                align="center"
                                sx={{ color: '#fff', fontWeight: 'bold', marginLeft: '8px', marginRight: '8px' }}
                            >
                                Do you need a business account?
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button
                                sx={{
                                    backgroundColor: '#e21b70',
                                    color: '#fff',
                                    marginLeft: '8px',
                                    '&:hover': { backgroundColor: '#c2185b' },
                                }}
                                variant="contained"
                                onClick={() => setOpenSignUp(true)}
                            >
                                SIGN UP NOW
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </AppBar>

            {/* Main Navbar */}
            <AppBar
                position="sticky"
                sx={{ backgroundColor: '#fff', boxShadow: 'none', borderBottom: '1px solid #e0e0e0' }}
            >
                <Box className="container">
                    <Grid container alignItems="center" justifyContent="space-between" sx={{ height: 64 }}>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <Grid item display="flex" alignItems="center">
                                <img
                                    style={{ width: isMobile ? '30px' : '35px' }}
                                    src={Logo}
                                    alt="Logo"
                                />
                                <Typography
                                    variant="h6"
                                    sx={{
                                        color: '#e21b70',
                                        ml: 1,
                                        fontWeight: 'bold',
                                        fontSize: isMobile ? '16px' : '20px',
                                    }}
                                >
                                    foodpanda
                                </Typography>
                            </Grid>
                        </Link>

                        <Grid item>
                            <Grid container spacing={isMobile ? 1 : 2} alignItems="center">
                                {/* Log In Button */}
                                <Grid item>
                                    <Button
                                        sx={{
                                            color: '#000',
                                            fontSize: isMobile ? '12px' : '14px',
                                            borderRadius: '8px',
                                            border: '1px solid Black',
                                            margin: '0px 8px',
                                            padding: '5px 12px',
                                        }}
                                        onClick={() => setOpenLogin(true)}
                                    >
                                        Log In
                                    </Button>
                                </Grid>

                                {/* Sign Up Button */}
                                <Grid item>
                                    <Button
                                        sx={{
                                            backgroundColor: '#e21b70',
                                            color: '#fff',
                                            fontSize: isMobile ? '12px' : '14px',
                                            borderRadius: '8px',
                                            padding: '5px 12px',
                                        }}
                                        onClick={() => setOpenSignUp(true)}
                                    >
                                        Sign Up
                                    </Button>
                                </Grid>

                                {/* Language Selector */}
                                <Grid item>
                                    <Button
                                        onClick={handleLanguageOpen}
                                        sx={{ color: '#000', fontSize: isMobile ? '12px' : '14px' }}
                                    >
                                        <LanguageIcon />
                                        <Typography variant="body2" sx={{ mx: 1 }}>
                                            EN
                                        </Typography>
                                    </Button>
                                </Grid>

                                <LanguageModal open={openLanguage} handleClose={handleLanguageClose} />


                                {/* Shopping Bag Icon */}
                                <Grid item>
                                    <Button
                                        sx={{ color: '#000' }}
                                        onClick={handleDrawerOpen}
                                    >
                                        <Badge badgeContent={count.value} color="error">
                                            <Icon icon="iconamoon:shopping-bag-thin" fontSize={24} />
                                        </Badge>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </AppBar>

            {/* Modals */}
            <SignUpModal open={openSignUp} handleClose={() => setOpenSignUp(false)} />
            <LoginModal open={openLogin} handleClose={() => setOpenLogin(false)} />
            <CartDrawer open={drawerOpen} handleClose={handleDrawerClose} />
            <Outlet />
        </Box>
    );
}

export default Navbar;
