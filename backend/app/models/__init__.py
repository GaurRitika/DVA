# Import the models to make them available when importing from models package
from .dosha import DoshaProfile, DoshaCharacteristic, DoshaResponse, DoshaType
from .consultation import (
    PersonalInfo,
    MedicalHistory,
    Lifestyle,
    HealthConcerns,
    ConsultationRequest
)

# Export these classes when using 'from app.models import *'
__all__ = [
    'DoshaProfile',
    'DoshaCharacteristic',
    'DoshaResponse',
    'DoshaType',
    'PersonalInfo',
    'MedicalHistory',
    'Lifestyle',
    'HealthConcerns',
    'ConsultationRequest'
]
