import React from 'react';
import { Modal, Box, Typography, Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

const SignUpModal = ({ open, handleClose }) => {
   
    const { register, handleSubmit, formState: { errors } } = useForm();

    
    const onSubmit = (data) => {
        console.log(data); 
        handleClose(); 
    };

    return (
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
                <Typography variant="h6" mb={2} align="center">Welcome!</Typography>
                <Typography variant="subtitle1" mb={3} align="center">
                    
                </Typography>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        fullWidth
                        label="Name"
                        {...register('name', { required: 'Name is required' })}
                        error={!!errors.name}
                        helperText={errors.name?.message}
                        margin="normal"
                    />
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
                        type="password"
                        label="Password"
                        {...register('password', { required: 'Password is required' })}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                        margin="normal"
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
                </form>
            </Box>
        </Modal>
    );
};

export default SignUpModal;
