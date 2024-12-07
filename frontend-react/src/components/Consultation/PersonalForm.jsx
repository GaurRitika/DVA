// frontend-react/src/components/Consultation/PersonalForm.jsx
import React, { useState } from 'react';
import {
    Paper,
    Typography,
    Grid,
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Button,
    Box,
    Chip,
    Slider
} from '@mui/material';

const conditions = [
    "Diabetes",
    "Hypertension",
    "Arthritis",
    "Digestive Issues",
    "Respiratory Problems",
    "Skin Conditions",
    "Sleep Disorders",
    "Stress/Anxiety",
    "None"
];

const PersonalForm = ({ onSubmit, loading }) => {  // Make sure this is defined as a function component
    const [formData, setFormData] = useState({
        age: '',
        gender: 'male',
        weight: '',
        height: '',
        currentConditions: [],
        medications: '',
        dietType: 'Vegetarian',
        physicalActivity: 'Moderate',
        sleepHours: 7,
        stressLevel: 'medium',
        primaryConcerns: '',
        previousTreatments: ''
    });

    const handleChange = (field) => (event) => {
        setFormData({
            ...formData,
            [field]: event.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom>
                Personal Health Assessment
            </Typography>

            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            label="Age"
                            type="number"
                            value={formData.age}
                            onChange={handleChange('age')}
                            inputProps={{ min: 1, max: 120 }}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth required>
                            <InputLabel>Gender</InputLabel>
                            <Select
                                value={formData.gender}
                                onChange={handleChange('gender')}
                                label="Gender"
                            >
                                <MenuItem value="male">Male</MenuItem>
                                <MenuItem value="female">Female</MenuItem>
                                <MenuItem value="other">Other</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            label="Weight (kg)"
                            type="number"
                            value={formData.weight}
                            onChange={handleChange('weight')}
                            inputProps={{ min: 20, max: 200 }}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            label="Height (cm)"
                            type="number"
                            value={formData.height}
                            onChange={handleChange('height')}
                            inputProps={{ min: 100, max: 250 }}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <InputLabel>Current Health Conditions</InputLabel>
                            <Select
                                multiple
                                value={formData.currentConditions}
                                onChange={handleChange('currentConditions')}
                                renderValue={(selected) => (
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                        {selected.map((value) => (
                                            <Chip key={value} label={value} />
                                        ))}
                                    </Box>
                                )}
                            >
                                {conditions.map((condition) => (
                                    <MenuItem key={condition} value={condition}>
                                        {condition}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Current Medications"
                            multiline
                            rows={2}
                            value={formData.medications}
                            onChange={handleChange('medications')}
                            placeholder="List any medications you are currently taking"
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth required>
                            <InputLabel>Diet Type</InputLabel>
                            <Select
                                value={formData.dietType}
                                onChange={handleChange('dietType')}
                                label="Diet Type"
                            >
                                <MenuItem value="Vegetarian">Vegetarian</MenuItem>
                                <MenuItem value="Vegan">Vegan</MenuItem>
                                <MenuItem value="Non-Vegetarian">Non-Vegetarian</MenuItem>
                                <MenuItem value="Other">Other</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth required>
                            <InputLabel>Physical Activity Level</InputLabel>
                            <Select
                                value={formData.physicalActivity}
                                onChange={handleChange('physicalActivity')}
                                label="Physical Activity Level"
                            >
                                <MenuItem value="Sedentary">Sedentary</MenuItem>
                                <MenuItem value="Light">Light</MenuItem>
                                <MenuItem value="Moderate">Moderate</MenuItem>
                                <MenuItem value="Active">Active</MenuItem>
                                <MenuItem value="Very Active">Very Active</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography gutterBottom>
                            Average Sleep Hours
                        </Typography>
                        <Slider
                            value={formData.sleepHours}
                            onChange={(e, newValue) => {
                                setFormData(prev => ({ ...prev, sleepHours: newValue }));
                            }}
                            valueLabelDisplay="auto"
                            step={0.5}
                            marks
                            min={4}
                            max={12}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <FormControl fullWidth required>
                            <InputLabel>Stress Level</InputLabel>
                            <Select
                                value={formData.stressLevel}
                                onChange={handleChange('stressLevel')}
                                label="Stress Level"
                            >
                                <MenuItem value="low">Low</MenuItem>
                                <MenuItem value="medium">Medium</MenuItem>
                                <MenuItem value="high">High</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            label="Primary Health Concerns"
                            multiline
                            rows={3}
                            value={formData.primaryConcerns}
                            onChange={handleChange('primaryConcerns')}
                            placeholder="Describe your main health concerns and symptoms"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Previous Treatments"
                            multiline
                            rows={2}
                            value={formData.previousTreatments}
                            onChange={handleChange('previousTreatments')}
                            placeholder="List any previous treatments or therapies tried"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            disabled={loading}
                            sx={{ mt: 2 }}
                        >
                            Submit Assessment
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    );
};

export default PersonalForm;
