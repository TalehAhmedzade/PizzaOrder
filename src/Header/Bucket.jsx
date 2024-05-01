import React, { useState } from "react";

const Bucket = ({data}) => {
  const [isVisibled, setIsVisibled] = useState(false);
  const handleClickButton = () => {
    setIsVisibled(!isVisibled);
    console.log(data);
  };
  return (
    <div>
      <button onClick={handleClickButton}>Bucket</button>
      {isVisibled && <p>Mebleg: {(data.reduce((accum,item)=>{return accum+item.price},0)).toFixed(2)}</p>}
      {isVisibled && <p>Say: {data.length}</p>}
    </div>
  );
};

export default Bucket;
