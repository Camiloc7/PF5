"use client";


import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import Draggable from 'react-draggable';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const socket = io(API_URL || 'http://localhost:3002');

export default function Chatbot() {
  const [messages, setMessages] = useState<{ text: string; sender: string }[]>([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleBotResponse = (data: { text: string }) => {
      setMessages((prev) => {
        if (prev[prev.length - 1]?.text !== data.text) {
          return [...prev, { text: data.text, sender: 'bot' }];
        }
        return prev;
      });
    };
  
    socket.off('bot-response'); 
    socket.on('bot-response', handleBotResponse);
  
    return () => {
      socket.off('bot-response', handleBotResponse);
    };
  }, []);
  

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      socket.emit('message', { 
        userMessage: input, 
        conversationHistory: messages 
      });
      
      setInput('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        💬
      </button>
      {isOpen && (
        <Draggable>
          <div className="bg-white w-80 h-96 shadow-xl rounded-lg mt-2 p-4 flex flex-col cursor-move">
            <div className="flex justify-between items-center border-b pb-2 cursor-move">
              <h2 className="text-lg font-semibold">Chatbot INK3D</h2>
              <button onClick={() => setIsOpen(false)} className="text-red-500">✖</button>
            </div>

            <div className="flex-1 overflow-y-auto p-2">
              {messages.map((msg, index) => (
                <div key={index} className={`p-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                  <span className={`inline-block p-2 rounded-md ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
                    {msg.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex mt-2">
              <input
                className="flex-1 p-2 border rounded-md"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress} 
                placeholder="¿Cómo puedo ayudarte?"
              />
              <button onClick={sendMessage} className="ml-2 p-2 bg-blue-500 text-white rounded-md">
                ➤
              </button>
            </div>
          </div>
        </Draggable>
      )}
    </div>
  );
}









// "use client";
// import { useEffect, useState } from 'react';
// import io from 'socket.io-client';
// import Draggable from 'react-draggable';
// const API_URL = process.env.NEXT_PUBLIC_API_URL;
// const socket = io(API_URL || 'http://localhost:3002');
// export default function Chatbot() {
//   const [messages, setMessages] = useState<{ text: string; sender: string }[]>([]);
//   const [input, setInput] = useState('');
//   const [isOpen, setIsOpen] = useState(false);
//   useEffect(() => {
//     const handleBotResponse = (data: { text: string }) => {
//       setMessages((prev) => [...prev, { text: data.text, sender: 'bot' }]);
//     };
//     socket.on('bot-response', handleBotResponse);
//     return () => {
//       socket.off('bot-response', handleBotResponse);
//     };
//   }, []);
//   const sendMessage = () => {
//     if (!input.trim()) return;
//     setMessages((prev) => {
//       const newHistory = [...prev, { text: input, sender: 'user' }];
//       socket.emit('message', { 
//         userMessage: input, 
//         conversationHistory: newHistory 
//       });
//       return newHistory;
//     });

//     setInput('');
//   };
//   const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === 'Enter') {
//       e.preventDefault();
//       sendMessage();
//     }
//   };
//   return (
//     <div className="fixed bottom-5 right-5 z-50">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
//       >
//         💬
//       </button>
//       {isOpen && (
//         <Draggable bounds="parent">
//           <div className="bg-white w-80 h-96 shadow-xl rounded-lg mt-2 p-4 flex flex-col cursor-move">
//             <div className="flex justify-between items-center border-b pb-2">
//               <h2 className="text-lg font-semibold">Chatbot INK3D</h2>
//               <button onClick={() => setIsOpen(false)} className="text-red-500">✖</button>
//             </div>
//             <div className="flex-1 overflow-y-auto p-2">
//               {messages.map((msg, index) => (
//                 <div key={index} className={`p-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
//                   <span className={`inline-block p-2 rounded-md ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
//                     {msg.text}
//                   </span>
//                 </div>
//               ))}
//             </div>
//             <div className="flex mt-2">
//               <input
//                 className="flex-1 p-2 border rounded-md"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 onKeyDown={handleKeyPress} 
//                 placeholder="¿Cómo puedo ayudarte?"
//               />
//               <button onClick={sendMessage} className="ml-2 p-2 bg-blue-500 text-white rounded-md">
//                 ➤
//               </button>
//             </div>
//           </div>
//         </Draggable>
//       )}
//     </div>
//   );
// }
