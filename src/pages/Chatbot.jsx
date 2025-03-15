import  { useState } from "react";
import { getChatResponse } from "../services/gemini";
import { FaPaperPlane } from "react-icons/fa";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");

    const botResponse = await getChatResponse(input);
    setMessages([...newMessages, { text: botResponse, sender: "bot" }]);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      sx={{ padding: 2 }}
    >
      {/* Chat Box */}
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          maxWidth: 600,
          height: "70vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 2,
        }}
      >
        {/* Messages */}
        <Box
          flex={1}
          overflow="auto"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            padding: 1,
          }}
        >
          {messages.map((msg, index) => (
            <Box
              key={index}
              display="flex"
              justifyContent={msg.sender === "user" ? "flex-end" : "flex-start"}
            >
              <Typography
                variant="body1"
                sx={{
                  backgroundColor: msg.sender === "user" ? "#1976d2" : "#e0e0e0",
                  color: msg.sender === "user" ? "white" : "black",
                  padding: 1.5,
                  borderRadius: 2,
                  maxWidth: "80%",
                }}
              >
                {msg.text}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Input Box */}
        <Box display="flex" alignItems="center" gap={1}>
          <TextField
            variant="outlined"
            fullWidth
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything..."
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={sendMessage}
            sx={{
              padding: "12px 16px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FaPaperPlane style={{ fontSize: "1.2rem", color: "white" }} />
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Chatbot;