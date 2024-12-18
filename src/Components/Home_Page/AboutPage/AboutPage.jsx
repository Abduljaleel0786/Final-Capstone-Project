import React from "react";
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Link } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DoneIcon from '@mui/icons-material/Done';

const AboutPage = () => {
  return (
    

  
        <Box className="container">
        <Box >
          <Typography variant="h4" gutterBottom>
            Order food and groceries online from the best restaurants and shops on foodpanda
          </Typography>
          <Typography variant="body1" paragraph>
            Are you hungry? Did you have a long and stressful day? Interested in getting a cheesy pizza
            delivered to your office or looking to avoid the weekly shop? Then foodpanda Pakistan is the
            right destination for you! foodpanda offers you a long and detailed list of the best
            restaurants and shops near you to help make your every day easier.
          </Typography>
    
          <Typography variant="h5" gutterBottom>
            What's new?
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
             <DoneIcon style={{color:"#e21b70"}}/>
              </ListItemIcon>
              <ListItemText primary="Wide variety of restaurants and shops, an abundance of cuisines & products." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
              <DoneIcon style={{color:"#e21b70"}}/>
              </ListItemIcon>
              <ListItemText primary="High quality delivery service." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
              <DoneIcon style={{color:"#e21b70"}}/>
              </ListItemIcon>
              <ListItemText primary="Live chat feature to give App users instant help when they need it." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
              <DoneIcon style={{color:"#e21b70"}}/>
              </ListItemIcon>
              <ListItemText primary="NEW: foodpanda grocery delivery! Discover the best shops, pharmacies, bakeries and more near you." />
            </ListItem>
          </List>
    
          <Typography className=" fw-bold fs-4" variant="h5" gutterBottom>
            Frequently Asked Questions
          </Typography>
          <Typography className=" fw-bold fs-5" variant="subtitle1" gutterBottom>
            How can I get foodpanda delivery?
          </Typography>
          <Typography variant="body2">
            To get foodpanda delivery, simply locate the restaurants and shops near you by typing in your
            address, browse through a variety of restaurants and cuisines, check menus and prices, choose
            your dishes and add them to the basket. Now you only need to checkout and make the payment.
            Soon your delicious food will arrive at your doorstep!
          </Typography>
        </Box>
    
    <Box sx={{  fontFamily: "Arial, sans-serif" }}>
    <Typography className=" fw-bold py-3" variant="h6" gutterBottom>
      Which takeout restaurants open now near me?
    </Typography>
    <Typography variant="body1" paragraph>
      You can check which takeout restaurants are open now near you by simply typing your address
      in the location bar on foodpanda and pressing search. You will see all the available
      restaurants and shops that deliver to your area.
    </Typography>
    
    <Typography className=" fw-bold py-2" variant="h6" gutterBottom>
      Does foodpanda deliver 24 hours?
    </Typography>
    <Typography variant="body1" paragraph>
      Yes, foodpanda in Pakistan delivers 24 hours. However, many restaurants may be unavailable
      for a late-night delivery. Please check which places in Pakistan deliver to you within 24
      hours by using your address. You can also order groceries 24 hours a day via pandamart.
    </Typography>
    
    <Typography className=" fw-bold py-2" variant="h6" gutterBottom>
      Can you pay cash for foodpanda?
    </Typography>
    <Typography variant="body1" >
      Yes, you can pay cash on delivery for foodpanda in Pakistan.
    </Typography>
    
    <Typography  className=" fw-bold py-2" variant="h6" gutterBottom>
      How can I pay foodpanda online?
    </Typography>
    <Typography variant="body1" >
      You can pay online while ordering at foodpanda Pakistan by using a credit or debit card or
      PayPal.
    </Typography>
    
    <Typography className=" fw-bold py-2" variant="h6" >
      Can I order foodpanda for someone else?
    </Typography>
    <Typography variant="body1" >
      Yes, foodpanda Pakistan allows you to place an order for someone else. During checkout, just
      update the name and delivery address of the person you're ordering for. Please keep in mind
      that if the delivery details are not correct and the order cannot be delivered, we won't be
      able to process a refund.
    </Typography>
    </Box>
    <Box sx={{  fontFamily: "Arial, sans-serif" }}>
          <Typography className=" fw-bold py-2" variant="h6" >
            How much does foodpanda charge for delivery?
          </Typography>
          <Typography variant="body1" >
            Delivery fee charged by foodpanda in Pakistan depends on many operational factors, most of
            all - location and the restaurant you are ordering from. You can always check the delivery
            fee while forming your order. Besides, you can filter the restaurants by clicking on the
            "Free Delivery" icon at the top of your restaurant listing.
          </Typography>
    
          <Typography className=" fw-bold py-2" variant="h6" >
            What restaurants let you order online?
          </Typography>
          <Typography variant="body1" >
            There are hundreds of restaurants on foodpanda Pakistan that let you order online. For
            example,{" "}
            <Link href="#" color="#e21b70" underline="hover">
              KFC
            </Link>
            ,{" "}
            <Link href="#" color="#e21b70" underline="hover">
              McDonald's
            </Link>
            ,{" "}
            <Link href="#" color="#e21b70" underline="hover">
              Pizza Hut
            </Link>
            ,{" "}
            <Link href="#" color="#e21b70" underline="hover">
              OPTP
            </Link>
            ,{" "}
            <Link href="#" color="#e21b70" underline="hover">
              Hardee's
            </Link>
            ,{" "}
            <Link href="#" color="#e21b70" underline="hover">
              Domino's
            </Link>
            ,{" "}
            <Link href="#" color="#e21b70" underline="hover">
              Kababjees
            </Link>{" "}
            and many-many more! In order to check all the restaurants near you that deliver, just type
            in your address and discover all the available places.
          </Typography>
    
          <Typography className=" fw-bold py-2" variant="h6" gutterBottom>
            Does foodpanda have a minimum order?
          </Typography>
          <Typography variant="body1" paragraph>
            Yes, many restaurants have a minimum order. The minimum order value depends on the
            restaurant you order from and is indicated during your ordering process.
          </Typography>
    
          <Typography className=" fw-bold py-2" variant="h6" gutterBottom>
            What is the difference between delivery and Pick-Up?
          </Typography>
          <Typography variant="body1" paragraph>
            If you choose delivery, a foodpanda rider will collect your order from the restaurant and
            take it to your chosen delivery address. If you choose Pick-Up, you can takeaway your food
            directly from the restaurant for extra savings – and to jump to the front of the queue.
            Pick-Up orders are available for restaurants only.
          </Typography>
    
          <Typography className=" fw-bold py-2" variant="h6" sx={{ marginTop: 2 }}>
            Order food and groceries online with foodpanda now and enjoy a great dining experience!
          </Typography>
        </Box>
        </Box>










  )
}

export default AboutPage