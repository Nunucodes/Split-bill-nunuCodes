import React from "react";
import Button from "./Button";

const FormSplitBill = ({ selectedFriend }) => {
  return (
    <form className="form-split-bill">
      <h2>SPLIT A BILL WITH {selectedFriend.name}</h2>
      <label> 💰Bill value</label>
      <input type="text" />
      <label> 🧍‍♂️Your expense</label>
      <input type="text" />
      <label> 👫 {selectedFriend.name} expense</label>
      <input type="text" disabled />
      <label> 🤑Who is paying the bill</label>
      <select>
        <option value="user"> You</option>
        <option value="friend"> {selectedFriend.name}</option>
      </select>
      <Button> Split bill</Button>
    </form>
  );
};

export default FormSplitBill;
