"use client";

import React, { useState, useRef } from "react";
import * as ST from "./styled/styled";
import styles from "../../page.module.css";
import { Input, List, Popover, Space } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import ImageAtom from "@/app/UI_KIT/Atoms/Image.atom";
import ImageEnum from "@/app/UI_KIT/Atoms/Image.atom/enum";
import MentionIcon from "../../shared/icons/mention.svg?react";
import SmileyIcon from "../../shared/icons/smiley.svg?react";
import IndicatorIcon from "../../shared/icons/indicator.svg?react";
import ReceiptIcon from "../../shared/icons/receipt.svg?react";
import AirplaneIcon from "../../shared/icons/paper-airplane.svg?react";
import Colors from "@/app/constants/colors";
import useChatStore from "@/app/business.InterfaceLayer/store/ChatStore";
import SmileyMenu from "./Components/SmileyMenu/SmileyMenu";

interface MessagesProps {}

const Messages: React.FC<MessagesProps> = () => {
  const { messages, addMessage, editMessage, deleteMessage } = useChatStore();

  const [smileyMenuVisible, setSmileyMenuVisible] = useState(false);

  const handleSelectSmiley = (smiley: any) => {
    setInputValue((prevValue) => prevValue + ` ${smiley} `);
    setSmileyMenuVisible(false);
  };

  const [inputValue, setInputValue] = useState<string>("");
  const [editingMessageId, setEditingMessageId] = useState<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      if (editingMessageId !== null) {
        editMessage(editingMessageId, inputValue);
        setEditingMessageId(null);
      } else {
        addMessage(inputValue);
      }
      setInputValue("");
    }
  };

  const handleEditMessage = (id: number, text: string) => {
    setEditingMessageId(id);
    setInputValue(text);
  };

  const handleDeleteMessage = (id: number) => {
    deleteMessage(id);
  };

  const handleUploadImage = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      addMessage(file);
    }
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
                  avatar={
                    item.isBot ? (
                      <ST.Indicator>
                        <ImageAtom
                          className="indicator"
                          cursor="pointer"
                          type={ImageEnum.enum_defaultSvg}
                          icon={<IndicatorIcon />}
                          fill="#34C759"
                        />
                        <ImageAtom
                          width="32px"
                          height="32px"
                          $borderRadius="200px"
                          type={ImageEnum.enum_srcImage}
                          src={item.botAvatar}
                          alt={item.botName}
                        />
                      </ST.Indicator>
                    ) : (
                      ""
                    )
                  }
                  title={item.isBot ? item.botName : ""}
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
                            onClick={() => handleEditMessage(item.id, item.text)}
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
                        {dayjs(item.timestamp).format("h:mm A")}
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
        <Popover
          content={<SmileyMenu onSelectSmiley={handleSelectSmiley} />}
          open={smileyMenuVisible}
          trigger="click"
          placement="topRight"
          onOpenChange={setSmileyMenuVisible}
        >
          <ImageAtom
            cursor="pointer"
            type={ImageEnum.enum_defaultSvg}
            fill={Colors.BLACK}
            icon={<SmileyIcon />}
          />
        </Popover>
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
          onClick={handleUploadImage}
        />
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleImageChange}
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
