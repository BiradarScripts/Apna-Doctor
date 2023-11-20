import WhatsApp from "./pages/WhatsApp";
import "bootstrap/dist/css/bootstrap.min.css";
import ChatState from "./context/chatroom/ChatState";

function App() {
  return (
    <ChatState>
    <WhatsApp />
    </ChatState>
  )
  
}

export default App;
