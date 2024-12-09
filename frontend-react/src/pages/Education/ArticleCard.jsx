// src/components/Education/ArticleCard.jsx
import React from 'react';
import { 
    Card, 
    CardContent, 
    CardMedia, 
    Typography, 
    Button 
} from '@mui/material';

const ArticleCard = ({ title, description, imageUrl, link }) => {
    return (
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
                component="img"
                height="200"
                image={imageUrl}
                alt={title}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <Button 
                size="small" 
                color="primary"
                sx={{ m: 2 }}
                href={link}
                target="_blank"
            >
                Read More
            </Button>
        </Card>
    );
};

export default ArticleCard;
