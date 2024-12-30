import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Stack, Button, Dialog, Card, CardContent, CardMedia, TextField, Tabs, Tab } from '@mui/material';
import { Breadcrumbs, } from '@mui/material';
import { Icon } from '@iconify/react';
import StarIcon from '@mui/icons-material/Star';
import InfoIcon from '@mui/icons-material/Info';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { Link, useLocation } from 'react-router-dom';

const ProductHeader = () => {
  const [openDeliveryModal, setOpenDeliveryModal] = useState(false);
  const [value, setValue] = useState(0); // for Tabs

  const location = useLocation();
  const [restaurant, setRestaurant] = useState({ image: '', name: '' });

  useEffect(() => {
    // Extract state passed from navigation
    if (location.state) {
      setRestaurant({
        image: location.state.image || 'defaultImage.jpg',
        name: location.state.name || 'Default Name'
      });
    }
  }, [location.state]);

  const handleOpenDeliveryModal = () => setOpenDeliveryModal(true);
  const handleCloseDeliveryModal = () => setOpenDeliveryModal(false);
  const handleTabChange = (event, newValue) => setValue(newValue);

  return (
    <Box sx={{
      paddingLeft: { xs: '20px', sm: '50px', md: '120px' },
      marginTop: '20px',
      marginLeft: { xs: '0', sm: '20px', md: '40px' },
      backgroundColor: '#fff',
      maxWidth: '90%',
      marginRight: 'auto',
      paddingBottom: '20px',
      width: '100%',
    }}>
  <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: '1rem', paddingLeft: '10px' }}>
  <Link to='/'>Home</Link>
  <Link 
    to="/Restaurant" 
    underline="hover" 
    color="primary" 
    sx={{ fontWeight: 500, fontSize: '1rem', transition: 'color 0.3s' }}
  >
    Restaurant
  </Link>
  <Typography color="text.primary" sx={{ fontWeight: 600, fontSize: '1rem' }}>
    {restaurant.name}
  </Typography>
</Breadcrumbs>





      {/* Main Card */}
      <Grid container alignItems="center" sx={{
        borderRadius: '8px',
        backgroundColor: '#fff',
        padding: '0.5rem',
        flexDirection: { xs: 'row', sm: 'row' }
      }}>
        <Grid item xs="auto">
          <Box component="img" src={restaurant.image} alt={restaurant.name} sx={{
            width: { xs: '150px', sm: '180px' },
            height: { xs: '150px', sm: '180px' },
            borderRadius: '8px',
            objectFit: 'cover'
          }} />
        </Grid>
        <Grid item xs>
          <Stack spacing={0.5} sx={{ paddingLeft: { xs: '0', sm: '1rem' } }}>
            <Typography variant="h2" fontWeight="bold" sx={{ color: '#000', fontSize: { xs: '1.5rem', sm: '2rem' }, lineHeight: 1.2 }}>
              {restaurant.name}
            </Typography>
            <Box sx={{
              display: 'flex', flexDirection: { xs: 'row', sm: 'row' }, gap: { xs: '5px', sm: '15px' }, alignItems: 'center'
            }}>
              <Stack direction="row" alignItems="center" spacing={0.5}>
                <StarIcon sx={{ color: 'orange', fontSize: '1rem' }} />
                <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>
                  4.5/5 <span style={{ color: '#888', fontWeight: 'normal' }}>(200+)</span>
                </Typography>
              </Stack>
            </Box>
          </Stack>
        </Grid>
      </Grid>

      {/* Tabs Section */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row', sm: 'row' }, gap: 6, mt: 4, width: '100%' }}>
        <Tabs value={value} onChange={handleTabChange} textColor="inherit" variant="scrollable" scrollButtons="auto" sx={{ width: '100%' }}>
          <Tab label="Popular (6)" />
          <Tab label="Deals (2)" />
          <Tab label="Paratha (10)" />
          <Tab label="Beverages (5)" />
        </Tabs>
      </Box>
    </Box>
  );
}

export default ProductHeader;
