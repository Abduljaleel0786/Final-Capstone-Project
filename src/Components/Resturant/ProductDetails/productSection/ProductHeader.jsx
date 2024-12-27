import React, { useState } from 'react';
import { Box, Typography, Grid, Stack, Button, Dialog, Card, CardContent, CardMedia, TextField, Tabs, Tab } from '@mui/material';
import { Breadcrumbs, Link } from '@mui/material';
import { Icon } from '@iconify/react';
import StarIcon from '@mui/icons-material/Star';
import InfoIcon from '@mui/icons-material/Info';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const ProductHeader = () => {
  const [openDeliveryModal, setOpenDeliveryModal] = useState(false);
  const [value, setValue] = useState(0); // for Tabs
  
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
      {/* Breadcrumb Navigation */}
      <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: '1rem', paddingLeft: '10px' }}>
        <Link underline="hover" color="inherit" href="#">Homepage</Link>
        <Link underline="hover" color="inherit" href="#">Lahore</Link>
        <Typography color="text.primary">Quetta Paratha - 111</Typography>
      </Breadcrumbs>

      {/* Main Card */}
      <Grid container alignItems="center" sx={{
        borderRadius: '8px',
        backgroundColor: '#fff',
        padding: '0.5rem',
        flexDirection: { xs: 'row', sm: 'row' }
      }}>
        <Grid item xs="auto">
          <Box component="img" src="QuettaFood.jpg" alt="Quetta Paratha" sx={{
            width: { xs: '150px', sm: '180px' },
            height: { xs: '150px', sm: '180px' },
            borderRadius: '8px',
            objectFit: 'cover'
          }} />
        </Grid>
        <Grid item xs>
          <span className="ps-3" style={{ fontSize: '0.9rem' }}>Beverages <Icon icon="lucide:dot" width="18px" height="18px" /> Pakistani</span>
          <Stack spacing={0.5} sx={{ paddingLeft: { xs: '0', sm: '1rem' } }}>
            <Typography variant="h2" fontWeight="bold" sx={{ color: '#000', fontSize: { xs: '1.5rem', sm: '2rem' }, lineHeight: 1.2 }}>
              Quetta <span style={{ fontWeight: 700 }}>Paratha</span> — <span style={{ fontWeight: 900 }}>111</span>
            </Typography>
            <Box sx={{
              display: 'flex', flexDirection: { xs: 'row', sm: 'row' }, gap: { xs: '5px', sm: '15px' }, alignItems: 'center'
            }}>
              <Typography variant="body2" sx={{
                color: '#FF2B85',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                cursor: 'pointer'
              }} onClick={handleOpenDeliveryModal}>
                <Icon className="text-black" icon="humbleicons:bike" width="18px" height="18px" /> Free delivery{" "}
                <span style={{ textDecoration: 'line-through', color: '#888', marginRight: '10px' }}>Rs. 199</span>
              </Typography>
              <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', color: '#888', gap: '5px' }}>
                <Icon icon="ph:dot" width="20px" height="20px" />
                <Icon className="pb-1" icon="ci:shopping-bag-02" width="20" height="20" />
                Min. order Rs. 249
              </Typography>
            </Box>
            <Box sx={{
              display: 'flex', flexDirection: { xs: 'row', sm: 'row' }, gap: { xs: '5px', sm: '15px' }, alignItems: 'center'
            }}>
              <Stack direction="row" alignItems="center" spacing={0.5}>
                <StarIcon sx={{ color: 'orange', fontSize: '1rem' }} />
                <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>
                  3.7/5 <span style={{ color: '#888', fontWeight: 'normal' }}>(500+)</span>
                </Typography>
                <Button variant="text" size="small" sx={{
                  textTransform: 'none', fontSize: '0.9rem', color: 'black', cursor: 'pointer'
                }}>See reviews</Button>
              </Stack>
              <Typography variant="body2" sx={{
                color: '#888', cursor: 'pointer', '&:hover': { color: '#000' }, fontSize: '0.9rem', display: 'flex', alignItems: 'center'
              }}>
                <InfoIcon sx={{ marginRight: '5px' }} />
                More info
              </Typography>
            </Box>
          </Stack>
        </Grid>
      </Grid>

      {/* Delivery Modal */}
      <Dialog open={openDeliveryModal} onClose={handleCloseDeliveryModal}>
        <Box display="flex" justifyContent="center" p={2}>
          <Card sx={{ maxWidth: 500, position: 'relative' }}>
            <CloseIcon aria-label="close" onClick={handleCloseDeliveryModal} sx={{
              position: 'absolute', top: 8, right: 8, backgroundColor: '#f1f1f1', color: '#000', borderRadius: '100%',
              width: '30px', height: '30px', '&:hover': { backgroundColor: '#e0e0e0' }
            }} />
            <CardContent>
              <Box display="flex"><Typography variant="h4">Quetta Paratha – <span style={{ fontWeight: 'bold' }}>111</span></Typography></Box>
              <Box mt={2}><Box display="flex" alignItems="center" color="black"><AccessTimeIcon /><Typography variant="body1" fontWeight="bold" paddingLeft={"10px"}>Now Open</Typography></Box>
                <Typography variant="body2" color="textSecondary">Monday – Sunday</Typography>
                <Typography variant="body2" color="textSecondary">00:00 – 23:59</Typography>
              </Box>
              <Box mt={2} display="flex" alignItems="center"><i className="fas fa-map-marker-alt" style={{ color: 'red', marginRight: 8 }}></i><Typography variant="body2" color="textPrimary"><LocationOnIcon /> Market, Cavalry Ground.</Typography></Box>
              <Box mt={2}><CardMedia component="img" height="140" src="QuettaMap.jpg" alt="Map showing the location of Mini Market, Cavalry Ground with nearby landmarks and streets." /></Box>
              <Box mt={2}><Typography variant="body1" fontWeight="bold">Delivery fee</Typography><Typography variant="body2" color="textSecondary">Delivery fee is charged based on time of day, distance, and surge conditions</Typography></Box>
              <Box mt={2}><Typography variant="body1" fontWeight="bold">Minimum order</Typography><Typography variant="body2" color="textSecondary">For orders below Rs. 249.00, we charge a small order fee.</Typography></Box>
            </CardContent>
          </Card>
        </Box>
      </Dialog>

      {/* Search and Tabs Section */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row', sm: 'row' }, gap: 6, mt: 4, width: '100%' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', width: 'auto' }}>
          <Box sx={{ backgroundColor: '#F7F7F7', borderRadius: '30px', display: 'flex', alignItems: 'center', width: '100%' }}>
            <SearchIcon className="ms-2" />
            <TextField variant="standard" placeholder="Search in menu" sx={{ paddingLeft: '10px', width: '100%', maxWidth: '350px' }} />
          </Box>
        </Box>

        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Tabs value={value} onChange={handleTabChange} textColor="inherit" variant="scrollable" scrollButtons="auto" sx={{ width: '100%' }}>
            {/* Tabs for filtering */}
            <Tab label={<span style={{ fontSize: '14px', fontWeight: 'normal' }}>Popular <span style={{ fontSize: '18px', fontWeight: 'bold' }}>(6)</span></span>} />
            <Tab label={<span style={{ fontSize: '14px', fontWeight: 'normal' }}>Summer Deals & Discounts <span style={{ fontSize: '18px', fontWeight: 'bold' }}>(1)</span></span>} />
            <Tab label={<span style={{ fontSize: '14px', fontWeight: 'normal' }}>Anda <span style={{ fontSize: '18px', fontWeight: 'bold' }}>(4)</span></span>} />
            <Tab label={<span style={{ fontSize: '14px', fontWeight: 'normal' }}>Paratha <span style={{ fontSize: '18px', fontWeight: 'bold' }}>(27)</span></span>} />
            <Tab label={<span style={{ fontSize: '14px', fontWeight: 'normal' }}>Hot Beverages <span style={{ fontSize: '18px', fontWeight: 'bold' }}>(24)</span></span>} />
          </Tabs>
        </Box>
      </Box>
    </Box>
  );
}

export default ProductHeader;
