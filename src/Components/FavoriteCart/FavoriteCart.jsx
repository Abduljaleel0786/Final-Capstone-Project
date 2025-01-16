import React, { useState } from "react";
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemAvatar,
  Avatar,
  Modal,
  TextField,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { addProduct } from "../Slices/productSlice";


const FavoriteCart = ({ open, handleClose }) => {
  const items = useSelector((state) => state.favorite.items);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const dispach =useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleOpenModal = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const onSubmit = (data) => {
    console.log("Form submitted with data:", { ...data, product: selectedItem });
    setModalOpen(false);
    alert("Product added to cart successfully!");
  };

  return (
    <>
      <Drawer anchor="right" open={open} onClose={handleClose}>
        <Box sx={{ width: 300 }} role="presentation">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "16px",
            }}
          >
            <Typography variant="h6">Favorite Cart</Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider />
          <List>
            {items && items.length > 0 ? (
              items.map((item, index) => (
                <ListItem key={index} sx={{ display: "flex", alignItems: "center" }}>
                  <ListItemAvatar>
                    <Avatar src={item.strMealThumb} alt={item.strMeal} />
                  </ListItemAvatar>
                  <ListItemText primary={item.strMeal} />
                  <IconButton
                    color="primary"
                    onClick={() => handleOpenModal(item)}
                    title="Add to Cart"
                  >
                    <AddShoppingCartIcon />
                  </IconButton>
                </ListItem>
              ))
            ) : (
              <Typography sx={{ padding: "16px", textAlign: "center" }}>
                Your cart is empty.
              </Typography>
            )}
          </List>
        </Box>
      </Drawer>

      {/* Add to Cart Modal */}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            p: 4,
            backgroundColor: "white",
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: "16px" }}>Fill this form for product added</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              fullWidth
              label="Name"
              {...register("name", {
                required: "Name is required",
                pattern: {
                  value: /^[A-Za-z ]+$/,
                  message: "Name should only contain letters",
                },
              })}
              error={!!errors.name}
              helperText={errors.name?.message}
              sx={{ marginBottom: "16px" }}
            />

            <TextField
              fullWidth
              label="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Please enter a valid email",
                },
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
              sx={{ marginBottom: "16px" }}
            />

            <TextField
              fullWidth
              label="Phone"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Please enter a valid 10-digit phone number",
                },
              })}
              error={!!errors.phone}
              helperText={errors.phone?.message}
              sx={{ marginBottom: "16px" }}
            />

            <TextField
              fullWidth
              label="Address"
              {...register("address", { required: "Address is required" })}
              error={!!errors.address}
              helperText={errors.address?.message}
              sx={{ marginBottom: "16px" }}
            />

            <Button onClick={(()=>dispach(addProduct(selectedItem)))}
              type="submit"
              style={{
                backgroundColor: "#ec008c",
                color: "white",
                marginTop: "16px",
                width: "100%",
              }}
            >
              Add to Cart
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default FavoriteCart;
