import React from 'react'
import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material';
import LunchImg from '../../../Images/Lunch.webp';

const LunchPage = () => {
    return (

        <Box className=' mt-5 pt-5'>

            <Grid container sx={{ pt: 6, mb: 25, }}>

                <Grid className=' container' item xs={12} sx={{ pl: { xs: 2, sm: 5 }, mb: 3 }}>

                    <Typography  variant="h4" textAlign={{  xs: 'center', sm: 'left' }} >

                        <b>Take your office out to lunch</b>

                    </Typography>

                </Grid>

                <Grid item xs={12} sx={{ position: 'relative' }}>

                    {/* Background Image Section */}

                    <Box sx={{ height: { xs: '40vh', sm: '50vh', md: '50vh' }, width: '100%', backgroundImage: `url(${LunchImg})`, backgroundSize: 'cover', backgroundPosition: 'center', }} />

                    {/* Card Section */}

                    <Grid item xs={12} sm={8} md={6} sx={{ position: 'absolute', top: { xs: '52%', sm: '62%', md: '69%' }, left: { xs: '3%', sm: '10%', md: '15%' }, display: 'flex', alignItems: 'center', }} >

                        <Card sx={{ mt: 1, p: 1, borderRadius: 2, width: { xs: '95%', sm: '80%', md: '70%' }, }}>

                            <CardContent>

                                <Typography variant="h5" fontSize={{ xs: '20px', md: '24px' }}>
                                foodpanda for business
                                </Typography>

                                <Typography variant="body1" sx={{ py: 3, fontSize: { xs: '14px', sm: '16px' }, }}>

                                Order lunch or fuel for work-from-home, late nights in the office, corporate events, client meetings, and much more.

                                </Typography>

            

                                <Button

                                    variant="contained" sx={{ py: 1, backgroundColor: '#e21b70', }} > Get started

                                </Button>

                            </CardContent>
                        </Card>

                    </Grid>

                </Grid>

            </Grid>

        </Box>




    )
}

export default LunchPage