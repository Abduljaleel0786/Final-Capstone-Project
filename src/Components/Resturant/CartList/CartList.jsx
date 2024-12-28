import React from 'react';
import { Drawer, Box, Typography, IconButton, List, ListItem, ListItemText, Divider, ListItemAvatar, Avatar, Button, ButtonGroup } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { decreaseQuantity, increaseQuantity, removeProduct } from '../../Slices/productSlice';

function CartList({ open, handleClose }) {
  const items = useSelector((state) => state.products.items);
  const dispatch = useDispatch();

  // Calculate the total price
  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Drawer anchor="right" open={open} onClose={handleClose}>
      <Box sx={{ width: 350, display: 'flex', flexDirection: 'column', height: '100%' }} role="presentation">
        {/* Header Section */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', backgroundColor: '#f5f5f5' }}>
          <Typography variant="h6">Shopping Cart</Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider />

        {/* Cart Items List */}
        <List sx={{ flexGrow: 1, overflowY: 'auto' }}>
          {items && items.length > 0 ? (
            items.map((item, index) => (
              <ListItem key={index} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px' }}>
                <ListItemAvatar>
                  <Avatar src={item.strMealThumb} alt={item.strMeal} />
                </ListItemAvatar>
                <ListItemText primary={item.strMeal}  sx={{ maxWidth: '150px' }} />
                
                <ButtonGroup variant="outlined" aria-label="quantity buttons">
                  <Button onClick={() => dispatch(decreaseQuantity(item))} sx={{ minWidth: '30px' }}>
                    <RemoveIcon />
                  </Button>
                  <Button sx={{ minWidth: '30px' }} disabled>{item.quantity}</Button>
                  <Button onClick={() => dispatch(increaseQuantity(item))} sx={{ minWidth: '30px' }}>
                    <AddIcon />
                  </Button>
                </ButtonGroup>

                <IconButton onClick={() => dispatch(removeProduct(item))} color="error" sx={{ marginLeft: '12px' }}>
                  <DeleteIcon />
                </IconButton>
              </ListItem>
            ))
          ) : (
            <Typography sx={{ padding: '16px', textAlign: 'center', fontStyle: 'italic' }}>Your cart is empty.</Typography>
          )}
        </List>

        <Divider />

        {/* Total Price Section */}
        {items.length > 0 && (
          <Box sx={{ padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6">Total Price:</Typography>
            <Typography variant="h6" color="primary">${totalPrice.toFixed(2)}</Typography>
          </Box>
        )}

        {/* Footer Section */}
        <Box sx={{ padding: '16px', textAlign: 'center'  }}>
          <Button sx={{backgroundColor:"#e01b6f"}} fullWidth variant="contained"  onClick={handleClose}>
            Proceed to Checkout
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
}

export default CartList;
