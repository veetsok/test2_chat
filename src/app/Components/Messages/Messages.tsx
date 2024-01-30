"use client";

import React from "react";
import * as ST from "./styled/styled";
import styles from "../../page.module.css";
import { Input } from "antd";
import ImageAtom from "@/app/UI_KIT/Atoms/Image.atom";
import ImageEnum from "@/app/UI_KIT/Atoms/Image.atom/enum";
import MentionIcon from "../../shared/icons/mention.svg?react";
import SmileyIcon from "../../shared/icons/smiley.svg?react";
import AirplaneIcon from "../../shared/icons/paper-airplane.svg?react";
import Colors from "@/app/constants/colors";

interface MessagesProps {}

const Messages: React.FC<MessagesProps> = () => {
  return (
    <>
      <ST.Container className={styles.Container}>
        <ST.Content>GOVNO</ST.Content>
      </ST.Container>
      <ST.MessageType>
        <ImageAtom
          cursor="pointer"
          type={ImageEnum.enum_defaultSvg}
          fill={Colors.BLACK}
          icon={<SmileyIcon />}
        />
        <Input placeholder="Start typing..." />

        <ImageAtom
          cursor="pointer"
          type={ImageEnum.enum_defaultSvg}
          fill={Colors.MENTION}
          icon={<MentionIcon />}
        />
        <ImageAtom
          cursor="pointer"
          type={ImageEnum.enum_defaultSvg}
          fill={Colors.AIRPLANE}
          icon={<AirplaneIcon />}
        />
      </ST.MessageType>
    </>
  );
};
export default Messages;

// "use client";

// import React, { useState } from "react";
// import { Avatar, Input, Button, List, Space, message } from "antd";
// import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
// import dayjs from "dayjs";
// import "dayjs/locale/ru";
// import ST from "../../page.module.css";

// const Message = ({ text, isBot, isEditable, onEdit, onDelete, timestamp }) => (
//   <List.Item style={{ textAlign: isBot ? "left" : "right" }}>
//     <List.Item.Meta
//       avatar={isBot ? <Avatar icon="user" /> : <Avatar />}
//       title={isBot ? "Бот" : "Пользователь"}
//       description={
//         <>
//           <div>{text}</div>
//           <Space>
//             {isEditable && <Button icon={<EditOutlined />} onClick={onEdit} />}
//             {isEditable && <Button icon={<DeleteOutlined />} onClick={onDelete} />}
//             {dayjs(timestamp).format("HH:mm")}
//           </Space>
//         </>
//       }
//     />
//   </List.Item>
// );

// const Chat = () => {
//   const [messages, setMessages] = useState([]);

//   const addMessage = (text, isBot = false) => {
//     setMessages([
//       ...messages,
//       {
//         text,
//         isBot,
//         timestamp: dayjs(),
//       },
//     ]);
//   };

//   const handleSendMessage = (text) => {
//     addMessage(text);
//     if (text.toLowerCase() === "бот") {
//       addMessage("Hello World!", true);
//     }
//   };

//   const handleEditMessage = (index, newText) => {
//     const updatedMessages = [...messages];
//     updatedMessages[index].text = newText;
//     setMessages(updatedMessages);
//   };

//   const handleDeleteMessage = (index) => {
//     const updatedMessages = [...messages];
//     updatedMessages.splice(index, 1);
//     setMessages(updatedMessages);
//   };

//   return (
//     <div className={ST.Container}>
//       <List
//         dataSource={messages}
//         renderItem={(item, index) => (
//           <Message
//             key={index}
//             text={item.text}
//             isBot={item.isBot}
//             isEditable={!item.isBot}
//             timestamp={item.timestamp}
//             onEdit={() => handleEditMessage(index, "Новый текст")}
//             onDelete={() => handleDeleteMessage(index)}
//           />
//         )}
//       />
//       <Input.Search enterButton="Отправить" onSearch={handleSendMessage} />
//     </div>
//   );
// };

// export default Chat;
