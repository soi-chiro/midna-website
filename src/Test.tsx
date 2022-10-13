import { Button } from "@mui/material";
import React, { useState } from "react";

const Test = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <h1>Im the test headline!</h1>
      <div>
        <Button variant="contained">Increase Count</Button>
      </div>
      <div>
        <Button variant="contained">Decrease Count</Button>
      </div>
    </>
  );
};

export default Test;
