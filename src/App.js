import React from "react";
import Button from "./Components/Button";
import FormAddFriend from "./Components/FormAddFriend";
import FormSplitBill from "./Components/FormSplitBill";
import FriendsList from "./Components/FriendsList";
import { useState } from "react";
import InitialFriends from "./Components/Data";

const App = () => {
  const [displayAddFriend, setDisplayAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState([]);
  const [listOfFriend, setListOfFriend] = useState(InitialFriends);
  const handleAddFriend = () => {
    setDisplayAddFriend((prev) => !prev);
    console.log(displayAddFriend);
  };
  const newFriend = (friend) => {
    setListOfFriend((prev) => [...prev, friend]);
  };
  const handleSelection = (friend) => {
    setSelectedFriend({ ...friend });
  };
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          listOfFriend={listOfFriend}
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
        />
        {displayAddFriend && (
          <FormAddFriend
            onAddNewfriend={newFriend}
            onDisplayAddFriend={setDisplayAddFriend}
          />
        )}
        <Button onClick={handleAddFriend}>
          {displayAddFriend ? "Close" : "Add friend "}
        </Button>
      </div>
      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} />}
    </div>
  );
};

export default App;
