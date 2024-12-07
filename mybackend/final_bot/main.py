# from flask import Flask, render_template, request, jsonify, session
# from flask_cors import CORS  # Import CORS
# import os
# import google.generativeai as genai

# # Configure the API key
# genai.configure(api_key="AIzaSyCRRWanA8UnO1agrOflq-IN2nTnJE9S6Gs")

# # Create the model configuration
# generation_config = {
#   "temperature": 1,
#   "top_p": 0.95,
#   "top_k": 64,
#   "max_output_tokens": 8192,
#   "response_mime_type": "text/plain",
# }

# # Global variable to store the chat session
# chat_session = None

# app = Flask(__name__)
# app.secret_key = "@1212324dsfdsagjhgjhgjhgjhgjhgjgj"  # Necessary if using Flask session

# CORS(app)  # Allow all domains to access this app
# # CORS(app, resources={r"/predictu": {"origins": "http://localhost:2020"}})
# # CORS(app, resources={r"/predictc": {"origins": "http://localhost:2020"}})

# #@app.before_request
# #def start_chat_session():
# chat_session = None
# if chat_session is None:
#     model = genai.GenerativeModel(
#         model_name="gemini-1.5-flash",
#         generation_config=generation_config,
#         system_instruction="if user logged in as client act as a public service problem solver for our company travelog which provide services related to travel, greet the user with salutation everytime, ask one question at a time about the issue faced and ask for details about problem so that we can solve it correctly give him a random from 1 lakh to 2 lakh reference id and apologize for inconvenience caused dont ask the user long question ask the user for email for future contact and after getting specific details say we will communicate to your email shortly your complaint has been registered else if user logged in as company act as a data updater, read the name of company from the email and collect all the complaints related to the company, when informed and change the data accordingly of the user with respect to their particular email on behalf of admin",
#     )
#     chat_session = model.start_chat(history=[])

# @app.post("/predictc")
# def predictc():
#     global chat_session
#     text = request.get_json().get("message")
#     response = chat_session.send_message(text)
#     message = {"answer": response.text}
#     return jsonify(message)

# @app.post("/predictu")
# def predictu():
#     global chat_session
#     text = request.get_json().get("message")
#     response = chat_session.send_message(text)
#     message = {"answer": response.text}
#     print(message)
#     return jsonify(message)

# if __name__ == "__main__":
#     app.run(debug=True)



# from flask import Flask, render_template, request, jsonify, session
# from flask_cors import CORS  # Import CORS
# # import os
# import google.generativeai as genai

# # Configure the API key
# genai.configure(api_key="AIzaSyCRRWanA8UnO1agrOflq-IN2nTnJE9S6Gs")

# # Create the model configuration
# generation_config = {
#   "temperature": 1,
#   "top_p": 0.95,
#   "top_k": 64,
#   "max_output_tokens": 8192,
#   "response_mime_type": "text/plain",
# }

# # Global variable to store the chat session
# chat_session = None

# app = Flask(__name__)
# app.secret_key = "@1212324dsfdsagjhgjhgjhgjhgjhgjgj"  # Necessary if using Flask session

# CORS(app, origins=["http://localhost:5173"])


# # CORS(app)  # Allow all domains to access this app
# # CORS(app, resources={r"/predictu": {"origins": "http://localhost:2020"}})
# # CORS(app, resources={r"/predictc": {"origins": "http://localhost:2020"}})

# #@app.before_request
# #def start_chat_session():
# chat_session = None
# if chat_session is None:
#     model = genai.GenerativeModel(
#         model_name="gemini-1.5-flash",
#         generation_config=generation_config,
#         system_instruction="if user logged in as client act as a public service problem solver for our company travelog which provide services related to travel, greet the user with salutation everytime, ask one question at a time about the issue faced and ask for details about problem so that we can solve it correctly give him a random from 1 lakh to 2 lakh reference id and apologize for inconvenience caused dont ask the user long question ask the user for email for future contact and after getting specific details say we will communicate to your email shortly your complaint has been registered else if user logged in as company act as a data updater, read the name of company from the email and collect all the complaints related to the company, when informed and change the data accordingly of the user with respect to their particular email on behalf of admin",
#     )
#     chat_session = model.start_chat(history=[])

# @app.post("/predictc")
# def predictc():
#     global chat_session
#     text = request.get_json().get("message")
#     response = chat_session.send_message(text)
#     message = {"answer": response.text}
#     return jsonify(message)

# @app.post("/predictu")
# def predictu():
#     global chat_session
#     text = request.get_json().get("message")
#     response = chat_session.send_message(text)
#     message = {"answer": response.text}
#     print(message)
#     return jsonify(message)

# if __name__ == "__main__":
#     app.run(debug=True)

from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import google.generativeai as genai

