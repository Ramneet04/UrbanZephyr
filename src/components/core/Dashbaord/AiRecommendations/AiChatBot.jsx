import { useState } from 'react';
import axios from 'axios';
import ChatSpinner from './chatSpinner';
import { Bot } from 'lucide-react';

const ChatBot = () => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [loading, setLoading] = useState(false);

    // Update the API key with your actual Google API key
    const GOOGLE_API_KEY = "AIzaSyAHSq5QeR5-eRVowpLTvDPC1ECcfUbmCqY";

    async function generateAnswer() {
        setLoading(true);

        const prompt = `You are an environmental expert. Provide sustainable recommendations to reduce Urban Heat Island effects. 
        Based on the user's question "${question}", suggest strategies like green roofing, afforestation, reflective surfaces, and more.`;

        try {
            const response = await axios({
                url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GOOGLE_API_KEY}`,
                method: 'POST',
                data: {
                    contents: [
                        {
                            parts: [
                                {
                                    text: prompt
                                }
                            ]
                        }
                    ]
                }
            });

            setAnswer(response.data.candidates[0].content.parts[0].text);
        } catch (error) {
            console.error("Error generating recommendation", error);
            setAnswer("Sorry, I couldn't generate a recommendation. Please try again.");
        }
        
        setLoading(false);
    }

    return (
        <div className="min-h-full bg-green-200 flex flex-col w-[100%] rounded-2xl" style={{ background: 'linear-gradient(to bottom, #004d00, #ffffff)' }}>
            <div className=" h-full flex-grow bg-white rounded-lg shadow-lg p-8 max-w-lg min-w-[93%] mx-auto my-6 border border-green-300 " style={{ background: 'linear-gradient(to bottom, #a8e6cf, #ffffff)' }} >
                <h1 className="text-4xl font-bold mb-6 text-center text-green-900">Beat the Heat: UHI Solutions</h1>
                <div className="flex gap-2 items-center font-bold mb-4 w-[90%]">
                    <p className="text-xl text-green-700">Ask Your Way to a Cooler, Greener Urban Environment</p>
                    <div className="text-xl"><Bot color="green" size={30} /></div>
                </div>

                {/* Display the answer at the top */}
                <div className="text-lg font-semibold text-green-900 mt-6">
                    {loading ? <ChatSpinner /> : answer}
                </div>
            </div>

            {/* Fixed input field at the bottom */}
            <div className="flex p-4 bg-white shadow-lg rounded-t-lg border-t border-green-300 rounded-4xl mb-2">
                <input 
                    type="text" 
                    className="flex-grow py-3 px-4 rounded-lg bg-green-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600 shadow-lg shadow-green-950 mr-2"
                    placeholder="Ask for green roofing, afforestation..." 
                    value={question} 
                    onChange={(e) => setQuestion(e.target.value)}
                />
                <button 
                    onClick={generateAnswer} 
                    className={`py-3 px-6 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-600`}
                >
                    {loading ? 'Generating...' : 'Get Recommendations'}
                </button>
            </div>
        </div>
    );
};

export default ChatBot;
