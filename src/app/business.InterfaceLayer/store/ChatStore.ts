import create from "zustand";
import dayjs from "dayjs";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: string;
}

interface ChatState {
  messages: Message[];
  addMessage: (text: string) => void;
  editMessage: (id: number, newText: string) => void;
  deleteMessage: (id: number) => void;
}

const useChatStore = create<ChatState>((set) => {
  const initialMessages = JSON.parse(localStorage.getItem("chatMessages") || "[]").map(
    (message) => ({
      ...message,
      timestamp: dayjs(message.timestamp),
    })
  );

  return {
    messages: initialMessages,
    addMessage: (text) => {
      set((state) => {
        const newMessage: Message = {
          id: state.messages.length + 1,
          text,
          isBot: false,
          timestamp: dayjs(),
        };
        const updatedMessages = [...state.messages, newMessage];
        localStorage.setItem("chatMessages", JSON.stringify(updatedMessages));
        return { messages: updatedMessages };
      });
    },

    editMessage: (id, newText) => {
      set((state) => {
        const updatedMessages = state.messages.map((message) =>
          message.id === id ? { ...message, text: newText } : message
        );
        localStorage.setItem("chatMessages", JSON.stringify(updatedMessages));

        return { messages: updatedMessages };
      });
    },
    deleteMessage: (id) => {
      set((state) => {
        const updatedMessages = state.messages.filter((message) => message.id !== id);
        localStorage.setItem("chatMessages", JSON.stringify(updatedMessages));
        return { messages: updatedMessages };
      });
    },
  };
});

export default useChatStore;
