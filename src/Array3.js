import React, { useState } from "react";

function Array3() {
  const [arr, setArr] = useState(["ram", "syam", "mohan", "janny", "amit"]);
  const [checkedItems, setCheckedItems] = useState([]);
  console.log("checkedItems",checkedItems);
  console.log("arr",arr)

  function handleCheckboxChange(event, index) {
    const { checked } = event.target;
    if (checked) {
      setCheckedItems([...checkedItems, index]);
    } else {
      const updatedCheckedItems = checkedItems.filter((item) => item !== index);
      setCheckedItems(updatedCheckedItems);
    }
  }

  function deleteSelected() {
    const newArr = arr.filter((item, i) => !checkedItems.includes(i));
    setArr(newArr);
    setCheckedItems([]);
   
  }
  
  return (
    <div>
      {arr.map((item, i) => (
        <div key={i}>
          <input
            type="checkbox"
            checked={checkedItems.includes(i)}
            onChange={(e) => handleCheckboxChange(e, i)}
          />
          {item}
        </div>
      ))}
      <button onClick={deleteSelected}>Delete</button>
    </div>
  );
}

export default Array3;
