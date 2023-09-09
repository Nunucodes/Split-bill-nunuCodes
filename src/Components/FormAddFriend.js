import React from "react";
import { useState } from "react";

const FormAddFriend = ({ onAddNewfriend, onDisplayAddFriend }) => {
  const randomNum = Math.trunc(Math.random() * 800);
  const [friendName, setFriendName] = useState("");
  const [imageUrl, setImageurl] = useState(
    `https://i.pravatar.cc/48?u=118${String(randomNum)}`
  );
  //   console.log(`https://i.pravatar.cc/48?u=118${String(randomNum)}`);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!friendName || !imageUrl) return;
    const newFriend = {
      name: friendName,
      image: imageUrl,
      id: Date.now(),
      balance: 0,
    };
    onAddNewfriend(newFriend);
    setFriendName("");
    setImageurl(`https://i.pravatar.cc/48?u=118${String(randomNum)}`);
    onDisplayAddFriend((prev) => !prev);
  };

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label> 👫 Friend name</label>
      <input
        type="text"
        value={friendName}
        onChange={(event) => setFriendName(event.target.value)}
      />
      <label> 🌄Image URL</label>
      <input
        type="text"
        value={imageUrl}
        onChange={(event) => setImageurl(event.target.value)}
      />
      <button className="button" type="submit">
        Add
      </button>
    </form>
  );
};

export default FormAddFriend;
