# Import the services to make them available when importing from services package
from .dosha_analyzer import DoshaAnalyzer
from .consultation_service import ConsultationService
from .recommendation_engine import RecommendationEngine

# Export these classes when using 'from app.services import *'
__all__ = [
    'DoshaAnalyzer',
    'ConsultationService',
    'RecommendationEngine'
]
