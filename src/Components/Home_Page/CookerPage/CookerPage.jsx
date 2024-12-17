import React from 'react';
import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material';
import Cooker from '../../../Images/Cooker.webp';

const CookerPage = () => {
  return (
    <Box>

      <Grid container sx={{  pt: 6, mb: 25, }}>

        <Grid item xs={12} sx={{ pl: { xs: 2, sm: 5 }, mb: 3 }}>

          <Typography variant="h4" textAlign={{ xs: 'center', sm: 'left' }}>

            <b>You prepare the food, we handle the rest</b>

          </Typography>

        </Grid>

        <Grid item xs={12} sx={{ position: 'relative' }}>

          {/* Background Image Section */}

          <Box sx={{ height: { xs: '40vh', sm: '50vh', md: '60vh' }, width: '100%',  backgroundImage: `url(${Cooker})`, backgroundSize: 'cover',backgroundPosition: 'center',}}/>

          {/* Card Section */}

          <Grid item xs={12} sm={8} md={6}sx={{ position: 'absolute', top: { xs: '52%', sm: '62%', md: '69%' }, left: { xs: '3%', sm: '10%', md: '15%' },display: 'flex', alignItems: 'center', }} >

            <Card sx={{  mt: 1, p: 1, borderRadius: 2, width: { xs: '95%', sm: '80%', md: '70%' }, }}>

              <CardContent>

                <Typography variant="h5" fontSize={{ xs: '20px', md: '24px' }}>
                  List your restaurant or shop on foodpanda
                </Typography>

                <Typography variant="body1" sx={{ py: 2,fontSize: { xs: '14px', sm: '16px' }, }}>

                  Would you like millions of new customers to enjoy your amazing food and
                  groceries? So would we!

                </Typography>

                <Typography variant="body2" sx={{ fontSize: { xs: '13px', sm: '14px', md: '16px' }, }}>

                  It's simple: we list your menu and product lists online, help you process
                  orders, pick them up, and deliver them to hungry pandas – in a heartbeat!

                </Typography>
                <Typography

                  sx={{ py: 2, fontSize: { xs: '13px', sm: '14px', md: '16px' }, }} variant="body2" >
                  Interested? Let's start our partnership today!

                </Typography>

                <Button

                  variant="contained" sx={{ py: 1, backgroundColor: '#e21b70',}} > Get started

                </Button>

              </CardContent>
            </Card>
            
          </Grid>

        </Grid>

      </Grid>

    </Box>
  );
};

export default CookerPage;
