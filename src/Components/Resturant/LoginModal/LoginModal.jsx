// // import React from 'react';
// // import { Modal, Box, Typography, Button, TextField } from '@mui/material';
// // import { useForm } from 'react-hook-form';

// // const LoginModal = ({ open, handleClose }) => {
// //     const { register, handleSubmit, formState: { errors } } = useForm();

    
// //     const onSubmit = (data) => {
// //         // Handle form submission (e.g., login logic)
// //         console.log(data);
// //         handleClose(); // Close the modal after submission
// //     };

// //     return (
// //         <Modal open={open} onClose={handleClose}>
// //             <Box sx={{
// //                 position: 'absolute',
// //                 top: '50%',
// //                 left: '50%',
// //                 transform: 'translate(-50%, -50%)',
// //                 bgcolor: 'background.paper',
// //                 padding: 4,
// //                 boxShadow: 24,
// //                 borderRadius: 2,
// //                 width: "20%"
// //             }}>
// //                 <Typography variant="h6" mb={2} align="center">Welcome!</Typography>
// //                 <Typography variant="subtitle1" mb={3} align="center">
// //                     Please log in to your account.
// //                 </Typography>

// //                 {/* Form */}
// //                 <form onSubmit={handleSubmit(onSubmit)}>
// //                     <TextField
// //                         fullWidth
// //                         label="Email"
// //                         {...register('email', { required: 'Email is required' })}
// //                         error={!!errors.email}
// //                         helperText={errors.email?.message}
// //                         margin="normal"
// //                     />
// //                     <TextField
// //                         fullWidth
// //                         type="password"
// //                         label="Password"
// //                         {...register('password', { required: 'Password is required' })}
// //                         error={!!errors.password}
// //                         helperText={errors.password?.message}
// //                         margin="normal"
// //                     />
// //                     <Button
// //                         type="submit"
// //                         fullWidth
// //                         variant="contained"
// //                         sx={{ mt: 2, backgroundColor: '#e21b70' }}
// //                     >
// //                         Log In
// //                     </Button>
// //                     <Typography variant="body2" mb={2} mt={2} align="center" color="text.secondary">
// //                         By signing up, you agree to our <span style={{ cursor: 'pointer', color: '#e21b70' }}>Terms and Conditions</span> and <span style={{ cursor: 'pointer', color: '#e21b70' }}>Privacy Policy</span>.
// //                     </Typography>
// //                 </form>
// //             </Box>
// //         </Modal>
// //     );
// // };

// // export default LoginModal;







// import React, { useState } from 'react';
// import { Modal, Box, Typography, Button, TextField } from '@mui/material';
// import { useForm } from 'react-hook-form';
// import SignUpModal from '../../SignUpPage/SignUpModal';

// const LoginModal = ({ open, handleClose, openSignUpModal }) => {
//     const { register, handleSubmit, formState: { errors } } = useForm();
//       const [openSignUp, setOpenSignUp] = useState(false);
    
//     const onSubmit = (data) => {
//         // Handle form submission (e.g., login logic)
//         console.log(data);
//         alert("Login successful!"); // Alert message after successful login
//         handleClose(); // Close the modal after submission
//     };

//     return (
//         <Modal open={open} onClose={handleClose}>
//             <Box sx={{
//                 position: 'absolute',
//                 top: '50%',
//                 left: '50%',
//                 transform: 'translate(-50%, -50%)',
//                 bgcolor: 'background.paper',
//                 padding: 4,
//                 boxShadow: 24,
//                 borderRadius: 2,
//                 width: "20%"
//             }}>
//                 <Typography variant="h6" mb={2} align="center">Welcome!</Typography>
//                 <Typography variant="subtitle1" mb={3} align="center">
//                     Please log in to your account.
//                 </Typography>

//                 {/* Form */}
//                 <form onSubmit={handleSubmit(onSubmit)}>
//                     <TextField
//                         fullWidth
//                         label="Email"
//                         {...register('email', { required: 'Email is required' })}
//                         error={!!errors.email}
//                         helperText={errors.email?.message}
//                         margin="normal"
//                     />
//                     <TextField
//                         fullWidth
//                         type="password"
//                         label="Password"
//                         {...register('password', { required: 'Password is required' })}
//                         error={!!errors.password}
//                         helperText={errors.password?.message}
//                         margin="normal"
//                     />
//                     <Button
//                         type="submit"
//                         fullWidth
//                         variant="contained"
//                         sx={{ mt: 2, backgroundColor: '#e21b70' }}
//                     >
//                         Log In
//                     </Button>
//                     <Typography variant="body2" mb={2} mt={2} align="center" color="text.secondary">
//                         By signing up, you agree to our <span style={{ cursor: 'pointer', color: '#e21b70' }}>Terms and Conditions</span> and <span style={{ cursor: 'pointer', color: '#e21b70' }}>Privacy Policy</span>.
//                     </Typography>
//                     <Button
//                         fullWidth
//                         variant="outlined"
//                         sx={{ mt: 1 }}
//                         onClick={openSignUpModal} // Open the sign-up modal when clicked
//                     >
//                         Don't have an account? Sign Up
//                         <SignUpModal open={openSignUp} handleClose={() => setOpenSignUp(false)} handleLogin={handleLogin} />
//                     </Button>
//                 </form>
//             </Box>
//         </Modal>
//     );
// };

// export default LoginModal;




// import React, { useState } from 'react';
// import { Modal, Box, Typography, Button, TextField } from '@mui/material';
// import { useForm } from 'react-hook-form';
// import SignUpModal from '../../SignUpPage/SignUpModal';

