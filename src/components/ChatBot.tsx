"use client"
import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const ChatBot = () => {
    const [userInput, setUserInput] = useState("");
    const [botResponse, setBotResponse] = useState("");
    const [loading, setLoading] = useState(false);
    const [chatHistory, setChatHistory] = useState<{ sender: string, text: string }[]>([]);

    const context = "use the given data to help the user for selecting the right ai model for their requirements according to their need";

    const handleUserInput = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!userInput.trim()) return;

        setLoading(true);

       
        const newChatHistory = [...chatHistory, { sender: "user", text: userInput }];
        setChatHistory(newChatHistory);

        try {
            // Directly using the Gemini API key in the frontend (not secure for production)
            const genAI = new GoogleGenerativeAI("AIzaSyA4iGtQ-KeTzOAPLO4O-X-YnwM4VrtJ7m0"); // Replace with your API key
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

            // Include the context in the prompt to guide the bot's behavior
            const prompt = `${context}\nUser: ${userInput}\nBot:`;

            // Generate content from the AI model, passing the context for guidance
            const result = await model.generateContent(prompt);

            const responseText = result.response.text();

            // Add bot's response to chat history
            setChatHistory([...newChatHistory, { sender: "bot", text: responseText }]);

            // Set bot response to display
            setBotResponse(responseText);
        } catch (error) {
            console.error("Error generating content:", error);
            setBotResponse("Sorry, I couldn't generate a response.");
        }
        setLoading(false);
        setUserInput(""); // Clear the input field
    };

    return (
        <div className="h-[120vh] min-w-full flex flex-col justify-end p-4 overflow-hidden">
            <div className="flex flex-col space-y-4 p-4 bg-white rounded-lg shadow-lg max-w-lg mx-auto">
                {/* Chat History */}
                <div className="flex flex-col space-y-2 overflow-y-auto h-[100%] ">
                    {chatHistory.map((message, index) => (
                        <div
                            key={index}
                            className={`p-2 rounded-lg ${message.sender === "user" ? "bg-blue-200 self-end" : "bg-gray-200"}`}
                        >
                            <span>{message.text}</span>
                        </div>
                    ))}
                </div>

                {/* User Input Form */}
                <form onSubmit={handleUserInput} className="flex items-center space-x-2 mt-4">
                    <input
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder="Ask a question..."
                        className="p-2 rounded-lg  border-gray-300 flex-1 w-full"
                    />
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg" disabled={loading}>
                        {loading ? "Loading..." : "Send"}
                    </button>
                </form>

            
            </div>
        </div>
    );
};

export default ChatBot;