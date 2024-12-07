import axios from 'axios';

// Base URL for the backend API
const API_BASE_URL = 'http://localhost:8000';

// Axios instance
const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Dosha-related API services
export const doshaService = {
    submitQuiz: async (answers) => {
        try {
            console.log("Sending to API:", answers);
            const response = await api.post('/api/v1/analyze-dosha', answers);
            console.log("API Response:", response.data);

            // Return the full response
            return response.data;
        } catch (error) {
            console.error("API Error:", error.response?.data || error.message);
            throw error;
        }
    },

    getRecommendations: async (doshaType) => {
        try {
            console.log(`Fetching recommendations for dosha type: ${doshaType}`);
            const response = await api.get(`/api/v1/recommendations/${doshaType}`);
            console.log("Recommendations API Response:", response.data);

            if (response.data.status === 'success') {
                return response.data.data;
            } else {
                throw new Error(response.data.error || 'Failed to get recommendations');
            }
        } catch (error) {
            console.error("API Error:", error.response?.data || error.message);
            throw error;
        }
    }
};

// Consultation-related API services
export const consultationService = {
    submitConsultation: async (formData) => {
        try {
            const consultationData = {
                personal_info: {
                    age: parseInt(formData.age),
                    gender: formData.gender.toLowerCase(),
                    weight: parseFloat(formData.weight),
                    height: parseFloat(formData.height),
                    bmi: parseFloat((formData.weight / Math.pow(formData.height / 100, 2)).toFixed(2))
                },
                medical_history: {
                    conditions: formData.currentConditions || [],
                    medications: formData.medications || ""
                },
                lifestyle: {
                    diet_type: formData.dietType,
                    physical_activity: formData.physicalActivity,
                    sleep_hours: parseInt(formData.sleepHours),
                    stress_level: formData.stressLevel.toLowerCase()
                },
                concerns: {
                    primary_concerns: formData.primaryConcerns,
                    previous_treatments: formData.previousTreatments || ""
                }
            };

            console.log("Sending consultation data:", consultationData);
            const response = await api.post('/api/v1/personal-consultation', consultationData);
            console.log("Consultation API Response:", response.data);

            // Return the full response
            return response.data;
        } catch (error) {
            console.error("Consultation API Error:", error.response?.data || error.message);
            throw error;
        }
    }
};
