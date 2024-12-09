// src/components/Education/VideoPlayer.jsx
import React from 'react';
import { Box, Paper, Typography } from '@mui/material';

const VideoPlayer = ({ videoUrl, title, description }) => {
    return (
        <Paper elevation={3} sx={{ p: 2, height: '100%' }}>
            <Box sx={{ position: 'relative', paddingTop: '56.25%', mb: 2 }}>
                <iframe
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                    }}
                    src={videoUrl}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </Box>
            <Typography variant="h6" gutterBottom>
                {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {description}
            </Typography>
        </Paper>
    );
};

export default VideoPlayer;
