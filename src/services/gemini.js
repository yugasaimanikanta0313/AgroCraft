import axios from "axios";

const API_KEY = "AIzaSyBpFDI_lIHCAVbFxEzfVManGYbDNlGQSbM";  // Replace with your API Key
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

export const getChatResponse = async (message) => {
  try {
    const response = await axios.post(
      API_URL,
      {
        contents: [{ parts: [{ text: message }] }]
      },
      {
        headers: { "Content-Type": "application/json" }
      }
    );
    
    return response.data.candidates?.[0]?.content?.parts?.[0]?.text || "No response";
  } catch (error) {
    console.error("Error fetching response:", error);
    return "Sorry, I couldn't process your request.";
  }
};
