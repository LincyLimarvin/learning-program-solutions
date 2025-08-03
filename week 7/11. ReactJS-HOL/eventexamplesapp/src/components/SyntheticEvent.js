import React from 'react';

function SyntheticEvent() {
  const handleClick = (e) => {
    e.preventDefault();
    alert("I was clicked");
  };

  return (
    <div>
      <button onClick={handleClick}>Synthetic Click</button>
    </div>
  );
}

export default SyntheticEvent;
