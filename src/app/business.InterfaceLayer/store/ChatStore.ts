import create from "zustand";
import dayjs from "dayjs";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: any;
}

interface ChatState {
  messages: Message[];
  addMessage: (text: string) => void;
  editMessage: (id: number, newText: string) => void;
  deleteMessage: (id: number) => void;
}

const useChatStore = create<ChatState>((set) => {
  const initialMessages = JSON.parse(localStorage.getItem("chatMessages") || "[]").map(
    (message: Message) => ({
      ...message,
      timestamp: dayjs(message.timestamp),
    })
  );

  return {
    messages: initialMessages,
    addMessage: (text) => {
      set((state) => {
        const newMessage: Message = {
          id: dayjs().valueOf(),
          text,
          isBot: false,
          timestamp: dayjs(),
        };

        const botMessage: Message = {
          id: dayjs().add(1, "millisecond").valueOf(),
          text: "Бот",
          isBot: true,
          timestamp: dayjs().add(1, "second"),
        };

        const updatedMessages = [...state.messages, newMessage, botMessage];
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
