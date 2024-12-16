import React from 'react';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Container,
  TextField,
} from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mobile from '../../../Images/home-foodpanda-apps.webp';



const Footer = () => {
  return (
    <>
      {/* <Container className="text-center">
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h4">It's the food and groceries you love, delivered</Typography>
            <form noValidate autoComplete="off">
              <TextField
                variant="outlined"
                placeholder="Enter your address"
                fullWidth
                margin="normal"
              />
              <Button variant="contained" color="secondary">Locate Me</Button>
              <Button variant="contained" color="primary" style={{ marginLeft: '10px' }}>Find Food</Button>
            </form>
            <img src="path_to_panda_image" alt="Panda Mascot" style={{ maxWidth: '100%', height: 'auto' }} />
          </Grid>
        </Grid>
        <Typography variant="h6">You prepare the food, we handle the rest</Typography>
      </Container>
       */}
     

      {/* <div className="container py-5" style={{ backgroundColor: '#ff007f', color: 'white' }}>
        <div className="row align-items-center">
          <div className="col-md-6">
            <Typography variant="h4" gutterBottom>
              Put us in your pocket
            </Typography>
            <Typography variant="h6" gutterBottom>
              Download the food and groceries you love
            </Typography>
            <Typography variant="body1" gutterBottom>
              It's all at your fingertips – the restaurants and shops you love. Find the right food and groceries to suit your mood, and make the first bite last. Go ahead, download us.
            </Typography>
            <div className="d-flex gap-3">
              <img src="https://via.placeholder.com/100x50?text=App+Store" alt="App Store" style={{ cursor: 'pointer' }} />
              <img src="https://via.placeholder.com/100x50?text=Google+Play" alt="Google Play" style={{ cursor: 'pointer' }} />
              <img src="https://via.placeholder.com/100x50?text=AppGallery" alt="AppGallery" style={{ cursor: 'pointer' }} />
            </div>
          </div>
          <div className="col-md-6 text-center">
            <img src={Mobile} alt="Mobile App" className="img-fluid" />
          </div>
        </div>
      </div> */}

      {/* <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src="https://via.placeholder.com/600x300?text=Office+Lunch"
              alt="Office Lunch"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <Typography variant="h4" gutterBottom>
              Take your office out to lunch
            </Typography>
            <Typography variant="body1" gutterBottom>
              Order lunch or fuel for work-from-home, late nights in the office, corporate events, client meetings, and much more.
            </Typography>
            <Button variant="contained" color="secondary">
              Get started
            </Button>
          </div>
        </div>
      </div> */}

      {/* <div className="container mt-5">
        <Typography variant="h4" align="center" gutterBottom>
          Order food and groceries online from the best restaurants and shops on foodpanda
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Are you hungry? Did you have a long and stressful day? Interested in getting a cheesy pizza delivered to your office or looking to avoid the weekly shop? Then foodpanda Pakistan is the right destination for you! foodpanda offers you a long and detailed list of the best restaurants and shops near you to help make your every day easier.
        </Typography>

        <Typography variant="h5" align="center" gutterBottom>
          What's new?
        </Typography>
        <ul className="list-group">
          <li className="list-group-item">✓ Wide variety of restaurants and shops, an abundance of cuisines & products.</li>
          <li className="list-group-item">✓ High quality delivery service.</li>
          <li className="list-group-item">✓ Live chat feature to give App users instant help when they need it.</li>
          <li className="list-group-item">✓ NEW: foodpanda grocery delivery! Discover the best shops, pharmacies, bakeries and more near you.</li>
        </ul>

        <Typography variant="h5" align="center" gutterBottom>
          Frequently Asked Questions
        </Typography>

        <Typography variant="h6">How can I get foodpanda delivery?</Typography>
        <Typography variant="body1" gutterBottom>
          To get foodpanda delivery, simply locate the restaurants and shops near you by typing in your address, browse through a variety of restaurants and cuisines, check menus and prices, choose your dishes and add them to the basket. Now you only need to checkout and make the payment. Soon your delicious food will arrive at your doorstep!
        </Typography>

        <Typography variant="h6">Which takeout restaurants open now near me?</Typography>
        <Typography variant="body1" gutterBottom>
          You can check which takeout restaurants are open now near you by simply typing your address in the location bar on foodpanda and pressing search. You will see all the available restaurants and shops that deliver to your area.
        </Typography>

        <Typography variant="h6">Does foodpanda deliver 24 hours?</Typography>
        <Typography variant="body1" gutterBottom>
          Yes, foodpanda in Pakistan delivers 24 hours a day, ensuring that you can satisfy your cravings at any time. Whether it's a late-night snack or an early breakfast, foodpanda is here to help you get your food delivered right to your door.
        </Typography>

        <Typography variant="h6">What payment methods does foodpanda accept?</Typography>
        <Typography variant="body1" gutterBottom>
          foodpanda accepts various payment methods including credit/debit cards, cash on delivery, and mobile wallets, making it convenient for you to pay in the way that suits you best.
        </Typography>

        <Typography variant="h6">How can I track my order?</Typography>
        <Typography variant="body1" gutterBottom>
          Once you place your order, you can track its status in real-time through the foodpanda app. You'll receive updates on your order's progress, from preparation to delivery.
        </Typography>

        <Typography variant="h6">What should I do if my order is late?</Typography>
        <Typography variant="body1" gutterBottom>
          If your order is late, you can contact foodpanda's customer support through the app for assistance. They will help you resolve any issues and ensure you receive your order as soon as possible.
        </Typography>
      </div> */}

      {/* <footer className="container-fluid bg-light py-3">
        <div className="row">
          <div className="col-md-3">
            <p className="mb-0">&copy; foodpanda</p>
          </div>
          <div className="col-md-3">
            <Typography variant="subtitle1">Press</Typography>
            <ul className="list-unstyled">
              <li><a href="#">pandapay Terms and Conditions</a></li>
              <li><a href="#">Security</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Cashback Terms and Conditions</a></li>
              <li><a href="#">Partner with Us</a></li>
              <li><a href="#">All cities</a></li>
              <li><a href="#">pandapro - Monthly Subscription Programme</a></li>
              <li><a href="#">Ramzan deals</a></li>
              <li><a href="#">Areas delivered in Lahore</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <Typography variant="subtitle1">Help Center</Typography>
            <ul className="list-unstyled">
              <li><a href="#">Terms and Conditions</a></li>
              <li><a href="#">Download foodpanda Apps</a></li>
              <li><a href="#">Suggest a Restaurant</a></li>
              <li><a href="#">All cuisines</a></li>
              <li><a href="#">pandago - Request a Rider</a></li>
              <li><a href="#">Update on COVID-19 in Pakistan</a></li>
              <li><a href="#">foodpanda Home Chef</a></li>
              <li><a href="#">Areas delivered in Karachi</a></li>
              <li><a href="#">Areas delivered in Islamabad</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <Typography variant="subtitle1">Refunds with pandapay</Typography>
            <ul className="list-unstyled">
              <li><a href="#">Privacy policy</a></li>
              <li><a href="#">Human rights policy</a></li>
              <li><a href="#">Corporate Customer</a></li>
              <li><a href="#">foodpanda Magazine</a></li>
              <li><a href="#">foodpanda Vouchers & Coupons</a></li>
              <li><a href="#">pandamart Grocery Delivery</a></li>
              <li><a href="#">Become an Affiliate</a></li>
              <li><a href="#">Areas delivered in Gujranwala</a></li>
              <li><a href="#">Areas delivered in Peshawar</a></li>
            </ul>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12 text-center">
            <Typography variant="subtitle1">Social Media</Typography>
            <ul className="list-inline">
              <li className="list-inline-item"><a href="#">Instagram</a></li>
              <li className="list-inline-item"><a href="#">Facebook</a></li>
            </ul>
          </div>
        </div>
      </footer> */}
      
    </>
  );
};

export default Footer;
