import React, { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState();

  const onSearchChangeHandler = (e) => {
    // console.log(e.target.value);
    setSearchQuery(e.target.value);
  };

  const onSearchClick = () => {
    window.open(`https://google.com/search?q=${searchQuery}`, "_blank");
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearchClick();
      setSearchQuery("");
    }
  };

  return (
    <div className="form">
      <h1>Welcome!!</h1>
      <input
        type="text"
        value={searchQuery}
        onKeyPress={handleKeyPress}
        onChange={onSearchChangeHandler}
      />
      <button onClick={onSearchClick}>Search</button>
    </div>
  );
}

export default App;
