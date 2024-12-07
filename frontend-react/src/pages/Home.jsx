// import React from 'react';
// import { Container, Typography, Paper, Box, Button } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// const Home = () => {
//   const navigate = useNavigate();

//   return (
//     <Container maxWidth="lg">
//       <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
//         <Typography variant="h4" gutterBottom>
//           Welcome to Ayurvedic Consultation Platform
//         </Typography>

//         <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
//           Discover Your Unique Constitution
//         </Typography>

//         <Typography paragraph>
//           Ayurveda, the ancient science of life, teaches us that each person has a unique 
//           constitution or Dosha. Understanding your Dosha can help you make better choices 
//           for your health and well-being.
//         </Typography>

//         <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
//           How it works:
//         </Typography>

//         <Box sx={{ ml: 2 }}>
//           <Typography paragraph>
//             1. Complete the Dosha analysis questionnaire
//           </Typography>
//           <Typography paragraph>
//             2. Receive your personalized Dosha profile
//           </Typography>
//           <Typography paragraph>
//             3. Get tailored recommendations for:
//           </Typography>
//           <Box sx={{ ml: 3 }}>
//             <Typography>• Diet</Typography>
//             <Typography>• Lifestyle</Typography>
//             <Typography>• Exercise</Typography>
//             <Typography>• Beneficial herbs</Typography>
//           </Box>
//         </Box>

//         <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
//           <Button 
//             variant="contained" 
//             color="primary"
//             onClick={() => navigate('/dosha-analysis')}
//             size="large"
//           >
//             Start Dosha Analysis
//           </Button>
//           <Button 
//             variant="outlined" 
//             color="primary"
//             onClick={() => navigate('/consultation')}
//             size="large"
//           >
//             Get Personal Consultation
//           </Button>
//         </Box>
//       </Paper>
//     </Container>
//   );
// };

// export default Home;



import React from 'react';
import { Container, Typography, Paper, Box, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SpaOutlined, MenuBook, Person } from '@mui/icons-material';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Container maxWidth="lg">
        <Paper 
          elevation={3} 
          sx={{ 
            p: 4, 
            mt: 4,
            background: 'linear-gradient(135deg, #f5e6d3 0%, #fff8f3 100%)',
            borderRadius: '15px'
          }}
        >
          <motion.div {...fadeIn}>
            <Typography 
              variant="h3" 
              gutterBottom 
              sx={{ 
                color: '#66424D',
                fontFamily: "'Playfair Display', serif",
                textAlign: 'center',
                mb: 4
              }}
            >
              Welcome to Ayurvedic Wellness Journey
            </Typography>

            <Grid container spacing={4} sx={{ mb: 6 }}>
              <Grid item xs={12} md={6}>
                <motion.img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1JWm55sqzP_SE4iiOXmDSnotVyNiEdUCnWQ&s" 
                  alt="Ayurvedic Herbs"
                  style={{ 
                    width: '100%', 
                    borderRadius: '10px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                  }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography 
                  variant="h5" 
                  gutterBottom 
                  sx={{ 
                    color: '#66424D',
                    fontFamily: "'Playfair Display', serif"
                  }}
                >
                  Discover Your Unique Constitution
                </Typography>

                <Typography 
                  paragraph 
                  sx={{ 
                    color: '#594A4E',
                    fontSize: '1.1rem',
                    lineHeight: 1.8
                  }}
                >
                  Ayurveda, the ancient science of life, teaches us that each person has a unique 
                  constitution or Dosha. Understanding your Dosha can help you make better choices 
                  for your health and well-being.
                </Typography>

                <Box sx={{ 
                  mt: 4,
                  p: 3, 
                  bgcolor: 'rgba(255,255,255,0.7)',
                  borderRadius: '10px'
                }}>
                  <Typography 
                    variant="h6" 
                    gutterBottom 
                    sx={{ color: '#66424D' }}
                  >
                    How it works:
                  </Typography>

                  <Grid container spacing={2}>
                    {[
                      { icon: <MenuBook />, text: "Complete the Dosha analysis questionnaire" },
                      { icon: <Person />, text: "Receive your personalized Dosha profile" },
                      { icon: <SpaOutlined />, text: "Get tailored recommendations" }
                    ].map((item, index) => (
                      <Grid item xs={12} key={index}>
                        <motion.div 
                          whileHover={{ x: 10 }}
                          style={{ 
                            display: 'flex', 
                            alignItems: 'center',
                            gap: '15px'
                          }}
                        >
                          {item.icon}
                          <Typography>{item.text}</Typography>
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Grid>
            </Grid>

            <Box sx={{ 
              display: 'flex', 
              gap: 3,
              justifyContent: 'center',
              mt: 6 
            }}>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button 
                  variant="contained" 
                  size="large"
                  onClick={() => navigate('/dosha-analysis')}
                  sx={{
                    bgcolor: '#8B5E3C',
                    color: '#fff',
                    px: 4,
                    py: 2,
                    '&:hover': {
                      bgcolor: '#6B4E2C'
                    }
                  }}
                >
                  Start Dosha Analysis
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }}>
                <Button 
                  variant="outlined" 
                  size="large"
                  onClick={() => navigate('/consultation')}
                  sx={{
                    borderColor: '#8B5E3C',
                    color: '#8B5E3C',
                    px: 4,
                    py: 2,
                    '&:hover': {
                      borderColor: '#6B4E2C',
                      color: '#6B4E2C'
                    }
                  }}
                >
                  Get Personal Consultation
                </Button>
              </motion.div>
            </Box>
          </motion.div>
        </Paper>
      </Container>
    </motion.div>
  );
};

export default Home;
