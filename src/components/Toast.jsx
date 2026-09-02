import React from 'react';
import { Snackbar, Alert, Box } from '@mui/material';

const Toast = ({ message, type = 'success', onClose, duration = 3000 }) => {
  return (
    <Box>
      <Snackbar
        open={true}
        autoHideDuration={duration}
        onClose={onClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert onClose={onClose} severity={type} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Toast;
