import React, { useState } from "react";

const Bucket = () => {
  const [isVisibled, setIsVisibled] = useState(true);
  const handleClickButton = () => {
    setIsVisibled(!isVisibled);
  };
  return (
    <div>
      <button onClick={handleClickButton}>Bucket</button>
      {isVisibled && <p>Name: </p>}
      {isVisibled && <p>Price</p>}
      {isVisibled && <p>Count</p>}
    </div>
  );
};

export default Bucket;
