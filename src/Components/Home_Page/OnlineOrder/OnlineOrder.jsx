import React from 'react';
import { Container, Grid, Typography, Box, Button } from '@mui/material';
import Mobile from '../../../Images/home-foodpanda-apps.webp';
import AppGallery from '../../../Images/appgalarey.png';
import PlayStore from '../../../Images/playstore.png';
import Scanner from '../../../Images/scanner.png';
import AppleIcon from '@mui/icons-material/Apple';

const OnlineOrder = () => {
  return (
    <Box className="container">
      <Typography
        variant="h3"
        className="text-start font-weight-bold mb-4"
      >
        Put us in your pocket
      </Typography>

      <Box
        style={{ backgroundColor: '#c21760', width: '100%',  height: '70%' }}
        className="position-relative rounded-5 p-4"
      >
        <Grid container alignItems="center" spacing={4}>
          {/* Text Section */}
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <Typography
              className="text-white py-2 fs-4"
            >
              Download the food and groceries you love
            </Typography>
            <Box className="d-flex align-items-center mb-2 mt-3">
              <Box className="border me-3">
                <img className="p-2 d-none d-lg-block d-md-block" src={Scanner} alt="Scanner" style={{ maxWidth: '100px' }} />
              </Box>
              <Typography
                className="text-white"
      
              >
                It's all at your fingertips – the restaurants and <br /> shops you love. Find the right food and <br/> groceries to suit your mood, and make the <br /> first bite last. Go ahead, download us.
              </Typography>
            </Box>

            {/* Buttons */}

            <Box className="py-4 mb-3">

              <Grid container spacing={1} justify="center">

                {/* App Store Button */}
                <Grid item xs={12} sm={4} md={4}>
                  <Button
                    variant="contained"
                    color="primary"
                  
                    className="d-flex align-items-center rounded-3 w-100"
                    style={{ backgroundColor: 'black', padding: '5px 0px' }}
                  >
                    < AppleIcon />
                    <Box ml={2}>
                      <Typography style={{fontSize:"10px"}} className="text-white" variant="">
                        Download on the
                      </Typography>
                      <Typography style={{fontSize:"15px"}} className="text-white font-weight-bold">
                        App Store
                      </Typography>
                    </Box>
                  </Button>
                </Grid>

                {/* Google Play Button */}
                <Grid item xs={12} sm={4} md={4}>
                  <Button
                    variant="contained"
                    color="primary"
                 
                    className="d-flex align-items-center rounded-3 w-100"
                    style={{ backgroundColor: 'black', padding: '10px 0px' }}
                  >
                      <Box component="img" src={ PlayStore} alt="AppGallery" width="30px" />
                  
                    <Box ml={2}>
                      <Typography style={{fontSize:"10px"}} className="text-white" variant="body2">
                        Get it on
                      </Typography>
                      <Typography style={{fontSize:"15px"}} className="text-white font-weight-bold">
                        Google Play
                      </Typography>
                    </Box>
                  </Button>
                </Grid>

                {/* AppGallery Button */}
                <Grid item xs={12} sm={4} md={4}>
                  <Button 
                    variant="contained"
                    color="primary"
                    className="d-flex align-items-center rounded-3 w-100 "
                    style={{ backgroundColor: 'black', padding: '10px 0px' }}
                  >
                    <Box component="img" src={AppGallery} alt="AppGallery" width="30px" />
                    <Box ml={2}>
                      <Typography style={{fontSize:"10px"}} className="text-white" variant="body1">
                        Explore it on
                      </Typography>
                      <Typography style={{fontSize:"15px"}} className="text-white font-weight-bold">
                        AppGallery
                      </Typography>
                    </Box>
                  </Button>
                </Grid>
              </Grid>
            </Box>

          </Grid>

          {/* Mobile Image Section */}
          <Grid
            item
            xs={12}
            md={6}
            order={{ xs: 2, md: 2 }}
            className="position-relative"
          >
            <Box
              className="position-absolute top-50 start-50 translate-middle mt-5 "
              component="img"
              src={Mobile}
              alt="Mobile App"
              style={{
                position: 'absolute',
                width: '100%',
                height:'auto',
               
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default OnlineOrder;
