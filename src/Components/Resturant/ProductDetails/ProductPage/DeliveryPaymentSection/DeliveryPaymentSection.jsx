import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Button,
  ButtonGroup,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeProduct } from "../../../../Slices/productSlice";

const DeliveryPaymentSection = () => {
  const items = useSelector((state) => state.products.items);
  const dispatch = useDispatch();

  // Calculate total price of the cart
  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Box className=' mt-5'
      sx={{
        flex: 1,
        border: "1px solid #e0e0e0",
        borderRadius: 3,
        boxShadow: 3,
        padding: 3,
        textAlign: "center",
        minHeight: "750px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#fafafa",
      }}
    >
      {/* Delivery and Pick-up Buttons */}
      <Box
        sx={{
          display: "flex",
          gap: 3,
          backgroundColor: "#ffffff",
          padding: 2,
          borderRadius: 2,
          justifyContent: "center",
          boxShadow: 1,
          flexWrap: "wrap", // Enables wrapping for smaller screens
        }}
      >
        <Button
          sx={{
            textTransform: "none",
            fontWeight: "bold",
            border: "1px solid #ddd",
            borderRadius: 2,
            padding: "15px 40px", // Adjust padding for responsiveness
            backgroundColor: "#4CAF50",
            color: "white",
            "&:hover": {
              backgroundColor: "#45a049",
            },
            width: { xs: "100%", sm: "auto" }, // Full width on small screens
          }}
        >
          Delivery
        </Button>

        <Button
          sx={{
            textTransform: "none",
            fontWeight: "bold",
            border: "1px solid #ddd",
            borderRadius: 2,
            padding: "15px 40px", // Adjust padding for responsiveness
            backgroundColor: "#ff9800",
            color: "white",
            "&:hover": {
              backgroundColor: "#fb8c00",
            },
            width: { xs: "100%", sm: "auto" }, // Full width on small screens
          }}
        >
          Pick-up
        </Button>
      </Box>

      {/* Cart Items Section */}
      <List sx={{ marginTop: 2 }}>
        {items && items.length > 0 ? (
          items.map((item, index) => (
            <ListItem
              key={index}
              sx={{
                paddingY: 1,
                borderBottom: "1px solid #f0f0f0",
                flexWrap: "wrap", // Ensures content wraps on smaller screens
              }}
            >
              <ListItemAvatar>
                <Avatar src={item.strMealThumb} alt={item.strMeal} />
              </ListItemAvatar>
              <ListItemText
                primary={item.strMeal}
                sx={{
                  color: "#333",
                  fontWeight: "bold",
                  maxWidth: "60%", // Restricts width for text overflow
                }}
              />
              <ButtonGroup
                variant="text"
                aria-label="Quantity button group"
                sx={{ alignItems: "center", flexWrap: "wrap" }}
              >
                <Button
                  onClick={() => dispatch(decreaseQuantity(item))}
                  sx={{ color: "#d32f2f" }}
                >
                  <RemoveIcon />
                </Button>
                <Button sx={{ width: 40, fontWeight: "bold" }}>{item.quantity}</Button>
                <Button
                  onClick={() => dispatch(increaseQuantity(item))}
                  sx={{ color: "#388e3c" }}
                >
                  <AddIcon />
                </Button>
              </ButtonGroup>

              <IconButton
                onClick={() => dispatch(removeProduct(item))}
                sx={{ color: "#d32f2f", marginLeft: 2 }}
                aria-label="remove product"
              >
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))
        ) : (
          <Typography
            sx={{ padding: 2, textAlign: "center", color: "#888" }}
          >
            Your cart is empty.
          </Typography>
        )}
      </List>

      {/* Total Section */}
      <Box sx={{ padding: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap", // Enables wrapping for smaller screens
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ color: "#333" }}
            >
              Total
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                marginY: 1,
                fontSize: "0.875rem",
                paddingLeft: "5px",
                fontWeight: "normal",
              }}
            >
              (incl. fees and tax)
            </Typography>
          </Box>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{ fontWeight: "bold" }}
          >
            Rs. {totalPrice}
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={{
            marginTop: 2,
            backgroundColor: "#1976d2",
            color: "white",
            cursor: "pointer",
            width: "100%",
            padding: "16px",
            "&:hover": {
              backgroundColor: "#1565c0",
            },
          }}
        >
          Review payment and address
        </Button>
      </Box>
    </Box>
  );
};

export default DeliveryPaymentSection;
