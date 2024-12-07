// import { useState } from 'react';
// import './Chatbot.css';
// import { FiSend } from 'react-icons/fi';
// import { IoMdClose } from 'react-icons/io';

// const Chatbot = () => {
//   const [userMessage, setUserMessage] = useState('');
//   const [chatLogs, setChatLogs] = useState([]);
//   const [isChatbotOpen, setIsChatbotOpen] = useState(false);
//   const [isTyping, setIsTyping] = useState(false);

//   const sendMessageToChatbot = async () => {
//     const url = 'http://127.0.0.1:5000/predictu';
//     const message = userMessage;

//     if (!message.trim()) return;

//     try {
//       setIsTyping(true);
//       setChatLogs((prevLogs) => [...prevLogs, { user: message, type: 'user' }]);
//       setUserMessage('');

//       const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ message }),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();
      
//       if (data.answer) {
//         setTimeout(() => {
//           setChatLogs((prevLogs) => [...prevLogs, { bot: data.answer, type: 'bot' }]);
//           setIsTyping(false);
//         }, 500);
//       }
//     } catch (error) {
//       console.error('Error details:', error);
//       setIsTyping(false);
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       sendMessageToChatbot();
//     }
//   };

//   const toggleChatbot = () => {
//     setIsChatbotOpen(!isChatbotOpen);
//   };

//   return (
//     <div className="chatbot-container">
//       {!isChatbotOpen ? (
//         <div className="chatbot-trigger" onClick={toggleChatbot}>
//           <img
//             src="https://i0.wp.com/cayeit.com/wp-content/uploads/2024/04/cayeit-ayurveda-ai.webp?fit=1792%2C1024&ssl=1"
//             alt="Ayurveda Assistant"
//             className="chatbot-icon"
//           />
//           <div className="pulse-ring"></div>
//         </div>
//       ) : (
//         <div className="chatbot-window">
//           <div className="chatbot-header">
//             <div className="header-content">
//               <img
//                 src="https://i0.wp.com/cayeit.com/wp-content/uploads/2024/04/cayeit-ayurveda-ai.webp?fit=1792%2C1024&ssl=1"
//                 alt="Ayurveda Bot"
//                 className="header-icon"
//               />
//               <div className="header-text">
//                 <h2>Ayurveda Assistant</h2>
//                 <span>Ask me about Ayurvedic wellness</span>
//               </div>
//             </div>
//             <button className="close-button" onClick={toggleChatbot}>
//               <IoMdClose />
//             </button>
//           </div>

//           <div className="chatbot-messages">
//             {chatLogs.map((log, index) => (
//               <div
//                 key={index}
//                 className={`message ${log.type === 'user' ? 'user-message' : 'bot-message'}`}
//               >
//                 <div className="message-content">
//                   {log.type === 'user' ? log.user : log.bot}
//                 </div>
//               </div>
//             ))}
//             {isTyping && (
//               <div className="message bot-message">
//                 <div className="typing-indicator">
//                   <span></span>
//                   <span></span>
//                   <span></span>
//                 </div>
//               </div>
//             )}
//           </div>

//           <div className="chatbot-input">
//             <input
//               type="text"
//               value={userMessage}
//               onChange={(e) => setUserMessage(e.target.value)}
//               onKeyPress={handleKeyPress}
//               placeholder="Ask about Ayurvedic wellness..."
//               className="message-input"
//             />
//             <button
//               onClick={sendMessageToChatbot}
//               className="send-button"
//               disabled={!userMessage.trim()}
//             >
//               <FiSend />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Chatbot;

import { useState, useRef, useEffect } from 'react';
import './Chatbot.css';
import { FiSend } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';

const Chatbot = () => {
  const [userMessage, setUserMessage] = useState('');
  const [chatLogs, setChatLogs] = useState([]);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatLogs]);

  const sendMessageToChatbot = async () => {
    const url = 'http://127.0.0.1:5000/predictu';
    const message = userMessage;

    if (!message.trim()) return;

    try {
      // Add user message immediately
      const newUserMessage = { type: 'user', content: message };
      setChatLogs(prevLogs => [...prevLogs, newUserMessage]);
      setUserMessage('');
      setIsTyping(true);

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.answer) {
        // Add bot response after a small delay
        setTimeout(() => {
          setChatLogs(prevLogs => [...prevLogs, { type: 'bot', content: data.answer }]);
          setIsTyping(false);
        }, 500);
      }
    } catch (error) {
      console.error('Error details:', error);
      setChatLogs(prevLogs => [...prevLogs, { type: 'bot', content: 'Sorry, I encountered an error. Please try again.' }]);
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessageToChatbot();
    }
  };

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  return (
    <div className="chatbot-container">
      {!isChatbotOpen ? (
        <div className="chatbot-trigger" onClick={toggleChatbot}>
          <img
            src="https://i0.wp.com/cayeit.com/wp-content/uploads/2024/04/cayeit-ayurveda-ai.webp?fit=1792%2C1024&ssl=1"
            alt="Ayurveda Assistant"
            className="chatbot-icon"
          />
          <div className="pulse-ring"></div>
        </div>
      ) : (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="header-content">
              <img
                src="https://i0.wp.com/cayeit.com/wp-content/uploads/2024/04/cayeit-ayurveda-ai.webp?fit=1792%2C1024&ssl=1"
                alt="Ayurveda Bot"
                className="header-icon"
              />
              <div className="header-text">
                <h2>Ayurveda Assistant</h2>
                <span>Ask me about Ayurvedic wellness</span>
              </div>
            </div>
            <button className="close-button" onClick={toggleChatbot}>
              <IoMdClose />
            </button>
          </div>

          <div className="chatbot-messages">
            {chatLogs.map((message, index) => (
              <div
                key={index}
                className={`message ${message.type}-message`}
              >
                <div className="message-content">
                  {message.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="message bot-message">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} /> {/* Scroll anchor */}
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about Ayurvedic wellness..."
              className="message-input"
            />
            <button
              onClick={sendMessageToChatbot}
              className="send-button"
              disabled={!userMessage.trim()}
            >
              <FiSend />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
