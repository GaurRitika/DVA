import React, { useState } from 'react';
import {
  Paper,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Box,
  LinearProgress,
  FormControl,
  FormLabel
} from '@mui/material';

const questions = [
  {
    id: 'body_frame',
    question: 'Body Frame',
    help: 'Select your natural body frame type',
    options: [
      { label: 'Very Slim', value: 'vata' },
      { label: 'Medium', value: 'pitta' },
      { label: 'Large', value: 'kapha' }
    ]
  },
  {
    id: 'skin_type',
    question: 'Skin Type',
    help: 'Select your natural skin type',
    options: [
      { label: 'Dry/Rough', value: 'vata' },
      { label: 'Warm/Sensitive', value: 'pitta' },
      { label: 'Thick/Oily', value: 'kapha' }
    ]
  },
  {
    id: 'sleep_pattern',
    question: 'Sleep Pattern',
    help: 'Select your typical sleep pattern',
    options: [
      { label: 'Light/Irregular', value: 'vata' },
      { label: 'Moderate', value: 'pitta' },
      { label: 'Deep/Heavy', value: 'kapha' }
    ]
  },
  {
    id: 'digestion',
    question: 'Digestion',
    help: 'Select your typical digestion pattern',
    options: [
      { label: 'Irregular', value: 'vata' },
      { label: 'Strong/Sharp', value: 'pitta' },
      { label: 'Slow/Steady', value: 'kapha' }
    ]
  },
  {
    id: 'stress_response',
    question: 'Response to Stress',
    help: 'Select how you typically respond to stress',
    options: [
      { label: 'Anxiety/Worry', value: 'vata' },
      { label: 'Irritation/Anger', value: 'pitta' },
      { label: 'Withdrawal/Calm', value: 'kapha' }
    ]
  }
];

const QuestionForm = ({ onSubmit }) => {
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswer = (value) => {
    setAnswers((prev) => ({
      ...prev,
      [questions[currentQuestion].id]: value
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((curr) => curr + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((curr) => curr - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(answers).length !== questions.length) {
      alert('Please answer all questions.');
      return;
    }

    const formattedAnswers = {};
    Object.entries(answers).forEach(([key, value]) => {
      formattedAnswers[key] = {
        trait_name: key,
        vata_score: value === 'vata' ? 3 : value === 'pitta' ? 1 : 0,
        pitta_score: value === 'pitta' ? 3 : value === 'vata' ? 1 : 0,
        kapha_score: value === 'kapha' ? 3 : 0
      };
    });

    onSubmit(formattedAnswers);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const currentQ = questions[currentQuestion];

  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <LinearProgress variant="determinate" value={progress} sx={{ mb: 3 }} />

      <FormControl component="fieldset" fullWidth>
        <FormLabel component="legend">
          <Typography variant="h6" gutterBottom>
            {currentQ.question}
          </Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            {currentQ.help}
          </Typography>
        </FormLabel>
        <RadioGroup
          value={answers[currentQ.id] || ''}
          onChange={(e) => handleAnswer(e.target.value)}
        >
          {currentQ.options.map((option) => (
            <FormControlLabel
              key={option.value}
              value={option.value}
              control={<Radio />}
              label={option.label}
            />
          ))}
        </RadioGroup>
      </FormControl>

      <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between' }}>
        <Button
          variant="outlined"
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
        >
          Previous
        </Button>
        {currentQuestion < questions.length - 1 ? (
          <Button
            variant="contained"
            onClick={handleNext}
            disabled={!answers[currentQ.id]}
          >
            Next
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={!answers[currentQ.id]}
          >
            Submit
          </Button>
        )}
      </Box>
    </Paper>
  );
};

export default QuestionForm;
