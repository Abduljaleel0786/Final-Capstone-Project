import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box, Button, Grid, Link, List, ListItem, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Logo from "../../../Images/Logo.jpeg";
import DeliveryImg from "../../../Images/DeliveryHero.jpeg";
import './index.css'



const Footer = () => {
  return (
    <>

      <Box className="container">
        <hr />
        <Box className="d-flex flex-wrap justify-content-between container py-3">
          <Typography className='custum text-decoration-none text-black'> Laos </Typography >  |    <Typography className='custum text-decoration-none text-black'> Cambodia </Typography >     | <Typography className='custum text-decoration-none text-black'> Myanmar </Typography>      | <Typography className='custum text-decoration-none text-black'> Thailand </Typography >     | <Typography className='custum text-decoration-none text-black'> Kong </Typography>      |  <Typography className='custum text-decoration-none text-black'> Taiwan </Typography>    |  <Typography className='custum text-decoration-none text-black'> Malaysia </Typography>    | <Typography className='custum text-decoration-none text-black'> Philippines </Typography>     |  <Typography className='custum text-decoration-none text-black'> Singapore </Typography>    | <Typography className='custum text-decoration-none text-black'> Bangladesh </Typography>
        </Box>
        <hr />
      </Box>
      <footer className="container py-3">
        
        <Box className="row">

          <Box className="col-md-3">
            <p className="mb-0">&copy; foodpanda</p>
          </Box>

          <Box className="col-md-3">
            <Typography variant="subtitle1">Press</Typography>
            <List sx={{ listStyleType: "none", padding: 0 }}>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  pandapay Terms and Conditions
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Security
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Careers
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Cashback Terms and Conditions
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Partner with Us
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  All cities
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  pandapro  Subscription Programmer
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Ramzan deals
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Areas delivered in Lahore
                </Link>
              </ListItem>
            </List>
          </Box>

          <Box className="col-md-3">
            <Typography variant="subtitle1">Help Center</Typography>
            <List sx={{ listStyleType: "none", padding: 0 }}>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum  text-decoration-none text-black'>
                  Terms and Conditions
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Download foodpanda Apps
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Suggest a Restaurant
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  All cuisines
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  pandago - Request a Rider
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Update on COVID-19 in Pakistan
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  foodpanda Home Chef
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Areas delivered in Karachi
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Areas delivered in Islamabad
                </Link>
              </ListItem>
            </List>
          </Box>

          <Box className="col-md-3">
            <Typography variant="subtitle1">Refunds with pandapay</Typography>
            <List sx={{ listStyleType: "none", padding: 0, }}>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Privacy policy
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Human rights policy
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Corporate Customer
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  foodpanda Magazine
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  foodpanda Vouchers & Coupons
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  pandamart Grocery Delivery
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Become an Affiliate
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Areas delivered in Gujranwala
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Areas delivered in Peshawar
                </Link>
              </ListItem>
            </List>
          </Box>
          
        </Box>
        <hr />
      </footer>

      <Box className="container ">
        <Box className='d-flex flex-wrap align-items-center justify-content-between'>

        <Grid item display="flex" alignItems="center" height="60px" xs={12} md={6} order={{ xs: 2, md: 1 }}>
          <img style={{ width: "30px" }} src={Logo} alt="Logo" />
          <Typography sx={{ color: '#e21b70', fontWeight: 'bold', fontSize: '24px' }}>
            foodpanda
          </Typography>
          <Typography className='mx-1 '> |</Typography>
          <img style={{ width: "180px" }} src={DeliveryImg} alt="" />
        </Grid>
      

        <Grid  item xs={12} md={6} order={{ xs: 1, md: 2 }} >
        <Box className='text-center '>
          <InstagramIcon style={{ border: "1px solid", borderRadius: "40px", padding: "5px" }} className='mx-2 fs-1 text-center' />
          <FacebookIcon style={{ border: "1px solid", borderRadius: "40px", padding: "5px" }} className='fs-1 text-center' />
          </Box>
        </Grid>


        </Box>

      </Box>



    </>
  );
};

export default Footer;
