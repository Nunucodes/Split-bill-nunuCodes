import React from "react";
import Button from "./Button";

const Friend = ({
  name,
  image,
  balance,
  onSelection,
  friend,
  selectedFriend,
}) => {
  const isSelected = selectedFriend.id === friend.id;
  const handleSelection = () => {
    const friendObject = {
      name,
      id: friend.id,
      image,
      balance,
    };
    onSelection(friendObject);
  };
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={image} alt={name} />
      <h3> {name}</h3>
      {balance < 0 && (
        <p className="red">
          You owe {name} ${Math.abs(balance)}
        </p>
      )}
      {balance > 0 && (
        <p className="green">
          {name} owes you ${Math.abs(balance)}
        </p>
      )}
      {balance === 0 && <p>You and {name} are even</p>}
      <Button onClick={handleSelection}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
};

export default Friend;
