import React from 'react';
import {
  Paper,
  Typography,
  Box,
  Grid,
  LinearProgress,
  Divider,
  Button
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const DoshaDescriptions = {
  vata: {
    title: "Vata (Air & Space)",
    traits: [
      "Quick thinking and adaptable",
      "Creative and enthusiastic",
      "Light and agile in movement",
      "Variable energy and appetite"
    ]
  },
  pitta: {
    title: "Pitta (Fire & Water)",
    traits: [
      "Intelligent and sharp-minded",
      "Goal-oriented and organized",
      "Strong digestion and metabolism",
      "Natural leaders with strong will"
    ]
  },
  kapha: {
    title: "Kapha (Earth & Water)",
    traits: [
      "Patient and thoughtful",
      "Calm and steady",
      "Strong and enduring",
      "Nurturing and supportive"
    ]
  }
};

const Results = ({ results }) => {
  const navigate = useNavigate();

  const getDoshaColor = (dosha) => {
    const colors = {
      vata: '#9C27B0',
      pitta: '#F44336',
      kapha: '#4CAF50'
    };
    return colors[dosha] || '#000';
  };

  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Your Dosha Analysis Results
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          {['vata', 'pitta', 'kapha'].map((dosha) => (
            <Grid item xs={12} md={4} key={dosha}>
              <Box sx={{ p: 2, textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>
                  {dosha.toUpperCase()}
                </Typography>
                <Box sx={{ position: 'relative', pt: 1 }}>
                  <LinearProgress
                    variant="determinate"
                    value={results[`${dosha}_percentage`]}
                    sx={{
                      height: 10,
                      borderRadius: 5,
                      backgroundColor: '#eee',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: getDoshaColor(dosha)
                      }
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{ mt: 1 }}
                  >
                    {`${Math.round(results[`${dosha}_percentage`])}%`}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Your Primary Dosha: {results.primary_dosha.toUpperCase()}
        </Typography>
        <Box sx={{ mt: 2 }}>
          {DoshaDescriptions[results.primary_dosha].traits.map((trait, index) => (
            <Typography key={index} paragraph>
              • {trait}
            </Typography>
          ))}
        </Box>
      </Box>

      {results.secondary_dosha && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            Secondary Influence: {results.secondary_dosha.toUpperCase()}
          </Typography>
          <Box sx={{ mt: 2 }}>
            {DoshaDescriptions[results.secondary_dosha].traits.map((trait, index) => (
              <Typography key={index} paragraph>
                • {trait}
              </Typography>
            ))}
          </Box>
        </Box>
      )}

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Next Steps
        </Typography>
        <Typography paragraph>
          Based on your Dosha analysis, we recommend getting a personalized consultation
          to receive specific recommendations for your constitution.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/consultation')}
          sx={{ mt: 2 }}
        >
          Get Personalized Consultation
        </Button>
      </Box>
    </Paper>
  );
};

export default Results;
