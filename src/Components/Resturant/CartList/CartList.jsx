import React from 'react';
import { Drawer, Box, Typography, IconButton, List, ListItem, ListItemText, Divider } from '@mui/material';
import { Icon } from '@iconify/react';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';





function CartList({ open, handleClose }) {

  const {items} = useSelector((state) => state.products);

  console.log(items,'dfsx');


  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={handleClose}
    >
      <Box sx={{ width: 250 }} role="presentation" onClick={handleClose}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px' }}>
          <Typography variant="h6">Shopping Cart</Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <List>
          <ListItem>
            <ListItemText primary="Item 1" secondary="Quantity: 1" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Item 2" secondary="Quantity: 2" />
          </ListItem>
       
        </List>
      </Box>
    </Drawer>
  );
}

export default CartList;
