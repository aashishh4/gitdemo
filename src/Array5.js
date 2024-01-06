import React, { useState } from "react";

function Array5() {
  const [arr, setArr] = useState(["ram", "syam", "mohan", "janny", "amit"]);
  const [checkedItems, setCheckedItems] = useState([]);
  console.log("checkedItems", checkedItems);
  console.log("arr", arr);

  function handleCheckboxChange(event, index) {
    const { checked } = event.target;
    if (checked) {
      setCheckedItems([...checkedItems, index]);
    } else {
      const updatedCheckedItems = checkedItems.filter((item) => item !== index);
      setCheckedItems(updatedCheckedItems);
    }
  }

  function deleteSelected(index) {
    const newArr = arr.filter((item, i) => i !== index);
    setArr(newArr);
    setCheckedItems(checkedItems.filter((item) => item !== index));
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
          {checkedItems.includes(i) && (
            <button onClick={() => deleteSelected(i)}>Delete</button>
          )}
        </div>
      ))}
    </div>
  );
}

export default Array5;
