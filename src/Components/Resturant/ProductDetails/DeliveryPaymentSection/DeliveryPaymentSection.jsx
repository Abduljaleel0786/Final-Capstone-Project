// import React from "react";
// import { Box, Typography, IconButton, Button, ButtonGroup, Divider, List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';
// import { useDispatch, useSelector } from 'react-redux';
// import { decreaseQuantity, increaseQuantity } from '../../../Slices/productSlice';

// const DeliveryPaymentSection = () => {
//   const items = useSelector((state) => state.products.items);
//   const dispatch = useDispatch();

//   const handleClose = () => {
//     // Handle drawer close functionality
//   };

//   return (
//     <Box
//       sx={{
//         flex: 1,
//         border: "1px solid #ddd",
//         borderRadius: 2,
//         boxShadow: 2,
//         padding: 3,
//         textAlign: "center",
//         height: "100%",
//         minHeight: "750px",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "space-between",
//       }}
//     >
//       {/* Delivery and Pick-up Buttons */}
//       <Box
//         sx={{
//           display: "flex",
//           gap: 2,
//           backgroundColor: "#f9f9f9",
//           padding: 2,
//           borderRadius: 2,
//           justifyContent: "center",
//         }}
//       >
//         <Button
//           sx={{
//             textTransform: "none",
//             fontWeight: "normal",
//             border: "1px solid #ddd",
//             borderRadius: 2,
//             padding: "15px 60px",
//             "&.Mui-selected": {
//               fontWeight: "bold",
//             },
//             color: "black",
//           }}
//         >
//           Delivery
//         </Button>

//         <Button
//           sx={{
//             textTransform: "none",
//             fontWeight: "normal",
//             border: "1px solid #ddd",
//             borderRadius: 2,
//             padding: "15px 60px",
//             "&.Mui-selected": {
//               fontWeight: "bold",
//             },
//             color: "black",
//           }}
//         >
//           Pick-up
//         </Button>
//       </Box>

//       {/* Cart Items Section */}
     
       
          
//           <List>
//             {items && items.length > 0 ? (
//               items.map((item, index) => (
//                 <ListItem key={index} sx={{ paddingY: 1 }}>
//                   <ListItemAvatar>
//                     <Avatar src={item.strMealThumb} alt={item.strMeal} />
//                   </ListItemAvatar>
//                   <ListItemText primary={item.strMeal} />
//                   <ButtonGroup variant="text" aria-label="Quantity button group">
//                     <Button onClick={() => dispatch(decreaseQuantity(item))}>
//                       <RemoveIcon />
//                     </Button>
//                     <Button sx={{ width: 40 }}>{item.quantity}</Button>
//                     <Button onClick={() => dispatch(increaseQuantity(item))}>
//                       <AddIcon />
//                     </Button>
//                   </ButtonGroup>
//                 </ListItem>
//               ))
//             ) : (
//               <Typography sx={{ padding: 2, textAlign: 'center' }}>Your cart is empty.</Typography>
//             )}
//           </List>
     

//       {/* Total Section */}
//       <Box sx={{ padding: 2 }}>
//         <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//           <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//             <Typography variant="h6" fontWeight="bold">
//               Total
//             </Typography>
//             <Typography
//               variant="body2"
//               color="text.secondary"
//               sx={{ marginY: 1, fontSize: "0.875rem", paddingLeft: "5px" }}
//             >
//               (incl. fees and tax)
//             </Typography>
//           </Box>
//           <Typography variant="subtitle1" color="text.secondary">
//             Rs. 0
//           </Typography>
//         </Box>
//         <Button
//           variant="contained"
//           sx={{
//             marginTop: 2,
//             backgroundColor: "#ccc",
//             cursor: "not-allowed",
//             width: "100%",
//             padding: "16px",
//           }}
//         >
//           Review payment and address
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default DeliveryPaymentSection;







import React from "react";
import { Box, Typography, IconButton, Button, ButtonGroup, Divider, List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseQuantity, increaseQuantity } from '../../../Slices/productSlice';

const DeliveryPaymentSection = () => {
  const items = useSelector((state) => state.products.items);
  const dispatch = useDispatch();

  const handleClose = () => {
    // Handle drawer close functionality
  };

  return (
    <Box
      sx={{
        flex: 1,
        border: "1px solid #e0e0e0",
        borderRadius: 3,
        boxShadow: 3,
        padding: 3,
        textAlign: "center",
        height: "100%",
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
        }}
      >
        <Button
          sx={{
            textTransform: "none",
            fontWeight: "bold",
            border: "1px solid #ddd",
            borderRadius: 2,
            padding: "15px 60px",
            backgroundColor: "#4CAF50",
            color: "white",
            "&:hover": {
              backgroundColor: "#45a049",
            },
            "&.Mui-selected": {
              fontWeight: "bold",
            },
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
            padding: "15px 60px",
            backgroundColor: "#ff9800",
            color: "white",
            "&:hover": {
              backgroundColor: "#fb8c00",
            },
            "&.Mui-selected": {
              fontWeight: "bold",
            },
          }}
        >
          Pick-up
        </Button>
      </Box>

      {/* Cart Items Section */}
      <List sx={{ marginTop: 2 }}>
        {items && items.length > 0 ? (
          items.map((item, index) => (
            <ListItem key={index} sx={{ paddingY: 1, borderBottom: "1px solid #f0f0f0" }}>
              <ListItemAvatar>
                <Avatar src={item.strMealThumb} alt={item.strMeal} />
              </ListItemAvatar>
              <ListItemText
                primary={item.strMeal}
                sx={{
                  color: "#333",
                  fontWeight: "bold",
                }}
              />
              <ButtonGroup variant="text" aria-label="Quantity button group" sx={{ alignItems: "center" }}>
                <Button onClick={() => dispatch(decreaseQuantity(item))} sx={{ color: "#d32f2f" }}>
                  <RemoveIcon />
                </Button>
                <Button sx={{ width: 40, fontWeight: "bold" }}>{item.quantity}</Button>
                <Button onClick={() => dispatch(increaseQuantity(item))} sx={{ color: "#388e3c" }}>
                  <AddIcon />
                </Button>
              </ButtonGroup>
            </ListItem>
          ))
        ) : (
          <Typography sx={{ padding: 2, textAlign: 'center', color: "#888" }}>Your cart is empty.</Typography>
        )}
      </List>

      {/* Total Section */}
      <Box sx={{ padding: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <Typography variant="h6" fontWeight="bold" sx={{ color: "#333" }}>
              Total
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginY: 1, fontSize: "0.875rem", paddingLeft: "5px", fontWeight: "normal" }}
            >
              (incl. fees and tax)
            </Typography>
          </Box>
          <Typography variant="subtitle1" color="text.secondary" sx={{ fontWeight: "bold" }}>
            Rs. 0
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