# Configure the API key
genai.configure(api_key="AIzaSyCRRWanA8UnO1agrOflq-IN2nTnJE9S6Gs")

# Create the model configuration
generation_config = {
    "temperature": 1,
    "top_p": 0.95,
    "top_k": 64,
    "max_output_tokens": 8192,
    "response_mime_type": "text/plain",
}

app = Flask(__name__)
app.secret_key = "@1212324dsfdsagjhgjhgjhgjhgjhgjgj"
CORS(app, resources={
    r"/predictu": {"origins": ["http://localhost:3000"]},
    r"/predictc": {"origins": ["http://localhost:3000"]}
})

chat_session = None

@app.before_request
def start_chat_session():
    global chat_session
    global model  # Declare model as global
    if chat_session is None:
        model = genai.GenerativeModel(
        model_name="gemini-1.5-flash",
        generation_config=generation_config,
        system_instruction="""You are an expert Ayurvedic assistant for Digital Vedic Ayurveda, a modern wellness platform that combines ancient Ayurvedic wisdom with digital accessibility. When responding to queries:

1. Core Services:
- Personalized Ayurvedic consultations
- Dosha analysis and balance recommendations
- Herbal medicine guidance
- Lifestyle and dietary advice
- Meditation and yoga practices
- Therapeutic treatments

2. Website Features:
- Online consultation booking
- Dosha quiz/assessment tools
- Educational resources about Ayurveda
- Product recommendations for herbs and supplements
- Blog articles about Ayurvedic practices
- Community forum for wellness discussions

3. Communication Style:
- Be warm and empathetic
- Use clear, simple language
- Keep responses concise and focused
- Maintain a professional yet approachable tone
- Address specific questions directly
- Include relevant Ayurvedic terms with explanations

4. Key Principles to Emphasize:
- Holistic approach to wellness
- Personalized treatment plans
- Balance of body, mind, and spirit
- Natural healing methods
- Preventive health care
- Traditional wisdom with modern science

5. When Asked About:
- Treatments: Explain traditional Ayurvedic approaches
- Products: Focus on natural, herbal solutions
- Consultations: Highlight personalized attention
- Doshas: Explain Vata, Pitta, and Kapha simply
- Practices: Recommend traditional methods
- Pricing: Suggest contacting directly for current rates

6. Website Navigation:
- Help users find relevant sections
- Guide through consultation booking
- Explain assessment processes
- Direct to educational resources
- Assist with product selection

Always maintain focus on authentic Ayurvedic principles while emphasizing our modern, accessible approach to this ancient science.

Remember to:
- Stay within scope of Ayurvedic practice
- Avoid medical diagnoses
- Recommend professional consultation when appropriate
- Emphasize the importance of personalized care
- Share general wellness wisdom
- Maintain a supportive, encouraging tone

For any complex health issues, always recommend consulting with our Ayurvedic practitioners directly through the website's booking system.""",

    )
    chat_session = model.start_chat(history=[])

    # if chat_session is None:
    #     model = genai.GenerativeModel(
    #         model_name="gemini-1.5-flash",
    #         generation_config=generation_config,
    #         system_instruction=" if somebody ask question about what is HumanVerse please answer in short way , donot give too much long answer , treat the user like you are explaining about HumanVerse on your understanding , give them knowledge about our platform , abhout how it build and how much functionality it gives to the user.HumanVerse is designed to be a vibrant community hub for sharing ideas, stories, and experiences. Whether you’re looking to connect with friends, discover new content, or showcase your creativity, HumanVerse has something for everyone. My vision is to create an engaging, user-friendly experience that fosters meaningful interactions.HumanVerse represents the start of a new era in social networking, with more exciting features and updates planned for the future, including enhanced interactivity, content discovery, and personalization. It’s designed to evolve into a thriving community space, offering an enriching social media experience.HumanVerse is an innovative social media platform designed to revolutionize how people connect, share, and express themselves online. Built with a vision of creating a dynamic and immersive virtual space, HumanVerse combines cutting-edge technology with a modern, visually stunning design to offer users a rich social experience. This platform is more than just a place to share updates—it’s a community where creativity, interaction, and personalization come together in a seamless, engaging environment.HumanVerse was born from the idea that social media should be simple yet powerful, visually appealing yet functional, and, most importantly, a platform where users feel empowered to share their stories and connect meaningfully. Whether you’re a content creator, a casual user, or someone looking to explore and discover new ideas, HumanVerse provides the tools you need to express yourself and engage with others.HumanVerse puts users in control of their online identity. Each user has a customizable profile where they can showcase their posts, share insights, and interact with others. Profiles are designed to be intuitive, allowing users to easily manage their content, preferences, and interactions.Sharing content on HumanVerse is a visually appealing experience. Posts are displayed as beautifully designed cards that feature images, captions, and interactive buttons for likes, comments, and shares. This feature adds a fresh, modern twist to the way content is presented, making each post stand out and inviting interaction.HumanVerses sidebar provides seamless navigation throughout the platform. The sleek, responsive design includes options like ‘All Posts,’ ‘Search,’ ‘Add Post,’ and ‘Profile.’ As users explore the platform, the sidebar smoothly adjusts, ensuring that navigating through different sections feels effortless.At the heart of HumanVerse is a strong focus on user privacy and security. With JWT (JSON Web Tokens) powering the authentication system, users can be confident that their data is secure. This ensures a smooth login experience while keeping user sessions protected.HumanVerse is designed with flexibility in mind, allowing users to personalize their experience. From profile settings to interaction styles, the platform evolves with the needs and preferences of each user.Beyond just personal interaction, HumanVerse fosters community-building through content sharing, commenting, and direct engagement with other users. The platform is all about amplifying voices, sparking conversations, and building lasting connections.HumanVerse is designed to be an intuitive and engaging social media platform. To get started, users first sign up by creating an account with their name, email, and password, followed by logging in through the homepage. Once logged in, they can set up their profile by adding a profile picture, bio, and other details. The core of HumanVerse is its interactive post system, where users can create posts by clicking the "Add Post" button from the sidebar, allowing them to share text, images, and more. Posts appear as visually appealing cards in the feed, and users can interact with content by liking, commenting, and sharing. The sidebar offers seamless navigation with options like "All Posts," "Search," "Add Post," and "My Profile," making it easy to explore and interact with content. The platform also allows users to engage with others' posts by liking, commenting, and sharing them, fostering a community-focused experience. Profile management is simple, with the ability to view, edit, or delete posts, as well as track interactions. HumanVerse also prioritizes security, offering privacy settings to control who can view your content and the ability to log out safely. With frequent updates and new features on the way, HumanVerse provides an evolving and exciting social media experience for all users.",
        
    #     )
    #     chat_session = model.start_chat(history=[])



    # if chat_session is None:
    # model = genai.GenerativeModel(
    #     model_name="gemini-1.5-flash",
    #     generation_config=generation_config,
    #     system_instruction=""" somebody asks about what HumanVerse is, please answer in a short way. 
    #     Don't give a long answer; treat the user like you are explaining HumanVerse based on your understanding. 
    #     Explain that HumanVerse is designed to be a vibrant community hub for sharing ideas, stories, and experiences. 
    #     Whether you are looking to connect with friends, discover new content, or showcase your creativity, 
    #     HumanVerse has something for everyone. My vision is to create an engaging, user-friendly experience 
    #     that fosters meaningful interactions. HumanVerse represents the start of a new era in social networking, 
    #     with more exciting features and updates planned for the future, including enhanced interactivity, 
    #     content discovery, and personalization. It is designed to evolve into a thriving community space, 
    #     offering an enriching social media experience. HumanVerse is an innovative platform that revolutionizes 
    #     how people connect, share, and express themselves online. Built with a vision of creating a dynamic 
    #     virtual space, HumanVerse combines cutting-edge technology with a modern, visually stunning design 
    #     to offer users a rich social experience. This platform is more than just a place to share updates; 
    #     it is a community where creativity, interaction, and personalization come together seamlessly. 
    #     HumanVerse empowers users to share their stories and connect meaningfully. 
    #     Whether you are a content creator or someone looking to explore and discover new ideas, 
    #     HumanVerse provides the tools to express yourself and engage with others. 
    #     Each user has a customizable profile, allowing easy management of their content, preferences, and interactions. 
    #     Posts are displayed as beautifully designed cards, inviting interaction. The sidebar provides seamless 
    #     navigation throughout the platform with options like All Posts, Search, Add Post, and Profile. 
    #     HumanVerse prioritizes user privacy and security, using JWT for authentication. 
    #     This ensures a smooth login experience while protecting user sessions. HumanVerse allows for personalized experiences, 
    #     adapting to user needs. Beyond personal interaction, HumanVerse fosters community-building through 
    #     content sharing and direct engagement. It's designed to be intuitive and engaging, 
    #     making it easy for users to start sharing and connecting immediately.
    #     """,
    # )
    # chat_session = model.start_chat(history=[])


@app.post("/predictc")
def predictc():
    global chat_session
    text = request.get_json().get("message")
    response = chat_session.send_message(text)
    message = {"answer": response.text}
    return jsonify(message)

@app.post("/predictu")
def predictu():
    try:
        global chat_session
        text = request.get_json().get("message")
        if not text:
            return jsonify({"error": "No message provided"}), 400
            
        response = chat_session.send_message(text)
        message = {"answer": response.text}
        print("Response:", message)  # Debug print
        return jsonify(message)
    except Exception as e:
        print("Error:", str(e))  # Debug print
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True)
