import React from 'react';
import { Box, Button, Grid, InputAdornment, TextField, Typography } from '@mui/material';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import hero from "../../Images/hero-img.webp";

const HeroSection = () => {
    return (
        <Box sx={{ backgroundColor: "#f7f7f7", display: 'flex', paddingTop: "60px" }}>
            <Grid container spacing={2}>
                {/* Left Section */}
                <Grid sx={{ marginTop: { xs: "40px", md: "140px" } }} item xs={12} md={7}>
                    <Box sx={{ padding: '20px', borderRadius: '10px' }}>
                        <Typography
                            sx={{
                                fontSize: { xs: '22px', md: '26px' },
                                fontWeight: 'bold',
                                color: '#333',
                                marginBottom: '20px',
                                marginLeft: "30px",
                            }}
                        >
                            It's the food and groceries you love, <br />
                            delivered
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: "10px" }}>
                            {/* Search Field */}
                            <TextField
                                sx={{
                                    width: '79%',
                                    backgroundColor: '#fff',
                                    padding: '10px',
                                    fontSize: '16px',
                                    borderRadius: '5px',
                                }}
                                type="text"
                                placeholder="Search for food"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <Button
                                                sx={{
                                                    color: 'black',
                                                    borderRadius: '50px',
                                                    cursor: 'pointer',
                                                }}
                                            >
                                                <GpsFixedIcon style={{ color: '#e21b70' }} />
                                                Locate Me
                                            </Button>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            {/* Find Food Button */}
                            <Button
                                sx={{
                                    fontSize: '16px',
                                    backgroundColor: '#e21b70',
                                    color: '#fff',
                                    borderRadius: '10px',
                                    cursor: 'pointer',
                                    padding: "12px",
                                    marginLeft: "10px",
                                }}
                            >
                                Find food
                            </Button>
                        </Box>
                    </Box>
                </Grid>
                {/* Right Section */}
                <Grid item xs={12} md={5}>
                    <Box
                        sx={{
                            backgroundImage: `url(${hero})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: { xs: '250px', md: '100%' },
                            borderRadius: '10px',
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default HeroSection;
