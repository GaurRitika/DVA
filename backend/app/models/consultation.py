from typing import List, Optional
from pydantic import BaseModel, Field, validator

class PersonalInfo(BaseModel):
    age: int = Field(..., ge=1, le=120)
    gender: str
    weight: float = Field(..., ge=20, le=200)
    height: float = Field(..., ge=100, le=250)
    bmi: float

    @validator('gender')
    def validate_gender(cls, v):
        valid_genders = ['male', 'female', 'other']
        if v.lower() not in valid_genders:
            raise ValueError('Gender must be one of: male, female, other')
        return v.lower()

class MedicalHistory(BaseModel):
    conditions: List[str] = Field(default_factory=list)
    medications: Optional[str] = None

class Lifestyle(BaseModel):
    diet_type: str
    physical_activity: str
    sleep_hours: int = Field(..., ge=4, le=12)
    stress_level: str

    @validator('stress_level')
    def validate_stress_level(cls, v):
        valid_levels = ['low', 'medium', 'high']
        if v.lower() not in valid_levels:
            raise ValueError('Stress level must be one of: low, medium, high')
        return v.lower()

class HealthConcerns(BaseModel):
    primary_concerns: str
    previous_treatments: Optional[str] = None

class ConsultationRequest(BaseModel):
    personal_info: PersonalInfo
    medical_history: MedicalHistory
    lifestyle: Lifestyle
    concerns: HealthConcerns
