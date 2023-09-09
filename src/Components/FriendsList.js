import React from "react";
import Friend from "./Friend";

const FriendsList = ({ listOfFriend, onSelection, selectedFriend }) => {
  const friends = listOfFriend;
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          name={friend.name}
          image={friend.image}
          balance={friend.balance}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
          friend={friend}
        />
      ))}
    </ul>
  );
};

export default FriendsList;
