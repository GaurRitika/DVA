import React from 'react';
import { CircularProgress, Box } from '@mui/material';

const LoadingSpinner = () => (
  <Box display="flex" justifyContent="center" p={3}>
    <CircularProgress />
  </Box>
);

export default LoadingSpinner;
