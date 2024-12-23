import React from 'react';
import { Drawer, Box, Typography, IconButton, List, ListItem, ListItemText, Divider, ListItemAvatar, Avatar, Button, ButtonGroup } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { decreaseQuantity, increaseQuantity } from '../../Slices/productSlice';

function CartList({ open, handleClose }) {
  const items = useSelector((state) => state.products.items);
  const dispatch = useDispatch();

  return (
    <Drawer anchor="right" open={open} onClose={handleClose}>
      <Box sx={{ width: 300 }} role="presentation">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px' }}>
          <Typography variant="h6">Shopping Cart</Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider />

        <List>
          {items && items.length > 0 ? (
            items.map((item, index) => (
              <ListItem key={index}>
                <ListItemAvatar>
                  <Avatar src={item.strMealThumb} alt={item.strMeal} />
                </ListItemAvatar>
                <ListItemText primary={item.strMeal} />

                <ButtonGroup variant="text" aria-label="Basic button group">
                  <Button onClick={() => dispatch(decreaseQuantity(item))}>
                    <RemoveIcon />
                  </Button>
                  <Button>{item.quantity}</Button>
                  <Button onClick={() => dispatch(increaseQuantity(item))}>
                    <AddIcon />
                  </Button>
                </ButtonGroup>
              </ListItem>
            ))
          ) : (
            <Typography sx={{ padding: '16px', textAlign: 'center' }}>Your cart is empty.</Typography>
          )}
        </List>
      </Box>
    </Drawer>
  );
}

export default CartList;
