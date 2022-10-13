import { Button, makeStyles } from "@mui/material";
import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttonContainer: {},
  })
);

const Test = () => {
  const classes = useStyles();

  const [count, setCount] = useState<number>(0);
  return (
    <>
      <h1>Im the test headline and i contain the number: {count}</h1>
      <div>
        <Button variant="contained">Increase Count</Button>
        <Button variant="contained">Decrease Count</Button>
      </div>
    </>
  );
};

export default Test;
