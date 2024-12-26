import React from "react";
import { Box, Button, Typography } from "@mui/material";
// import HungryPanda from "../../../../../images/cartpanda.svg";

const DeliveryPaymentSection = () => {
  return (
    <Box
      sx={{
        flex: 1,
        border: "1px solid #ddd",
        borderRadius: 2,
        boxShadow: 2,
        padding: 2,
        textAlign: "center",
        height: "100%",
        minHeight: "750px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 2,
          backgroundColor: "#f9f9f9",
          padding: 1,
          borderRadius: 2,
          justifyContent: "center",
        }}
      >
        {/* Delivery Button */}
        <Button
          sx={{
            textTransform: "none",
            fontWeight: "normal",
            border: "1px solid #ddd",
            borderRadius: 2,
            padding: "15px 60px",
            "&.Mui-selected": {
              fontWeight: "bold",
            },
            color: "black",
          }}
        >
          Delivery
        </Button>

        {/* Pick-up Button */}
        <Button
          sx={{
            textTransform: "none",
            fontWeight: "normal",
            border: "1px solid #ddd",
            borderRadius: 2,
            padding: "15px 60px",
            "&.Mui-selected": {
              fontWeight: "bold",
            },
            color: "black",
          }}
        >
          Pick-up
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        {/* <Box
          component="img"
          src={HungryPanda}
          alt="Empty Cart"
          sx={{
            width: "100px",
            height: "100px",
            margin: "0 auto",
            display: "block",
          }}
        /> */}
        <Typography variant="h6" fontWeight="bold">
          Hungry?
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            marginY: 2,
            textAlign: "center",
          }}
        >
          You haven't added anything to your cart!
        </Typography>
      </Box>

      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="h6" fontWeight="bold">
              Total
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginY: 2, fontSize: "0.875rem", paddingLeft: "5px" }}
            >
              (incl. fees and tax)
            </Typography>
          </Box>
          <Typography variant="subtitle1" color="text.secondary">
            Rs. 0
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={{
            marginTop: 2,
            backgroundColor: "#ccc",
            cursor: "not-allowed",
            width: "100%",
          }}
        >
          Review payment and address
        </Button>
      </Box>
    </Box>
  );
};

export default DeliveryPaymentSection;