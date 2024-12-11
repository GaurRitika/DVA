# Ayurvedic Consultation Platform 🕉️

A modern digital platform that combines traditional Ayurvedic wisdom with modern technology to provide personalized health consultations and recommendations.

## Features

### 1. Dosha Analysis
- Interactive questionnaire to determine your unique constitution (Dosha)
- Analysis of Vata, Pitta, and Kapha percentages
- Detailed explanation of your primary and secondary doshas
- Visual representation of your dosha profile

### 2. Personal Consultation
- Comprehensive health assessment
- Integration of dosha profile with current health conditions
- Collection of:
  - Personal information
  - Medical history
  - Lifestyle factors
  - Current health concerns
  - Previous treatments

### 3. Personalized Recommendations
- Dosha-specific guidance
- Dietary recommendations
- Lifestyle modifications
- Exercise suggestions
- Herbal remedies
- Therapeutic treatments
- Important health considerations

### 4. Herbal Remedy
- contain 3d model of various herbs

### 5. Information of near by Ayurvedic Centres
- contain near by Ayurvedic centers and hospitals


## Technology Stack

### Backend
- FastAPI: Modern, fast web framework for building APIs
- Pydantic: Data validation using Python type annotations
- Groq API: LLM integration for personalized recommendations

### Frontend
- Reactjs

## Setup Instructions

1. Clone the repository:
   git clone https://github.com/GaurRitika/DVA
   cd DVA

2. Create and activate virtual environment:
   For Windows:
   - python -m venv venv
   - venv\Scripts\activate

   For Linux/Mac:
   - python -m venv venv
   - source venv/bin/activate

3. Install dependencies:
   pip install -r requirements.txt

4. Set up Groq API:
   - Sign up at https://console.groq.com
   - Get your API key
   - Create .env file in project root
   - Add your API key: GROQ_API_KEY=your_groq_api_key_here

5. Verify API setup (optional):
   python scripts/verify_api_key.py

6. Start the backend server:
firstly confirm ,you must be inside the DVA folder,
 -  cd backend,
 -  uvicorn app:app --reload --host 0.0.0.0 --port 8000

7. start the mybackend server(in a new terminal):
firstly confirm ,you must be inside the DVA folder
 - 1.cd mybackend
 - 2.npm install
 - 3.npm run dev  


8. start the chatbot(in a new terminal):
firstly confirm ,you must be inside the DVA folder
- 1. cd mybackend
- 2. cd final_bot
- 3. venv\Scripts\Activate
- 4. pip install -r requirements.txt
- 5. python main.py

9. Start the frontend-react (in a new terminal):
firstly confirm ,you must be inside the DVA folder
- 1.venv\Scripts\activate
- 2.cd frontend-react
- 3.npm install
- 4.npm start

10. create one env file in the root directory , that means under the DVA folder , that contain your Groq api and REACT_APP_API_BASE_URL=http://localhost:8000/api/v1

11. create another env file under the mybackend folder  , that contain MONGO_URI = your answer

PORT = 5000


JWT_SECRET = youranswer 

12. Access the application:
   - Frontend: http://localhost:3000
   - API Documentation: http://localhost:8000/docs

## System Requirements

- Python 3.10 or higher
- pip (Python package installer)
- Git
- Internet connection for API access

## Dependencies

Main Python packages:
- fastapi==0.68.1
- uvicorn==0.15.0
- pydantic==2.5.3
- streamlit==1.22.0
- langchain-groq==0.0.3
- python-dotenv==0.19.0
- requests==2.26.0

## Troubleshooting

1. Module Import Errors:
   - Ensure virtual environment is activated
   - Verify all requirements are installed
   - Check you're in the correct directory

2. API Connection Issues:
   - Verify Groq API key in .env file
   - Check internet connection
   - Ensure backend server is running

3. Frontend-Backend Connection:
   - Verify backend is running on port 8000
   - Check for any firewall restrictions
   - Ensure correct URL configuration
