"use client";

import React, { useState } from "react";
import * as ST from "./styled/styled";
import styles from "../../page.module.css";
import { Input, List, Avatar, Space } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import ImageAtom from "@/app/UI_KIT/Atoms/Image.atom";
import ImageEnum from "@/app/UI_KIT/Atoms/Image.atom/enum";
import MentionIcon from "../../shared/icons/mention.svg?react";
import SmileyIcon from "../../shared/icons/smiley.svg?react";
import ReceiptIcon from "../../shared/icons/receipt.svg?react";
import AirplaneIcon from "../../shared/icons/paper-airplane.svg?react";
import Colors from "@/app/constants/colors";
import useChatStore from "@/app/business.InterfaceLayer/store/ChatStore";

interface MessagesProps {}

const Messages: React.FC<MessagesProps> = () => {
  const { messages, addMessage, editMessage, deleteMessage } = useChatStore();
  const [inputValue, setInputValue] = useState<string>("");

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      addMessage(inputValue);
      setInputValue(""); // Очистка инпута после отправки сообщения
    }
  };

  const handleEditMessage = (id: number, newText: string) => {
    editMessage(id, newText);
  };

  const handleDeleteMessage = (id: number) => {
    deleteMessage(id);
  };

  console.log(messages);

  return (
    <>
      <ST.Container className={styles.Container}>
        <ST.Content>
          <List
            dataSource={messages}
            renderItem={(item) => (
              <ST.StyledListItem isBot={item.isBot}>
                <ST.StyledListItemMeta
                  isBot={item.isBot}
                  avatar={item.isBot ? <Avatar icon={<EditOutlined />} /> : ""}
                  title={item.isBot ? "USERS" : ""}
                  description={
                    <>
                      <ST.ListDescription isBot={item.isBot}>
                        {item.text}
                      </ST.ListDescription>
                      <Space>
                        {!item.isBot && (
                          <ImageAtom
                            cursor="pointer"
                            type={ImageEnum.enum_defaultSvg}
                            icon={<EditOutlined />}
                            onClick={() => handleEditMessage(item.id, "Новый текст")}
                          />
                        )}
                        {!item.isBot && (
                          <ImageAtom
                            cursor="pointer"
                            type={ImageEnum.enum_defaultSvg}
                            icon={<DeleteOutlined />}
                            onClick={() => handleDeleteMessage(item.id)}
                          />
                        )}
                        {dayjs(item.timestamp).format("HH:mm")}
                        {!item.isBot && (
                          <ImageAtom
                            cursor="pointer"
                            type={ImageEnum.enum_defaultSvg}
                            icon={<ReceiptIcon />}
                          />
                        )}
                      </Space>
                    </>
                  }
                />
              </ST.StyledListItem>
            )}
          />
        </ST.Content>
      </ST.Container>
      <ST.MessageType>
        <ImageAtom
          cursor="pointer"
          type={ImageEnum.enum_defaultSvg}
          fill={Colors.BLACK}
          icon={<SmileyIcon />}
        />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
        >
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Start typing..."
          />
        </form>
        <ImageAtom
          cursor="pointer"
          type={ImageEnum.enum_defaultSvg}
          fill={Colors.MENTION}
          icon={<MentionIcon />}
        />
        <ImageAtom
          cursor="pointer"
          onClick={handleSendMessage}
          type={ImageEnum.enum_defaultSvg}
          fill={Colors.AIRPLANE}
          icon={<AirplaneIcon />}
        />
      </ST.MessageType>
    </>
  );
};
export default Messages;
