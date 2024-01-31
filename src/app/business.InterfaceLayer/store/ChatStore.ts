import { create } from "zustand";
import dayjs from "dayjs";

const bots = [
  { name: "Janet", avatar: "/img/1.jpg" },
  { name: "Aubrey", avatar: "/img/2.jpg" },
  { name: "Anna", avatar: "/img/3.jpg" },
  { name: "Zaga", avatar: "/img/4.jpg" },
];

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: any;
  botName?: string;
  botAvatar?: string;
}

interface ChatState {
  messages: Message[];
  addMessage: (text: string | File) => void;
  editMessage: (id: number, newText: string) => void;
  deleteMessage: (id: number) => void;
}

const useChatStore = create<ChatState>((set) => {
  let initialMessages = [];
  if (typeof localStorage !== "undefined") {
    initialMessages = JSON.parse(localStorage.getItem("chatMessages") || "[]").map(
      (message: Message) => ({
        ...message,
        timestamp: dayjs(message.timestamp),
      })
    );
  }
  return {
    messages: initialMessages,
    addMessage: (text) => {
      set((state) => {
        let newMessage: Message;
        if (typeof text === "string") {
          newMessage = {
            id: dayjs().valueOf(),
            text,
            isBot: false,
            timestamp: dayjs(),
          };
        } else {
          newMessage = {
            id: dayjs().valueOf(),
            text: URL.createObjectURL(text),
            isBot: false,
            timestamp: dayjs(),
          };
        }
        const botMessage: Message = {
          id: dayjs().add(1, "millisecond").valueOf(),
          text: "Hello World!",
          isBot: true,
          timestamp: dayjs().add(1, "second"),
          botName: bots[Math.floor(Math.random() * bots.length)].name,
          botAvatar: bots[Math.floor(Math.random() * bots.length)].avatar,
        };
        const updatedMessages = [...state.messages, newMessage, botMessage];
        if (typeof localStorage !== "undefined") {
          localStorage.setItem("chatMessages", JSON.stringify(updatedMessages));
        }
        return { messages: updatedMessages };
      });
    },
    editMessage: (id, newText) => {
      set((state) => {
        const updatedMessages = state.messages.map((message) =>
          message.id === id ? { ...message, text: newText } : message
        );
        if (typeof localStorage !== "undefined") {
          localStorage.setItem("chatMessages", JSON.stringify(updatedMessages));
        }

        return { messages: updatedMessages };
      });
    },
    deleteMessage: (id) => {
      set((state) => {
        const updatedMessages = state.messages.filter((message) => message.id !== id);
        if (typeof localStorage !== "undefined") {
          localStorage.setItem("chatMessages", JSON.stringify(updatedMessages));
        }
        return { messages: updatedMessages };
      });
    },
  };
});

export default useChatStore;
