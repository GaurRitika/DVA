from typing import Dict
from ..models.dosha import DoshaCharacteristic
import logging

logger = logging.getLogger(__name__)

class DoshaAnalyzer:
    def analyze_dosha(self, user_responses: Dict[str, DoshaCharacteristic]) -> Dict:
        try:
            # Calculate total scores for each dosha
            total_vata = 0
            total_pitta = 0
            total_kapha = 0
            
            # Sum up scores from all characteristics
            for characteristic in user_responses.values():
                total_vata += characteristic.vata_score
                total_pitta += characteristic.pitta_score
                total_kapha += characteristic.kapha_score
            
            # Calculate total score
            total_score = total_vata + total_pitta + total_kapha
            if total_score == 0:
                raise ValueError("Total score cannot be zero")
            
            # Calculate percentages
            vata_percentage = (total_vata / total_score) * 100
            pitta_percentage = (total_pitta / total_score) * 100
            kapha_percentage = (total_kapha / total_score) * 100
            
            # Determine primary and secondary doshas
            scores = {
                "vata": vata_percentage,
                "pitta": pitta_percentage,
                "kapha": kapha_percentage
            }
            
            sorted_doshas = sorted(scores.items(), key=lambda x: x[1], reverse=True)
            primary_dosha = sorted_doshas[0][0]
            secondary_dosha = sorted_doshas[1][0] if sorted_doshas[1][1] > 25 else None
            
            return {
                "primary_dosha": primary_dosha,
                "secondary_dosha": secondary_dosha,
                "vata_percentage": round(vata_percentage, 2),
                "pitta_percentage": round(pitta_percentage, 2),
                "kapha_percentage": round(kapha_percentage, 2)
            }
            
        except Exception as e:
            logger.error(f"Error in dosha analysis: {str(e)}")
            raise
