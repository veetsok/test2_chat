import { List } from "antd";
import styled from "styled-components";

interface MessagesStylesProps {
  isBot?: boolean;
}

export const Container = styled.div``;

export const Content = styled.div`
  flex: 1 1 0%;
  width: 95%;
  margin: 0 auto;
`;

export const MessageType = styled.div`
  box-shadow: 0px 1px 0px 0px #e5e5ea inset;
  padding: 16px 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  .ant-input-group-wrapper {
    width: 90%;
  }
`;

export const StyledListItem = styled(List.Item)<MessagesStylesProps>`
  text-align: ${(props) => (props.isBot ? "left" : "right")};
`;

export const StyledListItemMeta = styled(List.Item.Meta)<MessagesStylesProps>`
  justify-content: ${(props) => (props.isBot ? "flex-start" : "flex-end")};
  .ant-list-item-meta-content {
    background: ${(props) => (props.isBot ? "#F2F2F7" : "#007AFF")};
    max-width: 40%;
    padding: ${(props) => (props.isBot ? "6px 8px 4px 6px" : "4px 8px")};
    border-radius: 6px;
    color: ${(props) => (props.isBot ? "#2C2C2E" : "#fff")};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }
  .ant-space-item {
    color: ${(props) => (props.isBot ? "#666668" : "#fff")};
  }
`;

export const ListDescription = styled.div<MessagesStylesProps>`
  color: ${(props) => (props.isBot ? "#2C2C2E" : "#fff")};
  text-align: left;
`;
