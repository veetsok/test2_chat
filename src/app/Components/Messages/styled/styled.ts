import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div`
  flex: 1 1 0%;
`;

export const MessageType = styled.div`
  box-shadow: 0px 1px 0px 0px #e5e5ea inset;
  padding: 16px 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  & input {
    width: 90%;
  }
`;
