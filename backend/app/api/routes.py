from fastapi import APIRouter, HTTPException, Request
from typing import Dict
from ..models.dosha import DoshaProfile, DoshaCharacteristic, DoshaResponse
from ..models.consultation import ConsultationRequest
from ..services.dosha_analyzer import DoshaAnalyzer
from ..services.recommendation_engine import RecommendationEngine
from ..services.consultation_service import ConsultationService
import logging

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Define the router with the correct prefix
router = APIRouter(prefix="/api/v1")

# Initialize services
dosha_analyzer = DoshaAnalyzer()
recommendation_engine = RecommendationEngine()
consultation_service = ConsultationService()

@router.post("/analyze-dosha")
async def analyze_dosha(user_responses: Dict[str, DoshaCharacteristic]):
    try:
        dosha_results = dosha_analyzer.analyze_dosha(user_responses)
        recommendations = recommendation_engine.get_recommendations(dosha_results)
        
        return {
            "status": "success",
            "data": {
                "primary_dosha": dosha_results["primary_dosha"],
                "secondary_dosha": dosha_results.get("secondary_dosha"),
                "vata_percentage": dosha_results["vata_percentage"],
                "pitta_percentage": dosha_results["pitta_percentage"],
                "kapha_percentage": dosha_results["kapha_percentage"],
                "recommendations": recommendations
            },
            "error": None
        }
    except Exception as e:
        return {
            "status": "error",
            "data": None,
            "error": str(e)
        }


@router.get("/recommendations/{dosha_type}")
async def get_recommendations(dosha_type: str):
    """
    Get recommendations for a specific dosha type.
    """
    try:
        logger.info(f"Getting recommendations for dosha type: {dosha_type}")
        dosha_profile = {
            "primary_dosha": dosha_type,
            "secondary_dosha": None,
            "vata_percentage": 100 if dosha_type == "vata" else 0,
            "pitta_percentage": 100 if dosha_type == "pitta" else 0,
            "kapha_percentage": 100 if dosha_type == "kapha" else 0
        }
        recommendations = recommendation_engine.get_recommendations(dosha_profile)
        return {
            "status": "success",
            "data": recommendations,
            "error": None
        }
    except Exception as e:
        logger.error(f"Error in get_recommendations: {str(e)}")
        return {
            "status": "error",
            "data": None,
            "error": str(e)
        }

@router.post("/personal-consultation")
async def get_personal_consultation(consultation_data: ConsultationRequest):
    try:
        recommendations = consultation_service.get_personalized_recommendations(consultation_data.dict())
        
        return {
            "status": "success",
            "data": {
                "recommendations": recommendations  # Ensure recommendations are nested under "data"
            },
            "error": None
        }
    except Exception as e:
        logger.error(f"Error in personal consultation: {str(e)}")
        return {
            "status": "error",
            "data": None,
            "error": str(e)
        }
