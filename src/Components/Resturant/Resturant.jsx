import React from "react";
import { Box, Typography, Container } from "@mui/material";
import heroImage from "../../Images/hero-img.webp";

const Resturant = () => {
    return (



        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#f8f9fa", padding: "50px 20px", minHeight: "300px", position: "relative", flexDirection: "column", }} >

         {/* Background Image */}

        <Box sx={{ position: "absolute", top: 0, right: 0, width: { xs: "100%", sm: "40%" }, height: "100%", backgroundImage: `url(${heroImage})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "right center", zIndex: 0, }} />

         {/* Text Section */}

            <Container sx={{zIndex: 1,position: "relative",color: "black",textAlign: { xs: "center", md: "left" },maxWidth: "600px", }} >


                <Typography variant="h3" component="h1" sx={{fontWeight: "bold",fontSize: { xs: "24px", sm: "32px", md: "50px" }, lineHeight: 1.2, }} >
                    Food and groceries delivery from <br />
                    Lahore's best restaurants and shops
                </Typography>

            </Container>
            
        </Box>
    );
};


export default Resturant;