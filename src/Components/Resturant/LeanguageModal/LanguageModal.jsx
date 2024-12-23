import React from 'react';
import { Box, Modal, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const LanguageModal = ({ open, handleClose }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="language-selector"
            aria-describedby="language-selector-description"
        >
            
            <Box
                sx={{
                    position: 'absolute',
                    top: '18%',
                    right: '14%',
                    transform: 'translate(-50%, -50%)',
                    width: 150,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    borderRadius: 2,
                    p: 1,
                    textAlign: 'center',
                }}
            >
                <Box
                    style={{ backgroundColor: '#f7f7f7' }}
                    className="d-flex justify-content-between py-3 px-3 rounded-3"
                >
                    <Typography variant="body2" sx={{ mb: 1 }}>
                        English
                    </Typography>
                    <CheckCircleOutlineIcon sx={{ color: '#e21b70' }} />
                </Box>
            </Box>
        </Modal>
    );
};

export default LanguageModal;
