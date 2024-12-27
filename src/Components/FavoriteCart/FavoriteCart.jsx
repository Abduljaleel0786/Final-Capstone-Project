import React from "react";
import { Drawer, Box, Typography, IconButton, List, ListItem, ListItemText, Divider, ListItemAvatar, Avatar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";

const FavoriteCart = ({ open, handleClose }) => {
  const items = useSelector((state) => state.favorite.items);

  return (
    <Drawer anchor="right" open={open} onClose={handleClose}>
      <Box sx={{ width: 300 }} role="presentation">
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px" }}>
          <Typography variant="h6">Favorite Cart</Typography>
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
              </ListItem>
            ))
          ) : (
            <Typography sx={{ padding: "16px", textAlign: "center" }}>Your cart is empty.</Typography>
          )}
        </List>
      </Box>
    </Drawer>
  );
};

export default FavoriteCart;
