from typing import Dict, List
import logging
from ..config import get_groq_api_key
import requests

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class ConsultationService:
    def __init__(self):
        self.groq_api_key = get_groq_api_key()
        self.api_url = "https://api.groq.com/openai/v1/chat/completions"
        
        # Ayurvedic condition descriptions
        self.condition_info = {
            "Diabetes": "In Ayurveda, diabetes (Prameha) is primarily seen as a Kapha disorder with possible Pitta involvement.",
            "Hypertension": "Hypertension in Ayurveda (Rakta Gata Vata) is often related to Vata and Pitta imbalances.",
            "Arthritis": "Arthritis (Sandhivata) is typically viewed as a Vata disorder affecting the joints.",
            "Digestive Issues": "Digestive problems can involve all three doshas, with specific symptoms indicating the primary dosha imbalance.",
            "Respiratory Problems": "Respiratory issues often involve Kapha dosha, with possible Vata and Pitta complications.",
            "Skin Conditions": "Skin disorders (Kushtha) can involve all three doshas, but often have a strong Pitta component.",
            "Sleep Disorders": "Sleep issues are often related to Vata imbalance, though other doshas may be involved.",
            "Stress/Anxiety": "Anxiety and stress primarily affect Vata dosha, leading to mental and physical imbalances."
        }
        
    def get_personalized_recommendations(self, consultation_data: Dict) -> Dict:
        try:
            if not consultation_data:
                raise ValueError("Consultation data is missing")

            prompt = self._create_consultation_prompt(consultation_data)
            
            headers = {
                "Authorization": f"Bearer {self.groq_api_key}",
                "Content-Type": "application/json"
            }
            
            data = {
                "model": "llama-3.3-70b-versatile",
                "messages": [{"role": "user", "content": prompt}],
                "temperature": 0.3
            }
            
            response = requests.post(
                self.api_url,
                headers=headers,
                json=data,
                timeout=30
            )
            
            if response.status_code != 200:
                logger.error(f"API call failed: {response.text}")
                return self._get_default_recommendations(consultation_data)
            
            content = response.json()['choices'][0]['message']['content']
            return self._parse_consultation_response(content)
            
        except Exception as e:
            logger.error(f"Error in consultation service: {str(e)}")
            return self._get_default_recommendations(consultation_data)
    
    def _create_consultation_prompt(self, data: Dict) -> str:
        personal = data.get('personal_info', {})
        medical = data.get('medical_history', {})
        lifestyle = data.get('lifestyle', {})
        concerns = data.get('concerns', {})
        dosha_info = data.get('dosha_profile', {})

        return f"""
        Provide detailed Ayurvedic recommendations based on the following:
        - Personal Info: {personal}
        - Medical History: {medical}
        - Lifestyle: {lifestyle}
        - Health Concerns: {concerns}
        - Dosha Profile: {dosha_info}
        """
    
    def _get_default_recommendations(self, consultation_data: Dict) -> Dict:
        return {
            "status": "error",
            "message": "Unable to generate personalized recommendations. Please consult a practitioner."
        }
    
    def _parse_consultation_response(self, response: str) -> Dict:
        return {"recommendations": response.split("\n")}
