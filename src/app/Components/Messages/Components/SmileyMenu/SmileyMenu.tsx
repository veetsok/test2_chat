import React from "react";
import * as ST from "./styled/styled";
import Menu from "antd/es/menu";

type SmileyMenuProps = {
  onSelectSmiley?: any;
};

const SmileyMenu: React.FC<SmileyMenuProps> = ({ onSelectSmiley }) => {
  const smileys = ["😊", "🤓", "😔", "😋", "🥳"]; // Используйте символы смайликов в качестве строк

  return (
    <Menu>
      {smileys.map((smiley, index) => (
        <Menu.Item key={index} onClick={() => onSelectSmiley(smiley)}>
          {smiley}
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default SmileyMenu;
