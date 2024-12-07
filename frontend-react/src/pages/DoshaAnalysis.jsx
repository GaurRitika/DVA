// import React, { useState } from 'react';
// import { Container } from '@mui/material';
// import QuestionForm from '../components/DoshaQuiz/QuestionForm';
// import Results from '../components/DoshaQuiz/Results';
// import { doshaService } from '../services/api';
// import { LoadingSpinner, ErrorAlert } from '../components/shared';

// const DoshaAnalysis = () => {
//   const [results, setResults] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleSubmit = async (answers) => {
//     setLoading(true);
//     setError(null);
//     try {
//         const response = await doshaService.submitQuiz(answers);
//         console.log("API Response:", response);

//         // Check if the response status is "success"
//         if (response.status === "success") {
//             setResults(response.data);  // Use the `data` field from the response
//         } else {
//             throw new Error(response.error || "Failed to analyze doshas.");
//         }
//     } catch (error) {
//         console.error("Error analyzing doshas:", error);
//         setError(error.message || "An error occurred while analyzing doshas.");
//     } finally {
//         setLoading(false);
//     }
// };

//   if (loading) return <LoadingSpinner />;

//   return (
//     <Container>
//       {results ? (
//         <Results results={results} />
//       ) : (
//         <QuestionForm onSubmit={handleSubmit} />
//       )}
//       <ErrorAlert error={error} onClose={() => setError(null)} />
//     </Container>
//   );
// };

// export default DoshaAnalysis;




// DoshaAnalysis.jsx
import React, { useState } from 'react';
import { Container, Box, Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import QuestionForm from '../components/DoshaQuiz/QuestionForm';
import Results from '../components/DoshaQuiz/Results';
import { doshaService } from '../services/api';
import { LoadingSpinner, ErrorAlert } from '../components/shared';
import { Spa } from '@mui/icons-material';
import './DoshaAnalysis.css';

const DoshaAnalysis = () => {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (answers) => {
    setLoading(true);
    setError(null);
    try {
      const response = await doshaService.submitQuiz(answers);
      if (response.status === "success") {
        setResults(response.data);
      } else {
        throw new Error(response.error || "Failed to analyze doshas.");
      }
    } catch (error) {
      console.error("Error analyzing doshas:", error);
      setError(error.message || "An error occurred while analyzing doshas.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return (
    <Box className="dosha-loading-container">
      <LoadingSpinner />
    </Box>
  );

  return (
    <div className="dosha-root">
      <div className="dosha-background">
        <Container maxWidth="lg" className="dosha-main-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Paper elevation={0} className="dosha-content-paper">
              <Box className="dosha-header">
                <div className="dosha-header-decoration">
                  <Spa className="dosha-icon" />
                </div>
                <Typography variant="h3" className="dosha-title">
                  Discover Your Dosha
                </Typography>
                <Typography variant="subtitle1" className="dosha-subtitle">
                  Ancient wisdom for modern wellness
                </Typography>
              </Box>

              <Box className="dosha-main-content">
                {results ? (
                  <Results results={results} />
                ) : (
                  <QuestionForm onSubmit={handleSubmit} />
                )}
              </Box>
            </Paper>
          </motion.div>
          <ErrorAlert error={error} onClose={() => setError(null)} />
        </Container>
      </div>
    </div>
  );
};

export default DoshaAnalysis;
