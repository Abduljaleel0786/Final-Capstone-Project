import { Box, Typography } from "@mui/material";
import Error from '../../Images/ErrorImg.jpg'

import React from "react";

const ErrorPage = () => {

   
    return (
        <Box
            sx={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                backgroundColor: "#f0f2f5",
                padding: 3,
            }}
        >
           
            <Box
                component="img"
                src={Error} 
                alt="Error Illustration"
                sx={{ maxWidth: "50%", height: "auto", mb: 3 }}
            />
            <Typography variant="h3" color="error" gutterBottom>
                Oops! Something went wrong.
            </Typography>
    
            
        </Box>
    );
};

export default ErrorPage;