// const LoginModal = ({ open, handleClose }) => {
//     const { register, handleSubmit, formState: { errors } } = useForm();
//     const [openSignUp, setOpenSignUp] = useState(false);
    
//     const onSubmit = (data) => {
//         // Handle form submission (e.g., login logic)
//         console.log(data);
//         alert("Login successful!"); // Alert message after successful login
//         handleClose(); // Close the modal after submission
//     };

//     const openSignUpModal = () => {
//         setOpenSignUp(true); // Set the SignUp modal to open
//     };

//     return (
//         <>
//             <Modal open={open} onClose={handleClose}>
//                 <Box sx={{
//                     position: 'absolute',
//                     top: '50%',
//                     left: '50%',
//                     transform: 'translate(-50%, -50%)',
//                     bgcolor: 'background.paper',
//                     padding: 4,
//                     boxShadow: 24,
//                     borderRadius: 2,
//                     width: "20%"
//                 }}>
//                     <Typography variant="h6" mb={2} align="center">Welcome!</Typography>
//                     <Typography variant="subtitle1" mb={3} align="center">
//                         Please log in to your account.
//                     </Typography>

//                     {/* Form */}
//                     <form onSubmit={handleSubmit(onSubmit)}>
//                         <TextField
//                             fullWidth
//                             label="Email"
//                             {...register('email', { required: 'Email is required' })}
//                             error={!!errors.email}
//                             helperText={errors.email?.message}
//                             margin="normal"
//                         />
//                         <TextField
//                             fullWidth
//                             type="password"
//                             label="Password"
//                             {...register('password', { required: 'Password is required' })}
//                             error={!!errors.password}
//                             helperText={errors.password?.message}
//                             margin="normal"
//                         />
//                         <Button
//                             type="submit"
//                             fullWidth
//                             variant="contained"
//                             sx={{ mt: 2, backgroundColor: '#e21b70' }}
//                         >
//                             Log In
//                         </Button>
//                         <Typography variant="body2" mb={2} mt={2} align="center" color="text.secondary">
//                             By signing up, you agree to our <span style={{ cursor: 'pointer', color: '#e21b70' }}>Terms and Conditions</span> and <span style={{ cursor: 'pointer', color: '#e21b70' }}>Privacy Policy</span>.
//                         </Typography>
//                         <Button
//                             fullWidth
//                             variant="outlined"
//                             sx={{ mt: 1 }}
//                             onClick={openSignUpModal} // Open the SignUp modal
//                         >
//                             Don't have an account? Sign Up
//                         </Button>
//                     </form>
//                 </Box>
//             </Modal>

//             {/* SignUp Modal */}
//             <SignUpModal open={openSignUp} handleClose={() => setOpenSignUp(false)} />
//         </>
//     );
// };

// export default LoginModal;





















import React, { useState } from 'react';
import { Modal, Box, Typography, Button, TextField, IconButton, InputAdornment } from '@mui/material';
import { useForm } from 'react-hook-form';
import SignUpModal from '../../SignUpPage/SignUpModal';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const LoginModal = ({ open, handleClose }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [openSignUp, setOpenSignUp] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword(!showPassword);

    const onSubmit = (data) => {
        // Handle form submission (e.g., login logic)
        console.log(data);
        alert("Login successful!"); // Alert message after successful login
        handleClose(); // Close the modal after submission
    };

    const openSignUpModal = () => {
        setOpenSignUp(true); // Set the SignUp modal to open
    };

    return (
        <>
            <Modal open={open} onClose={handleClose}>
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'background.paper',
                    padding: 4,
                    boxShadow: 24,
                    borderRadius: 2,
                    width: "20%"
                }}>
                    <Typography sx={{  color: '#e21b70',
                        fontWeight: 'bold',
                        marginBottom: 2,}} variant="h6" mb={2} align="center">Welcome!</Typography>
                    <Typography sx={{  color: '#e21b70',
                        fontWeight: 'bold',
                        marginBottom: 2,}} variant="subtitle1" mb={3} align="center">
                        Please log in to your account.
                    </Typography>

                    {/* Form */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            fullWidth
                            label="Email"
                            {...register('email', { required: 'Email is required' })}
                            error={!!errors.email}
                            helperText={errors.email?.message}
                            margin="normal"
                        />
                        <TextField
                            fullWidth
                            type={showPassword ? 'text' : 'password'}
                            label="Password"
                            {...register('password', { required: 'Password is required' })}
                            error={!!errors.password}
                            helperText={errors.password?.message}
                            margin="normal"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleClickShowPassword} edge="end">
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 2, backgroundColor: '#e21b70' }}
                        >
                            Log In
                        </Button>
                        <Typography variant="body2" mb={2} mt={2} align="center" color="text.secondary">
                            By signing up, you agree to our <span style={{ cursor: 'pointer', color: '#e21b70' }}>Terms and Conditions</span> and <span style={{ cursor: 'pointer', color: '#e21b70' }}>Privacy Policy</span>.
                        </Typography>
                        <Button
                            fullWidth
                            variant=""
                            sx={{ mt: 1 ,backgroundColor : '#000', color:'#fff' }}
                            onClick={openSignUpModal} // Open the SignUp modal
                        >
                            Don't have an account? Sign Up
                        </Button>
                    </form>
                </Box>
            </Modal>

            {/* SignUp Modal */}
            <SignUpModal open={openSignUp} handleClose={() => setOpenSignUp(false)} />
        </>
    );
};

export default LoginModal;
