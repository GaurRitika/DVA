// import React, { useState } from 'react';
// import { Container } from '@mui/material';
// import PersonalForm from '../components/Consultation/PersonalForm';
// import ConsultationResults from '../components/Consultation/ConsultationResults';
// import { consultationService } from '../services/api';
// import { LoadingSpinner, ErrorAlert } from '../components/shared';

// const PersonalConsultation = ({ doshaProfile }) => {
//   const [results, setResults] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleSubmit = async (formData) => {
//     setLoading(true);
//     setError(null);
//     try {
//       // Include dosha profile in the consultation request
//       const consultationData = {
//         ...formData,
//         doshaProfile // Include dosha profile in the request
//       };
      
//       console.log('Submitting consultation data:', consultationData);
      
//       const response = await consultationService.submitConsultation(consultationData);
//       console.log('API Response:', response);
      
//       if (response.status === 'success') {
//         console.log('Setting results:', response.data);
//         setResults(response.data);
//       } else {
//         throw new Error(response.error || 'Failed to get consultation');
//       }
//     } catch (error) {
//       console.error('Error getting consultation:', error);
//       setError(error.message || 'An error occurred while getting consultation');
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) return <LoadingSpinner />;

//   return (
//     <Container maxWidth="lg">
//       {results ? (
//         <ConsultationResults 
//           results={results} 
//           doshaProfile={doshaProfile}
//         />
//       ) : (
//         <PersonalForm 
//           onSubmit={handleSubmit} 
//           loading={loading} 
//           doshaProfile={doshaProfile}
//         />
//       )}
//       <ErrorAlert error={error} onClose={() => setError(null)} />
//     </Container>
//   );
// };

// export default PersonalConsultation;



// PersonalConsultation.jsx
import React, { useState } from 'react';
import { Container, Paper, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import PersonalForm from '../components/Consultation/PersonalForm';
import ConsultationResults from '../components/Consultation/ConsultationResults';
import { consultationService } from '../services/api';
import { LoadingSpinner, ErrorAlert } from '../components/shared';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import SpaIcon from '@mui/icons-material/Spa';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
// import EcoIcon from '@mui/icons-material/Eco';
import { styled } from '@mui/material/styles';
import './PersonalConsultation.css';

const AyurvedicContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(4),
  background: 'linear-gradient(135deg, rgba(250, 247, 242, 0.95) 0%, rgba(255, 253, 250, 0.95) 100%)',
 
  minHeight: '100vh',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url('/assets/mandala-pattern.png')`,
    backgroundSize: '500px 500px',
    opacity: 0.1,
    zIndex: -1,
  }
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: '30px',
  background: 'rgba(255, 255, 255, 0.95)',
  boxShadow: '0 8px 32px rgba(31, 38, 135, 0.15)',
  backdropFilter: 'blur(10px)',
  border: '2px solid rgba(255, 255, 255, 0.18)',
  
  position: 'relative',
  overflow: 'hidden',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'linear-gradient(90deg, #88a037, #d4a017, #88a037)',
  }
}));

const FloatingIcon = styled(motion.div)(({ theme, top, left }) => ({
  position: 'absolute',
  top,
  left,
  color: theme.palette.primary.main,
  opacity: 0.2,
  zIndex: 0,
}));

const PersonalConsultation = ({ doshaProfile }) => {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (formData) => {
    setLoading(true);
    setError(null);
    try {
      const consultationData = {
        ...formData,
        doshaProfile
      };
      
      const response = await consultationService.submitConsultation(consultationData);
      
      if (response.status === 'success') {
        setResults(response.data);
      } else {
        throw new Error(response.error || 'Failed to get consultation');
      }
    } catch (error) {
      setError(error.message || 'An error occurred while getting consultation');
    } finally {
      setLoading(false);
    }
  };

  const floatingIcons = [
    { Icon: LocalFloristIcon, top: '10%', left: '5%' },
    { Icon: SpaIcon, top: '20%', left: '90%' },
    { Icon: WaterDropIcon, top: '80%', left: '8%' },
   
  ];

  return (
    <AyurvedicContainer maxWidth="lg">
      {floatingIcons.map(({ Icon, top, left }, index) => (
        <FloatingIcon
          key={index}
          top={top}
          left={left}
          animate={{
            y: [0, 20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: index * 0.5,
          }}
        >
          <Icon sx={{ fontSize: '3rem' }} />
        </FloatingIcon>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <StyledPaper elevation={6} className="consultation-paper">
          <motion.div
            className="paper-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Typography
              variant="h4"
              component="h1"
              align="center"
              className="title-text"
              sx={{
                color: '#2c3e50',
                mb: 4,
                fontFamily: '"Playfair Display", serif',
                position: 'relative',
                textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '80px',
                  height: '3px',
                  background: 'linear-gradient(90deg, #88a037, #d4a017)',
                  borderRadius: '2px',
                }
              }}
            >
              <SpaIcon sx={{ mr: 1, verticalAlign: 'bottom', color: '#88a037' }} />
              Personal Ayurvedic Consultation
            </Typography>

            <AnimatePresence mode="wait">
              {loading ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="loading-container"
                >
                  <LoadingSpinner />
                </motion.div>
              ) : results ? (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <ConsultationResults 
                    results={results} 
                    doshaProfile={doshaProfile}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <PersonalForm 
                    onSubmit={handleSubmit} 
                    loading={loading} 
                    doshaProfile={doshaProfile}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </StyledPaper>
      </motion.div>
      <ErrorAlert error={error} onClose={() => setError(null)} />
    </AyurvedicContainer>
  );
};

export default PersonalConsultation;
